import mongoose, { Schema, model, models } from 'mongoose';

const SiteSettingsSchema = new Schema({
  hero: {
    headline: { type: String, default: 'Advancing DOHaD Research in India' },
    subheadline: { type: String, default: 'Promoting awareness and research on Developmental Origins of Health and Disease.' },
    ctaText: { type: String, default: 'Join Our Community' },
    ctaLink: { type: String, default: '/join-us' },
  },
  about: {
    title: { type: String, default: 'About DOHaD India' },
    content: { type: String },
  },
  socialLinks: {
    twitter: { type: String },
    linkedin: { type: String },
    facebook: { type: String },
    instagram: { type: String },
  },
  footerText: { type: String },
}, { timestamps: true });

export default models.SiteSettings || model('SiteSettings', SiteSettingsSchema);
