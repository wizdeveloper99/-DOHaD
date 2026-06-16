/**
 * Audit and remove unused Cloudinary assets.
 *
 * Usage:
 *   bun run scripts/cleanup-media.mjs audit
 *   bun run scripts/cleanup-media.mjs delete --confirm
 *   bun run scripts/cleanup-media.mjs delete-orphans --confirm
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_FOLDERS = ['dohad-india', 'advisory', 'events', 'pioneer', 'policies'];

function loadEnv() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) {
    throw new Error('Missing .env.local');
  }
  const env = readFileSync(envPath, 'utf8');
  const get = (key) => {
    const match = env.match(new RegExp(`^${key}=(.+)$`, 'm'));
    return match ? match[1].trim().replace(/^["']|["']$/g, '') : null;
  };
  return {
    mongoUri: get('MONGODB_URI'),
    cloudName: get('CLOUDINARY_CLOUD_NAME'),
    apiKey: get('CLOUDINARY_API_KEY'),
    apiSecret: get('CLOUDINARY_API_SECRET'),
  };
}

function publicIdFromUrl(url) {
  if (!url || typeof url !== 'string') return null;
  if (!url.includes('res.cloudinary.com') && !url.includes('cloudinary.com')) return null;
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function collectCloudinaryUrls(value, urls = new Set()) {
  if (!value) return urls;
  if (typeof value === 'string') {
    if (value.includes('cloudinary.com')) urls.add(value);
    return urls;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectCloudinaryUrls(item, urls));
    return urls;
  }
  if (typeof value === 'object') {
    Object.values(value).forEach((item) => collectCloudinaryUrls(item, urls));
  }
  return urls;
}

function isProjectAsset(publicId) {
  return PROJECT_FOLDERS.some((folder) => publicId === folder || publicId.startsWith(`${folder}/`));
}

async function fetchAllAssets() {
  const result = await cloudinary.search
    .expression('resource_type:image OR resource_type:raw')
    .sort_by('created_at', 'desc')
    .max_results(500)
    .execute();
  return result.resources;
}

async function fetchProjectAssets() {
  const expression = PROJECT_FOLDERS.map((folder) => `folder:${folder}`).join(' OR ');
  const result = await cloudinary.search
    .expression(`(${expression}) AND (resource_type:image OR resource_type:raw)`)
    .sort_by('created_at', 'desc')
    .max_results(500)
    .execute();
  return result.resources;
}

async function fetchReferencedPublicIds() {
  const db = mongoose.connection.db;
  const collections = ['events', 'advisorymembers', 'sitesettings'];
  const referenced = new Set();

  for (const name of collections) {
    const docs = await db.collection(name).find({}).toArray();
    for (const doc of docs) {
      const urls = collectCloudinaryUrls(doc);
      for (const url of urls) {
        const publicId = publicIdFromUrl(url);
        if (publicId) referenced.add(publicId);
      }
    }
  }

  return referenced;
}

async function audit() {
  const assets = await fetchProjectAssets();
  const referenced = await fetchReferencedPublicIds();

  const used = [];
  const unused = [];

  for (const asset of assets) {
    if (referenced.has(asset.public_id)) {
      used.push(asset);
    } else {
      unused.push(asset);
    }
  }

  console.log(`\nReferenced in database: ${referenced.size}`);
  console.log(`Cloudinary assets in project folders: ${assets.length}`);
  console.log(`In use: ${used.length}`);
  console.log(`Unused (safe to delete): ${unused.length}\n`);

  if (used.length) {
    console.log('=== IN USE ===');
    used.forEach((asset) => {
      console.log(`  ${asset.public_id}`);
    });
  }

  if (unused.length) {
    console.log('\n=== UNUSED ===');
    unused.forEach((asset) => {
      console.log(`  ${asset.public_id} (${(asset.bytes / 1024).toFixed(1)} KB)`);
    });
  } else {
    console.log('\nNo unused assets found.');
  }

  return { used, unused };
}

async function auditOrphans() {
  const assets = await fetchAllAssets();
  const orphans = assets.filter((asset) => !isProjectAsset(asset.public_id));

  console.log(`\nOrphan assets outside project folders: ${orphans.length}`);
  if (orphans.length) {
    console.log('=== ORPHANS ===');
    orphans.forEach((asset) => {
      console.log(`  ${asset.public_id} (${(asset.bytes / 1024).toFixed(1)} KB)`);
    });
  } else {
    console.log('No orphan assets found.');
  }

  return orphans;
}

async function deleteOrphans() {
  const orphans = await auditOrphans();
  if (!orphans.length) {
    console.log('\nNothing to delete.');
    return;
  }

  console.log(`\nDeleting ${orphans.length} orphan asset(s)...`);
  for (const asset of orphans) {
    const result = await cloudinary.uploader.destroy(asset.public_id, {
      resource_type: asset.resource_type,
    });
    console.log(`  ${asset.public_id}: ${result.result}`);
  }
  console.log('\nOrphan cleanup complete.');
}

async function deleteUnused() {
  const { unused } = await audit();
  if (!unused.length) {
    console.log('\nNothing to delete.');
    return;
  }

  console.log(`\nDeleting ${unused.length} unused asset(s)...`);
  for (const asset of unused) {
    const result = await cloudinary.uploader.destroy(asset.public_id, {
      resource_type: asset.resource_type,
    });
    console.log(`  ${asset.public_id}: ${result.result}`);
  }
  console.log('\nCleanup complete.');
}

function needsDatabase(command) {
  return command === 'audit' || command === 'delete';
}

async function main() {
  const command = process.argv[2] || 'audit';
  const confirm = process.argv.includes('--confirm');
  const { mongoUri, cloudName, apiKey, apiSecret } = loadEnv();

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Missing Cloudinary credentials in .env.local');
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

  if (needsDatabase(command)) {
    if (!mongoUri) {
      throw new Error('Missing MONGODB_URI in .env.local');
    }
    await mongoose.connect(mongoUri);
  }

  try {
    if (command === 'audit') {
      await audit();
      await auditOrphans();
    } else if (command === 'delete') {
      if (!confirm) {
        console.error('Pass --confirm to delete unused assets.');
        process.exit(1);
      }
      await deleteUnused();
    } else if (command === 'delete-orphans') {
      if (!confirm) {
        console.error('Pass --confirm to delete orphan assets.');
        process.exit(1);
      }
      await deleteOrphans();
    } else {
      console.error('Unknown command. Use: audit | delete --confirm | delete-orphans --confirm');
      process.exit(1);
    }
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
