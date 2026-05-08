import mongoose, { Schema, model, models } from 'mongoose';

const AdvisoryMemberSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  designation: {
    type: String,
    required: [true, 'Please provide a title/designation'],
  },
  organization: {
    type: String,
  },
  fullBio: {
    type: String,
  },
  shortBio: {
    type: String,
  },
  profileImage: {
    type: String, // Cloudinary URL
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

export default models.AdvisoryMember || model('AdvisoryMember', AdvisoryMemberSchema);
