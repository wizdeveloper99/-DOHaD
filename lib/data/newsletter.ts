import { unstable_cache, revalidateTag } from 'next/cache';
import dbConnect from '@/lib/mongodb';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';

export const NEWSLETTER_TAG = 'newsletter';

async function fetchNewsletterSubscribers() {
  await dbConnect();
  return NewsletterSubscriber.find()
    .select('_id email name createdAt')
    .sort({ createdAt: -1 })
    .lean();
}

export const getNewsletterSubscribers = unstable_cache(
  fetchNewsletterSubscribers,
  ['newsletter-subscribers'],
  { revalidate: 60, tags: [NEWSLETTER_TAG] }
);

export function invalidateNewsletterCache() {
  revalidateTag(NEWSLETTER_TAG);
}
