import mongoose, { Schema, model, models } from 'mongoose';
import { SECRETARIAT_WHO_WE_ARE_TEXT } from '@/lib/site-contact';

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
    cardImage: { type: String, default: '' },
    cardName: { type: String, default: 'Prof. David Barker' },
    cardRole: { type: String, default: 'Pioneer of the DOHaD paradigm' },
  },
  socialLinks: {
    twitter: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    bluesky: { type: String },
  },
  policies: { type: Schema.Types.Mixed, default: {} },
  governancePage: {
    documentsSectionTitle: { type: String, default: 'Official Documents' },
    documentsSectionDescription: {
      type: String,
      default: 'Download or view our primary constitutional and guidelines files.',
    },
  },
  equityDiversityPage: {
    policiesSectionTitle: { type: String, default: 'Official Policies' },
    policiesSectionDescription: {
      type: String,
      default: 'Download or view our detailed institutional guidelines on equity and safeguarding.',
    },
  },
  whoWeArePage: {
    pageTitle: { type: String, default: 'Who We Are' },
    pageDescription: {
      type: String,
      default:
        'Meet the dedicated team of researchers, clinicians, and advocates leading DOHaD India\'s mission to advance developmental origins of health and disease research across the country.',
    },
    secretariatAddress: {
      type: String,
      default: SECRETARIAT_WHO_WE_ARE_TEXT,
    },
    organizationLinkedin: {
      type: String,
      default:
        'https://www.linkedin.com/in/dohad-india-regional-society-2b784240b/',
    },
    executiveCouncil: {
      title: { type: String, default: 'Executive Council' },
      description: {
        type: String,
        default:
          'Our leadership team guiding DOHaD India\'s strategic initiatives',
      },
    },
    advisoryGroup: {
      title: { type: String, default: 'Advisory Group' },
      description: {
        type: String,
        default:
          'Distinguished advisors providing strategic guidance and expertise',
      },
    },
  },
  eventsPage: {
    pageTitle: { type: String, default: 'Events & Workshops' },
    pageDescription: {
      type: String,
      default:
        'Discover upcoming opportunities and explore highlights from our conferences, workshops, and community gatherings advancing DOHaD research.',
    },
    upcomingEvents: {
      title: { type: String, default: 'Upcoming Events' },
      subtitle: { type: String, default: 'Join us at our next events and workshops' },
    },
    pastEventsGallery: {
      title: { type: String, default: 'Past Events Gallery' },
      subtitle: {
        type: String,
        default: 'Highlights from our conferences, talks, and community gatherings',
      },
      featuredVideo: {
        youtubeVideoId: { type: String, default: '1dHV_CnCDC8' },
        title: {
          type: String,
          default: 'Shaping the Future of DOHaD Research in India',
        },
        description: {
          type: String,
          default:
            'Hear from our President, Prof. Debarati Mukherjee, about our vision and strategies to shape the future of DOHaD research in India.',
        },
      },
    },
    whatWeOffer: {
      title: { type: String, default: 'What We Offer' },
      subtitle: {
        type: String,
        default: 'Event types we are building for the DOHaD community',
      },
      items: {
        type: [
          {
            title: { type: String },
            description: { type: String },
          },
        ],
        default: [
          {
            title: 'Annual Conferences',
            description:
              'Flagship gatherings bringing together DOHaD researchers from across India for knowledge sharing and networking.',
          },
          {
            title: 'Workshops & Training',
            description:
              'Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.',
          },
          {
            title: 'Networking Events',
            description:
              'Opportunities to connect with fellow researchers, build collaborations, and strengthen the DOHaD community.',
          },
        ],
      },
    },
  },
  footerText: { type: String },
}, { timestamps: true });

export default models.SiteSettings || model('SiteSettings', SiteSettingsSchema);
