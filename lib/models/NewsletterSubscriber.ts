import mongoose, { Schema, model, models } from 'mongoose';

const NewsletterSubscriberSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  affiliation: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

export default models.NewsletterSubscriber || model('NewsletterSubscriber', NewsletterSubscriberSchema);
