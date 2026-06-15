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
  learnDohad: {
    title: { type: String, default: 'What is DOHaD?' },
    badge: { type: String, default: 'Learn About DOHaD' },
    contentParagraph1: { type: String, default: 'The Developmental Origins of Health and Disease (DOHaD) is a multidisciplinary field that examines how the environment during early development (conception, fetal life, infancy, and early childhood) interacts with genetic and other factors to shape lifelong health and the risk of non-communicable diseases (NCDs) like diabetes, heart disease, and obesity.' },
    contentParagraph2: { type: String, default: 'This paradigm shift moves health focus from adult lifestyle choices alone to the critical importance of early-life environments, providing a powerful framework for preventing chronic diseases across generations.' },
    ctaText: { type: String, default: 'Learn more about the International Society.' },
    ctaLink: { type: String, default: 'https://dohadsoc.org/' },
    showCard: { type: Boolean, default: true },
    cardImage: { type: String, default: '/placeholder-user.jpg' },
    cardName: { type: String, default: 'Prof. David Barker' },
    cardRole: { type: String, default: 'Pioneer of the DOHaD paradigm' },
  },
  socialLinks: {
    twitter: { type: String },
    linkedin: { type: String },
    facebook: { type: String },
    instagram: { type: String },
  },
  policies: {
    constitution: { type: String },
    governance: { type: String },
    codeOfConduct: { type: String },
    edi: { type: String },
    safeguarding: { type: String },
  },
  footerText: { type: String },
}, { timestamps: true });

export default models.SiteSettings || model('SiteSettings', SiteSettingsSchema);
