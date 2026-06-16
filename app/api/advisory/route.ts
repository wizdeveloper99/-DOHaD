import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import {
  getAdvisoryMembers,
  invalidateAdvisoryCache,
} from '@/lib/data/advisory';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';

export async function GET() {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    const members = await getAdvisoryMembers();
    return jsonOk(members);
  } catch (error: any) {
    return jsonError(error.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { unauthorized } = await requireAdmin();
    if (unauthorized) return unauthorized;

    await dbConnect();
    const data = await request.json();
    const member = await AdvisoryMember.create(data);
    invalidateAdvisoryCache();

    return jsonOk(member, 201);
  } catch (error: any) {
    return jsonError(error.message);
  }
}
