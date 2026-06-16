import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export function jsonOk<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function jsonError(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

type AdminCheck =
  | { session: NonNullable<Awaited<ReturnType<typeof getSession>>>; unauthorized: null }
  | { session: null; unauthorized: NextResponse };

export async function requireAdmin(): Promise<AdminCheck> {
  const session = await getSession();
  if (!session) {
    return { session: null, unauthorized: jsonError('Unauthorized', 401) };
  }
  return { session, unauthorized: null };
}
