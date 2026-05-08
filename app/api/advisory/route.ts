import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    const members = await AdvisoryMember.find().sort({ displayOrder: 1 });
    return NextResponse.json(members);
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
    const member = await AdvisoryMember.create(data);
    return NextResponse.json(member, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
