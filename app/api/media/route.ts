import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { getSession } from '@/lib/auth';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Use Cloudinary Admin API to fetch resources
    // We can fetch resources from both folders: dohad-india and advisory
    const result = await cloudinary.search
      .expression('resource_type:image OR resource_type:raw')
      .sort_by('created_at', 'desc')
      .max_results(500)
      .execute();

    return NextResponse.json(result.resources);
  } catch (error: any) {
    console.error('Cloudinary fetch error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('public_id');

    if (!publicId) {
      return NextResponse.json({ error: 'public_id is required' }, { status: 400 });
    }

    const result = await cloudinary.uploader.destroy(publicId);
    
    if (result.result !== 'ok' && result.result !== 'not found') {
      throw new Error(`Failed to delete: ${result.result}`);
    }

    return NextResponse.json({ success: true, message: 'Media deleted successfully' });
  } catch (error: any) {
    console.error('Cloudinary delete error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
