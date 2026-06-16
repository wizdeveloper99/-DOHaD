import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';
import { invalidateNewsletterCache } from '@/lib/data/newsletter';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const subscriber = await NewsletterSubscriber.findByIdAndDelete(params.id);

    if (!subscriber) {
      return jsonError('Subscriber not found', 404);
    }

    invalidateNewsletterCache();
    return jsonOk({ message: 'Subscriber deleted successfully' });
  } catch (error: any) {
    return jsonError(error.message);
  }
}
