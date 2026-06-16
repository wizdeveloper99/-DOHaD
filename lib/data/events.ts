import { revalidateTag } from 'next/cache';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';

export const EVENTS_TAG = 'events';

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export async function resolveUniqueEventSlug(
  baseSlug: string,
  excludeId?: string
): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const filter: Record<string, unknown> = { slug };
    if (excludeId) {
      filter._id = { $ne: excludeId };
    }
    const exists = await Event.exists(filter);
    if (!exists) return slug;
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

const ADMIN_LIST_FIELDS =
  '_id title slug startDate location featuredImage galleryImages published eventType category';

async function fetchAdminEvents() {
  await dbConnect();
  return Event.find({})
    .select(ADMIN_LIST_FIELDS)
    .sort({ startDate: -1 })
    .limit(100)
    .lean();
}

/** Admin lists must always be fresh — do not cache (dev skips cache; prod would serve stale data). */
export async function getAdminEvents() {
  const events = await fetchAdminEvents();
  return JSON.parse(JSON.stringify(events));
}

export async function queryEvents(options: {
  category?: string;
  published?: boolean;
  featured?: boolean;
  limit?: number;
}) {
  await dbConnect();

  const filter: Record<string, unknown> = {};
  if (options.category) filter.category = options.category;
  if (options.published === true) filter.published = true;
  if (options.featured === true) filter.featured = true;

  return Event.find(filter)
    .sort({ startDate: -1 })
    .limit(options.limit ?? 50)
    .lean();
}

export function invalidateEventsCache() {
  revalidateTag(EVENTS_TAG);
}
