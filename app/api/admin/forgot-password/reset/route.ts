import dbConnect from '@/lib/mongodb';
import AdminUser from '@/lib/models/AdminUser';
import bcrypt from 'bcryptjs';
import { jsonOk, jsonError } from '@/lib/api/route-helpers';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, otp, password } = await request.json();

    if (!email || typeof email !== 'string') {
      return jsonError('Email is required', 400);
    }
    if (!otp || typeof otp !== 'string') {
      return jsonError('OTP is required', 400);
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
      return jsonError('Password must be at least 6 characters long', 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const admin = await AdminUser.findOne({ email: normalizedEmail });

    if (!admin) {
      return jsonError('No administrator found with this email address', 404);
    }

    // Verify OTP exists and matches
    if (!admin.resetOtp || admin.resetOtp !== otp.trim()) {
      return jsonError('Invalid verification code. Please check and try again.', 400);
    }

    // Verify OTP expiry
    if (!admin.resetOtpExpires || new Date() > admin.resetOtpExpires) {
      return jsonError('The verification code has expired. Please request a new one.', 400);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save and clear OTP
    admin.password = hashedPassword;
    admin.resetOtp = undefined;
    admin.resetOtpExpires = undefined;
    await admin.save();

    return jsonOk({ message: 'Password has been reset successfully' });
  } catch (error: any) {
    console.error('Error resetting password:', error);
    return jsonError(error.message || 'Failed to reset password');
  }
}
