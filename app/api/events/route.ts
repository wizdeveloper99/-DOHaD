import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');

    let query: any = {};
    if (category) query.category = category;
    if (published === 'true') query.published = true;
    if (featured === 'true') query.featured = true;

    const events = await Event.find(query)
      .sort({ startDate: -1 })
      .limit(limit);

    return NextResponse.json(events);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const data = await request.json();
    
    // Generate slug if not provided
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const event = await Event.create(data);
    return NextResponse.json(event, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
