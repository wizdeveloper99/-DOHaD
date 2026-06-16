import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getMediaAssets } from '@/lib/media';
import cloudinary from '@/lib/cloudinary';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export const maxDuration = 30;

export async function GET() {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    const resources = await getMediaAssets();
    return jsonOk(resources);
  } catch (error: any) {
    console.error('Cloudinary fetch error:', error);
    return jsonError(error.message);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('public_id');

    if (!publicId) {
      return jsonError('public_id is required', 400);
    }

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== 'ok' && result.result !== 'not found') {
      throw new Error(`Failed to delete: ${result.result}`);
    }

    revalidateTag('media');
    return jsonOk({ success: true, message: 'Media deleted successfully' });
  } catch (error: any) {
    console.error('Cloudinary delete error:', error);
    return jsonError(error.message);
  }
}
