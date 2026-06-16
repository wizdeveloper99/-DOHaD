import dbConnect from '@/lib/mongodb';
import AdminUser from '@/lib/models/AdminUser';
import bcrypt from 'bcryptjs';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import { jsonOk, jsonError } from '@/lib/api/route-helpers';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { username, password } = await request.json();

    if (typeof username !== 'string' || typeof password !== 'string') {
      return jsonError('Invalid input format', 400);
    }

    const admin = await AdminUser.findOne({ username }).lean();

    if (!admin) {
      return jsonError('Invalid credentials', 401);
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return jsonError('Invalid credentials', 401);
    }

    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({
      user: {
        id: admin._id,
        username: admin.username,
        name: admin.name,
        role: admin.role,
      },
      expires,
    });

    cookies().set('session', session, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return jsonOk({ message: 'Login successful' });
  } catch (error: any) {
    return jsonError(error.message);
  }
}
