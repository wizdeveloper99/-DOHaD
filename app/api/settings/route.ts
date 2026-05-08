import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import SiteSettings from '@/lib/models/SiteSettings';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    let settings = await SiteSettings.findOne();
    
    if (!settings) {
      settings = await SiteSettings.create({});
    }
    
    return NextResponse.json(settings);
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
    
    let settings = await SiteSettings.findOne();
    
    if (settings) {
      settings = await SiteSettings.findByIdAndUpdate(settings._id, data, { new: true });
    } else {
      settings = await SiteSettings.create(data);
    }
    
    return NextResponse.json(settings);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
