import { cookies } from 'next/headers';
import { jsonOk } from '@/lib/api/route-helpers';

export async function POST() {
  cookies().set('session', '', {
    expires: new Date(0),
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  return jsonOk({ message: 'Logged out' });
}
