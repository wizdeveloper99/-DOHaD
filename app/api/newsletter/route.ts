import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const subscribers = await NewsletterSubscriber.find().sort({ createdAt: -1 });
    return NextResponse.json(subscribers);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();

    if (!data.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const existing = await NewsletterSubscriber.findOne({ email: data.email });
    if (existing) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    const subscriber = await NewsletterSubscriber.create(data);
    return NextResponse.json(subscriber, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
