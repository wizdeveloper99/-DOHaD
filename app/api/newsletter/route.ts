import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';
import {
  getNewsletterSubscribers,
  invalidateNewsletterCache,
} from '@/lib/data/newsletter';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export async function GET() {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    const subscribers = await getNewsletterSubscribers();
    return jsonOk(subscribers);
  } catch (error: any) {
    return jsonError(error.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();

    if (!data.email) {
      return jsonError('Email is required', 400);
    }

    const existing = await NewsletterSubscriber.findOne({ email: data.email }).lean();
    if (existing) {
      return jsonOk({ message: 'Already subscribed' });
    }

    const subscriber = await NewsletterSubscriber.create(data);
    invalidateNewsletterCache();

    return jsonOk(subscriber, 201);
  } catch (error: any) {
    return jsonError(error.message);
  }
}
