import mongoose, { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
  },
  fullDescription: {
    type: String,
  },
  featuredImage: {
    type: String, // Cloudinary URL
  },
  galleryImages: [{
    type: String, // Array of Cloudinary URLs
  }],
  startDate: {
    type: Date,
    required: [true, 'Please provide a start date'],
  },
  endDate: {
    type: Date,
  },
  location: {
    type: String,
  },
  speakerNames: [{
    type: String,
  }],
  category: {
    type: String,
  },
  registrationLink: {
    type: String,
  },
  eventType: {
    type: String,
    enum: ['webinar', 'workshop', 'conference', 'seminar'],
    default: 'conference',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Index for better search
EventSchema.index({ title: 'text', shortDescription: 'text' });

export default models.Event || model('Event', EventSchema);
