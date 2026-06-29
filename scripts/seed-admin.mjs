import bcrypt from 'bcryptjs';
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadMongoUri() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) throw new Error('Missing .env.local');
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

async function seed() {
  await mongoose.connect(loadMongoUri());

  const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' },
    resetOtp: String,
    resetOtpExpires: Date,
  }, { timestamps: true });

  const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', adminSchema);

  const username = process.env.ADMIN_USERNAME || 'admin';
  const email = process.env.ADMIN_EMAIL || 'dohadindiaorg@gmail.com';
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    throw new Error('Set ADMIN_PASSWORD in the environment before running seed-admin.');
  }

  await AdminUser.deleteOne({ username });
  await AdminUser.deleteOne({ email });

  const hashedPassword = await bcrypt.hash(password, 12);

  await AdminUser.create({
    username,
    email,
    password: hashedPassword,
    name: 'Super Admin',
    role: 'superadmin',
  });

  console.log(`Admin user created: ${username}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
