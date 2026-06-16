import { unstable_cache, revalidateTag } from 'next/cache';
import dbConnect from '@/lib/mongodb';
import SiteSettings from '@/lib/models/SiteSettings';

export const SETTINGS_TAG = 'settings';

async function fetchSiteSettings() {
  await dbConnect();
  const settings = await SiteSettings.findOne().lean();

  if (settings) {
    return settings;
  }

  const created = await SiteSettings.create({});
  return created.toObject();
}

export const getSiteSettings = unstable_cache(
  fetchSiteSettings,
  ['site-settings'],
  { revalidate: 60, tags: [SETTINGS_TAG] }
);

export async function patchSiteSettings(updates: Record<string, unknown>) {
  await dbConnect();

  const existing = await SiteSettings.findOne();
  if (!existing) {
    const created = await SiteSettings.create(updates);
    revalidateTag(SETTINGS_TAG);
    return created.toObject();
  }

  const updated = await SiteSettings.findByIdAndUpdate(
    existing._id,
    { $set: updates },
    { new: true, lean: true }
  );

  if (!updated) {
    const created = await SiteSettings.create(updates);
    revalidateTag(SETTINGS_TAG);
    return created.toObject();
  }

  revalidateTag(SETTINGS_TAG);
  return updated;
}
