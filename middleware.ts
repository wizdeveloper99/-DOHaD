import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

const protectedRoutes = [
  '/admin/dashboard',
  '/admin/events',
  '/admin/newsletter',
  '/admin/advisory',
  '/admin/documents',
  '/admin/settings',
];
const publicRoutes = ['/admin/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = req.cookies.get('session')?.value;
  const session = cookie ? await decrypt(cookie).catch(() => null) : null;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl));
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
