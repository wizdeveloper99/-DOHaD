import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadMongoUri() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) throw new Error('Missing .env.local');
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

const EventSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    shortDescription: String,
    galleryImages: [mongoose.Schema.Types.Mixed],
    startDate: Date,
    location: String,
    eventType: String,
    published: Boolean,
  },
  { timestamps: true }
);

const SiteSettingsSchema = new mongoose.Schema(
  {
    eventsPage: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

const galleryEntry = {
  title: '13th World Congress on DOHaD',
  slug: '13th-world-congress-dohad-2025',
  shortDescription:
    'Highlights from DOHaD India at the 13th World Congress in Buenos Aires, including joint lectures on the evolution and future of DOHaD research in India.',
  startDate: new Date('2025-09-08'),
  location: 'Buenos Aires, Argentina',
  eventType: 'conference',
  published: true,
  galleryImages: [
  {
    url: '/events/gallery/dohad-2025-debarati-mukherjee.png',
    caption:
      'Prof. Debarati Mukherjee presenting “Shaping the Next Decade of DOHaD Research in India: The Vision and Initiatives of the DOHaD India Regional Society”.',
  },
  {
    url: '/events/gallery/dohad-2025-k-kumaran.png',
    caption:
      'Prof. K Kumaran presenting “Tracing the roots – the evolution of DOHaD research in India”.',
  },
  {
    url: '/events/gallery/dohad-2025-researchers-group.png',
  },
  ],
};

const featuredVideo = {
  youtubeVideoId: '1dHV_CnCDC8',
  title: 'Shaping the Future of DOHaD Research in India',
  description:
    'Hear from our President, Prof. Debarati Mukherjee, about our vision and strategies to shape the future of DOHaD research in India.',
};

async function seed() {
  const uri = loadMongoUri();
  await mongoose.connect(uri);

  const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
  const SiteSettings =
    mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);

  const existing = await Event.findOne({ slug: galleryEntry.slug });
  if (existing) {
    await Event.updateOne({ slug: galleryEntry.slug }, { $set: galleryEntry });
    console.log('Updated past events gallery entry:', galleryEntry.title);
  } else {
    await Event.create(galleryEntry);
    console.log('Created past events gallery entry:', galleryEntry.title);
  }

  const settings = await SiteSettings.findOne({});
  if (settings) {
    const eventsPage = settings.eventsPage || {};
    const pastEventsGallery = eventsPage.pastEventsGallery || {};
    await SiteSettings.updateOne(
      { _id: settings._id },
      {
        $set: {
          'eventsPage.pastEventsGallery.featuredVideo': featuredVideo,
          'eventsPage.pastEventsGallery.subtitle':
            pastEventsGallery.subtitle ||
            'Highlights from our conferences, talks, and community gatherings',
        },
      }
    );
    console.log('Updated featured video in site settings');
  } else {
    console.log('No site settings document found; video defaults will be used from code');
  }

  await mongoose.disconnect();
  console.log('Past events gallery seed complete.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
