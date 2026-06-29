import dbConnect from '@/lib/mongodb';
import AdminUser from '@/lib/models/AdminUser';
import { jsonOk, jsonError } from '@/lib/api/route-helpers';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return jsonError('Please provide a valid email address', 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const admin = await AdminUser.findOne({ email: normalizedEmail });

    if (!admin) {
      return jsonError('No administrator found with this email address', 404);
    }

    // Generate a 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    admin.resetOtp = otp;
    admin.resetOtpExpires = expiry;
    await admin.save();

    // Send email using Resend
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #0ea5e9; text-align: center; font-family: Outfit, sans-serif;">DOHaD India CMS</h2>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p>Hello,</p>
        <p>We received a request to reset your administrator password. Use the following One-Time Password (OTP) to complete the verification process. This OTP is valid for 10 minutes:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; background-color: #f3f4f6; padding: 12px 24px; border-radius: 8px; border: 1px solid #e5e7eb; display: inline-block;">${otp}</span>
        </div>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p style="margin-top: 40px; font-size: 12px; color: #6b7280; text-align: center;">This is an automated message from DOHaD India.</p>
      </div>
    `;

    await sendEmail({
      to: admin.email,
      subject: `${otp} is your DOHaD India CMS reset code`,
      html: htmlContent,
    });

    return jsonOk({ message: 'OTP sent successfully' });
  } catch (error: any) {
    console.error('Error sending OTP:', error);
    return jsonError(error.message || 'Failed to send OTP email');
  }
}
