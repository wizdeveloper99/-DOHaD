import mongoose, { Schema, model, models } from 'mongoose';

const AdminUserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin',
  },
  resetOtp: {
    type: String,
  },
  resetOtpExpires: {
    type: Date,
  },
}, { timestamps: true });

export default models.AdminUser || model('AdminUser', AdminUserSchema);
