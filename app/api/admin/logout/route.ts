import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  cookies().set('session', '', { 
    expires: new Date(0), 
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  return NextResponse.json({ message: 'Logged out' });
}
