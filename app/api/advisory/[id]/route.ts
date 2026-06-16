import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import { invalidateAdvisoryCache } from '@/lib/data/advisory';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const member = await AdvisoryMember.findByIdAndDelete(params.id);

    if (!member) {
      return jsonError('Member not found', 404);
    }

    invalidateAdvisoryCache();
    return jsonOk({ message: 'Member deleted successfully' });
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
    const member = await AdvisoryMember.findByIdAndUpdate(params.id, data, {
      new: true,
      lean: true,
    });

    if (!member) {
      return jsonError('Member not found', 404);
    }

    invalidateAdvisoryCache();
    return jsonOk(member);
  } catch (error: any) {
    return jsonError(error.message);
  }
}
