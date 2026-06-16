import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';
import { invalidateEventsCache } from '@/lib/data/events';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';
import { parseEventDateInput } from '@/lib/event-dates';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const event = await Event.findById(params.id).lean();

    if (!event) {
      return jsonError('Event not found', 404);
    }

    return jsonOk(event);
  } catch (error: any) {
    return jsonError(error.message);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const data = await request.json();
    if (data.startDate) {
      data.startDate = parseEventDateInput(data.startDate);
    }
    if (data.endDate) {
      data.endDate = parseEventDateInput(data.endDate);
    }
    const event = await Event.findByIdAndUpdate(params.id, data, {
      new: true,
      lean: true,
    });

    if (!event) {
      return jsonError('Event not found', 404);
    }

    invalidateEventsCache();
    return jsonOk(event);
  } catch (error: any) {
    return jsonError(error.message);
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const event = await Event.findByIdAndDelete(params.id);

    if (!event) {
      return jsonError('Event not found', 404);
    }

    invalidateEventsCache();
    return jsonOk({ message: 'Event deleted successfully' });
  } catch (error: any) {
    return jsonError(error.message);
  }
}
