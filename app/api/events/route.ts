import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';
import {
  getAdminEvents,
  invalidateEventsCache,
  queryEvents,
} from '@/lib/data/events';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminList = searchParams.get('admin') === 'true';

    if (adminList) {
      const { unauthorized } = await requireAdmin();
      if (unauthorized) return unauthorized;
      return jsonOk(await getAdminEvents());
    }

    const category = searchParams.get('category') ?? undefined;
    const published = searchParams.get('published') === 'true' ? true : undefined;
    const featured = searchParams.get('featured') === 'true' ? true : undefined;
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    const events = await queryEvents({ category, published, featured, limit });
    return jsonOk(events);
  } catch (error: any) {
    return jsonError(error.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const data = await request.json();

    if (!data.slug && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
    }

    const event = await Event.create(data);
    invalidateEventsCache();

    return jsonOk(event, 201);
  } catch (error: any) {
    return jsonError(error.message);
  }
}
