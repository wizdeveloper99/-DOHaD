import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import cloudinary from '@/lib/cloudinary';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
];

export async function POST(request: NextRequest) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = (formData.get('folder') as string) || 'dohad-india';

    if (!file) {
      return jsonError('No file uploaded', 400);
    }

    if (file.size > MAX_FILE_SIZE) {
      return jsonError('File size exceeds 5MB limit', 400);
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return jsonError(
        'Invalid file type. Only JPG, PNG, WEBP, GIF, PDF, and Word docs are allowed.',
        400
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await new Promise<Record<string, unknown>>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder, resource_type: 'auto' }, (error, uploadResult) => {
          if (error) reject(error);
          else resolve(uploadResult as Record<string, unknown>);
        })
        .end(buffer);
    });

    revalidateTag('media');
    return jsonOk(result);
  } catch (error: any) {
    console.error('Upload error:', error);
    return jsonError(error.message);
  }
}
