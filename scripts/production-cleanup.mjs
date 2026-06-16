/**
 * Remove dummy / test data from MongoDB before production launch.
 *
 * Usage:
 *   bun run scripts/production-cleanup.mjs           # dry run (preview only)
 *   bun run scripts/production-cleanup.mjs --confirm # apply changes
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));
const confirm = process.argv.includes('--confirm');

const DEFAULT_POLICIES = {
  constitution: {
    url: '/policies/Constitution.docx',
    title: 'Constitution',
    description:
      'The foundational rules and principles governing DOHaD India, detailing our core mission, membership structure, and operational directives.',
  },
  governance: {
    url: '/policies/Governance.docx',
    title: 'Governance Guidelines',
    description:
      'Detailed structural and operational guidelines ensuring transparency, board accountability, and smooth administration across the society.',
  },
  codeOfConduct: {
    url: '/policies/Code%20of%20Conduct.docx',
    title: 'Code of Conduct',
    description:
      'Expected professional behavior, ethical standards, and scientific integrity requirements for all members, affiliates, and participants.',
  },
  edi: {
    url: '/policies/EDI.docx',
    title: 'EDI Policy',
    description:
      'Our Equity, Diversity, and Inclusion framework guarantees equal opportunities, ensures gender balance, and cultivates a welcoming, collaborative environment for all members.',
  },
  safeguarding: {
    url: '/policies/Safeguarding%20Policy.docx',
    title: 'Safeguarding Policy',
    description:
      'Comprehensive guidelines, procedures, and reporting systems to ensure the safety, protection, and overall well-being of all individuals participating in DOHaD India events and activities.',
  },
};

const PRODUCTION_EVENTS_PAGE = {
  pastEventsGallery: {
    title: 'Past Events Gallery',
    subtitle: 'Photo highlights from our events will be shared here',
  },
  whatWeOffer: {
    title: 'What We Offer',
    subtitle: 'Event types we are building for the DOHaD community',
    items: [
      {
        title: 'Annual Conferences',
        description:
          'Flagship gatherings bringing together DOHaD researchers from across India for knowledge sharing and networking.',
      },
      {
        title: 'Workshops & Training',
        description:
          'Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.',
      },
      {
        title: 'Networking Events',
        description:
          'Opportunities to connect with fellow researchers, build collaborations, and strengthen the DOHaD community.',
      },
    ],
  },
};

function loadMongoUri() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) throw new Error('Missing .env.local');
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

function isDummyPolicy(doc) {
  if (!doc || typeof doc !== 'object') return false;
  const title = String(doc.title || '');
  const url = String(doc.url || '');
  const description = String(doc.description || '');
  return (
    title.includes('[TEST]') ||
    url.includes('dummy.pdf') ||
    /dummy|test only|safe to delete/i.test(description)
  );
}

function isDummySectionText(text) {
  if (!text) return false;
  return text.includes('[TEST]') || /dummy section/i.test(text);
}

async function main() {
  const uri = loadMongoUri();
  await mongoose.connect(uri);
  const db = mongoose.connection.db;

  const summary = [];

  // 1. Delete all events (demo placeholders)
  const events = await db.collection('events').find({}).toArray();
  summary.push(`Events: ${events.length} record(s) to delete`);
  for (const event of events) {
    console.log(`  - event: ${event.title}`);
  }

  // 2. Clean dummy policies in SiteSettings
  const settings = await db.collection('sitesettings').findOne({});
  let policyFixes = 0;
  if (settings?.policies) {
    for (const [key, doc] of Object.entries(settings.policies)) {
      if (isDummyPolicy(doc)) {
        policyFixes += 1;
        console.log(`  - dummy policy: ${key} (${doc.title})`);
      }
    }
  }
  summary.push(`Dummy policies: ${policyFixes} to reset`);

  // 3. Newsletter subscribers (no public signup wired — treat as test data)
  const subscribers = await db.collection('newslettersubscribers').find({}).toArray();
  summary.push(`Newsletter subscribers: ${subscribers.length} to delete`);
  for (const sub of subscribers) {
    console.log(`  - subscriber: ${sub.email}`);
  }

  // 4. Advisory CMS records (public page uses hardcoded data)
  const advisory = await db.collection('advisorymembers').find({}).toArray();
  summary.push(`Advisory CMS records: ${advisory.length} to delete`);
  for (const member of advisory) {
    console.log(`  - advisory: ${member.name || member._id}`);
  }

  console.log('\n--- Summary ---');
  for (const line of summary) console.log(line);

  if (!confirm) {
    console.log('\nDry run only. Re-run with --confirm to apply changes.');
    await mongoose.disconnect();
    return;
  }

  // Apply
  const eventsResult = await db.collection('events').deleteMany({});
  console.log(`\nDeleted ${eventsResult.deletedCount} event(s).`);

  if (settings) {
    const updates = { $set: {} };

    if (settings.policies) {
      const policies = { ...settings.policies };
      for (const key of Object.keys(DEFAULT_POLICIES)) {
        if (isDummyPolicy(policies[key])) {
          policies[key] = DEFAULT_POLICIES[key];
        }
      }
      updates.$set.policies = policies;
    }

    if (isDummySectionText(settings.governancePage?.documentsSectionTitle)) {
      updates.$set['governancePage.documentsSectionTitle'] = 'Official Documents';
    }
    if (isDummySectionText(settings.governancePage?.documentsSectionDescription)) {
      updates.$set['governancePage.documentsSectionDescription'] =
        'Download or view our primary constitutional and guidelines files.';
    }
    if (isDummySectionText(settings.equityDiversityPage?.policiesSectionTitle)) {
      updates.$set['equityDiversityPage.policiesSectionTitle'] = 'Official Policies';
    }
    if (isDummySectionText(settings.equityDiversityPage?.policiesSectionDescription)) {
      updates.$set['equityDiversityPage.policiesSectionDescription'] =
        'Download or view our detailed institutional guidelines on equity and safeguarding.';
    }

    const eventsPage = { ...(settings.eventsPage || {}) };
    eventsPage.pastEventsGallery = {
      ...(eventsPage.pastEventsGallery || {}),
      ...PRODUCTION_EVENTS_PAGE.pastEventsGallery,
    };
    eventsPage.whatWeOffer = {
      ...(eventsPage.whatWeOffer || {}),
      ...PRODUCTION_EVENTS_PAGE.whatWeOffer,
    };
    updates.$set.eventsPage = eventsPage;

    if (Object.keys(updates.$set).length > 0) {
      await db.collection('sitesettings').updateOne({ _id: settings._id }, updates);
      console.log('SiteSettings updated (policies, events page copy).');
    }
  }

  const subResult = await db.collection('newslettersubscribers').deleteMany({});
  console.log(`Deleted ${subResult.deletedCount} newsletter subscriber(s).`);

  const advisoryResult = await db.collection('advisorymembers').deleteMany({});
  console.log(`Deleted ${advisoryResult.deletedCount} advisory CMS record(s).`);

  console.log('\nProduction cleanup complete.');
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
