import cloudinary from '@/lib/cloudinary';
import { unstable_cache } from 'next/cache';

export const MEDIA_FOLDERS = [
  'dohad-india',
  'advisory',
  'events',
  'pioneer',
  'policies',
] as const;

export type MediaAsset = {
  public_id: string;
  secure_url: string;
  resource_type: string;
  format: string;
  width?: number;
  height?: number;
  bytes: number;
  created_at: string;
};

async function listResourceType(
  folder: string,
  resourceType: 'image' | 'raw'
): Promise<MediaAsset[]> {
  const assets: MediaAsset[] = [];
  let nextCursor: string | undefined;

  do {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `${folder}/`,
      resource_type: resourceType,
      max_results: 500,
      ...(nextCursor ? { next_cursor: nextCursor } : {}),
    });

    for (const resource of result.resources) {
      assets.push({
        public_id: resource.public_id,
        secure_url: resource.secure_url,
        resource_type: resource.resource_type,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        bytes: resource.bytes,
        created_at: resource.created_at,
      });
    }

    nextCursor = result.next_cursor;
  } while (nextCursor);

  return assets;
}

async function listFolderAssets(folder: string): Promise<MediaAsset[]> {
  const [images, raw] = await Promise.all([
    listResourceType(folder, 'image'),
    listResourceType(folder, 'raw'),
  ]);
  return [...images, ...raw];
}

async function fetchMediaFromCloudinary(): Promise<MediaAsset[]> {
  const results = await Promise.all(MEDIA_FOLDERS.map(listFolderAssets));

  return results
    .flat()
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
}

export const getMediaAssets = unstable_cache(
  fetchMediaFromCloudinary,
  ['cloudinary-media-assets'],
  { revalidate: 120, tags: ['media'] }
);
