import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import { getSession } from '@/lib/auth';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const member = await AdvisoryMember.findByIdAndDelete(params.id);
    
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Member deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const data = await request.json();
    const member = await AdvisoryMember.findByIdAndUpdate(params.id, data, { new: true });
    
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
    
    return NextResponse.json(member);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
