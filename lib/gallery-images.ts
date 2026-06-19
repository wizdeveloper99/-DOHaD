export type GalleryImage = {
  url: string;
  caption?: string;
};

export function normalizeGalleryImage(
  item: string | GalleryImage | null | undefined
): GalleryImage | null {
  if (!item) return null;
  if (typeof item === 'string') return { url: item };
  if (typeof item.url === 'string' && item.url.length > 0) return item;
  return null;
}

export function normalizeGalleryImages(
  items: Array<string | GalleryImage> | null | undefined
): GalleryImage[] {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => normalizeGalleryImage(item))
    .filter((item): item is GalleryImage => item !== null);
}
