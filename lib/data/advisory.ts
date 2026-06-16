import { unstable_cache, revalidateTag } from 'next/cache';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';

export const ADVISORY_TAG = 'advisory';

async function fetchAdvisoryMembers() {
  await dbConnect();
  return AdvisoryMember.find().sort({ displayOrder: 1 }).lean();
}

export const getAdvisoryMembers = unstable_cache(
  fetchAdvisoryMembers,
  ['advisory-members'],
  { revalidate: 60, tags: [ADVISORY_TAG] }
);

export function invalidateAdvisoryCache() {
  revalidateTag(ADVISORY_TAG);
}
