import { NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvisoryMember from '@/lib/models/AdvisoryMember';
import {
  getAdvisoryMembers,
  invalidateAdvisoryCache,
  queryAdvisoryMembers,
} from '@/lib/data/advisory';
import { jsonOk, jsonError, requireAdmin } from '@/lib/api/route-helpers';
import {
  WHO_WE_ARE_SECTIONS,
  type WhoWeAreSection,
} from '@/lib/who-we-are-defaults';

function parseSection(value: string | null): WhoWeAreSection | undefined {
  if (
    value === WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL ||
    value === WHO_WE_ARE_SECTIONS.ADVISORY_GROUP
  ) {
    return value;
  }
  return undefined;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminList = searchParams.get('admin') === 'true';
    const section = parseSection(searchParams.get('section'));

    if (adminList) {
      const { unauthorized } = await requireAdmin();
      if (unauthorized) return unauthorized;
      const members = await queryAdvisoryMembers(section);
      return jsonOk(members);
    }

    const members = section
      ? await queryAdvisoryMembers(section)
      : await getAdvisoryMembers();
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
