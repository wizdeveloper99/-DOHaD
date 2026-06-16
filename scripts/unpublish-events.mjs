/**
 * Unpublish all events so placeholder/demo entries no longer appear on the website.
 *
 * Usage:
 *   bun run scripts/unpublish-events.mjs
 *   bun run scripts/unpublish-events.mjs --delete
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) {
    throw new Error('Missing .env.local');
  }
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

const deleteMode = process.argv.includes('--delete');

async function main() {
  const uri = loadEnv();
  await mongoose.connect(uri);

  const collection = mongoose.connection.db.collection('events');
  const events = await collection.find({}).toArray();

  if (events.length === 0) {
    console.log('No events found in database.');
    process.exit(0);
  }

  console.log(`Found ${events.length} event(s):`);
  for (const event of events) {
    console.log(`  - ${event.title} (${event.published ? 'published' : 'draft'})`);
  }

  if (deleteMode) {
    const result = await collection.deleteMany({});
    console.log(`\nDeleted ${result.deletedCount} event(s).`);
  } else {
    const result = await collection.updateMany({}, { $set: { published: false } });
    console.log(`\nUnpublished ${result.modifiedCount} event(s).`);
    console.log('Events remain in admin as drafts. Use --delete to remove them entirely.');
  }

  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
