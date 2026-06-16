import { unstable_cache, revalidateTag } from 'next/cache';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import type { WhoWeAreSection } from '@/lib/who-we-are-defaults';

export const ADVISORY_TAG = 'advisory';

async function fetchAdvisoryMembers(section?: WhoWeAreSection) {
  await dbConnect();
  const filter = section ? { section } : {};
  return AdvisoryMember.find(filter).sort({ displayOrder: 1 }).lean();
}

export const getAdvisoryMembers = unstable_cache(
  async () => fetchAdvisoryMembers(),
  ['advisory-members'],
  { revalidate: 60, tags: [ADVISORY_TAG] }
);

export async function queryAdvisoryMembers(section?: WhoWeAreSection) {
  return fetchAdvisoryMembers(section);
}

export function invalidateAdvisoryCache() {
  revalidateTag(ADVISORY_TAG);
}
