/**
 * Test governance documents via API/DB without losing production data.
 *
 * Usage:
 *   bun run scripts/test-documents.mjs backup   # save current state
 *   bun run scripts/test-documents.mjs dummy    # apply dummy test data
 *   bun run scripts/test-documents.mjs restore  # restore from backup
 *   bun run scripts/test-documents.mjs verify   # print current document fields
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BACKUP_DIR = join(__dirname, '..', '.test-backup');
const BACKUP_FILE = join(BACKUP_DIR, 'documents-backup.json');

const DUMMY_PDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const DUMMY_DATA = {
  policies: {
    constitution: {
      url: DUMMY_PDF,
      title: '[TEST] Constitution',
      description: 'Dummy constitution document for admin UI testing. Safe to delete after review.',
    },
    governance: {
      url: DUMMY_PDF,
      title: '[TEST] Governance Guidelines',
      description: 'Dummy governance guidelines for testing the Documents admin section.',
    },
    codeOfConduct: {
      url: DUMMY_PDF,
      title: '[TEST] Code of Conduct',
      description: 'Dummy code of conduct used only during API/CMS testing.',
    },
    edi: {
      url: DUMMY_PDF,
      title: '[TEST] EDI Policy',
      description: 'Dummy EDI policy — appears on both Governance and Equity pages during testing.',
    },
    safeguarding: {
      url: DUMMY_PDF,
      title: '[TEST] Safeguarding Policy',
      description: 'Dummy safeguarding policy for Equity & Diversity page testing.',
    },
  },
  governancePage: {
    documentsSectionTitle: '[TEST] Official Documents',
    documentsSectionDescription: 'Dummy section — governance documents admin test. Restore after testing.',
  },
  equityDiversityPage: {
    policiesSectionTitle: '[TEST] Official Policies',
    policiesSectionDescription: 'Dummy section — equity policies admin test. Restore after testing.',
  },
};

function loadMongoUri() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) {
    throw new Error('Missing .env.local with MONGODB_URI');
  }
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

const siteSettingsSchema = new mongoose.Schema(
  {
    policies: { type: mongoose.Schema.Types.Mixed },
    governancePage: { type: mongoose.Schema.Types.Mixed },
    equityDiversityPage: { type: mongoose.Schema.Types.Mixed },
  },
  { strict: false, timestamps: true }
);

const SiteSettings =
  mongoose.models.SiteSettings || mongoose.model('SiteSettings', siteSettingsSchema);

async function connect() {
  const uri = loadMongoUri();
  await mongoose.connect(uri);
}

function pickDocumentFields(doc) {
  if (!doc) return null;
  const plain = doc.toObject ? doc.toObject() : doc;
  return {
    policies: plain.policies ?? null,
    governancePage: plain.governancePage ?? null,
    equityDiversityPage: plain.equityDiversityPage ?? null,
  };
}

async function backup() {
  await connect();
  const settings = await SiteSettings.findOne();
  const snapshot = pickDocumentFields(settings);

  mkdirSync(BACKUP_DIR, { recursive: true });
  writeFileSync(BACKUP_FILE, JSON.stringify(snapshot, null, 2), 'utf8');

  console.log('Backup saved to:', BACKUP_FILE);
  console.log(JSON.stringify(snapshot, null, 2));
  await mongoose.disconnect();
}

async function applyDummy() {
  await connect();

  if (!existsSync(BACKUP_FILE)) {
    console.log('No backup found — creating one first...');
    const settings = await SiteSettings.findOne();
    mkdirSync(BACKUP_DIR, { recursive: true });
    writeFileSync(BACKUP_FILE, JSON.stringify(pickDocumentFields(settings), null, 2), 'utf8');
    console.log('Backup saved to:', BACKUP_FILE);
  }

  const settings = await SiteSettings.findOne();
  if (!settings) {
    await SiteSettings.create(DUMMY_DATA);
  } else {
    settings.policies = DUMMY_DATA.policies;
    settings.governancePage = DUMMY_DATA.governancePage;
    settings.equityDiversityPage = DUMMY_DATA.equityDiversityPage;
    await settings.save();
  }

  console.log('Dummy document data applied.');
  console.log('Test pages:');
  console.log('  http://localhost:3000/who-are-we/governance');
  console.log('  http://localhost:3000/who-are-we/equity-diversity');
  console.log('  http://localhost:3000/admin/documents');
  console.log('\nRestore with: bun run scripts/test-documents.mjs restore');

  await mongoose.disconnect();
}

async function restore() {
  if (!existsSync(BACKUP_FILE)) {
    throw new Error(`No backup at ${BACKUP_FILE}. Run backup first.`);
  }

  const snapshot = JSON.parse(readFileSync(BACKUP_FILE, 'utf8'));
  await connect();

  const settings = await SiteSettings.findOne();
  if (!settings) {
    throw new Error('No SiteSettings document found in database.');
  }

  settings.policies = snapshot.policies;
  settings.governancePage = snapshot.governancePage;
  settings.equityDiversityPage = snapshot.equityDiversityPage;
  await settings.save();

  console.log('Original document data restored from backup.');
  console.log(JSON.stringify(pickDocumentFields(settings), null, 2));

  await mongoose.disconnect();
}

async function verify() {
  await connect();
  const settings = await SiteSettings.findOne();
  console.log(JSON.stringify(pickDocumentFields(settings), null, 2));
  await mongoose.disconnect();
}

const command = process.argv[2] || 'help';

const commands = {
  backup: backup,
  dummy: applyDummy,
  restore: restore,
  verify: verify,
};

if (!commands[command]) {
  console.log(`Unknown command: ${command}`);
  console.log('Commands: backup | dummy | restore | verify');
  process.exit(1);
}

commands[command]().catch((err) => {
  console.error(err);
  process.exit(1);
});
