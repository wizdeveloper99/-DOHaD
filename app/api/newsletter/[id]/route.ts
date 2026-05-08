import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';
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
    const subscriber = await NewsletterSubscriber.findByIdAndDelete(params.id);
    
    if (!subscriber) {
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Subscriber deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
