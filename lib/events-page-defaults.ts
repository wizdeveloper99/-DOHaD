export type EventsPageOfferItem = {
  title: string;
  description: string;
};

export type EventsPageSettings = {
  pageTitle: string;
  pageDescription: string;
  upcomingEvents: {
    title: string;
    subtitle: string;
  };
  pastEventsGallery: {
    title: string;
    subtitle: string;
    featuredVideo?: {
      youtubeVideoId: string;
      title: string;
      description: string;
    } | null;
  };
  whatWeOffer: {
    title: string;
    subtitle: string;
    items: EventsPageOfferItem[];
  };
};

export const DEFAULT_EVENTS_PAGE: EventsPageSettings = {
  pageTitle: 'Events & Workshops',
  pageDescription:
    'Discover upcoming opportunities and explore highlights from our conferences, workshops, and community gatherings advancing DOHaD research.',
  upcomingEvents: {
    title: 'Upcoming Events',
    subtitle: 'Join us at our next events and workshops',
  },
  pastEventsGallery: {
    title: 'Past Events Gallery',
    subtitle: 'Highlights from our conferences, talks, and community gatherings',
    featuredVideo: {
      youtubeVideoId: '1dHV_CnCDC8',
      title: 'Shaping the Future of DOHaD Research in India',
      description:
        'Hear from our President, Prof. Debarati Mukherjee, about our vision and strategies to shape the future of DOHaD research in India.',
    },
  },
  whatWeOffer: {
    title: 'What We Offer',
    subtitle: 'Event types we are building for the DOHaD community',
    items: [
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
};

export function normalizeEventsPageSettings(
  raw?: Partial<EventsPageSettings> | null
): EventsPageSettings {
  if (!raw) return DEFAULT_EVENTS_PAGE;

  return {
    pageTitle: raw.pageTitle ?? DEFAULT_EVENTS_PAGE.pageTitle,
    pageDescription: raw.pageDescription ?? DEFAULT_EVENTS_PAGE.pageDescription,
    upcomingEvents: {
      ...DEFAULT_EVENTS_PAGE.upcomingEvents,
      ...raw.upcomingEvents,
    },
    pastEventsGallery: {
      ...DEFAULT_EVENTS_PAGE.pastEventsGallery,
      ...raw.pastEventsGallery,
      featuredVideo: raw.pastEventsGallery?.featuredVideo
        ? {
            ...DEFAULT_EVENTS_PAGE.pastEventsGallery.featuredVideo,
            ...raw.pastEventsGallery.featuredVideo,
          }
        : DEFAULT_EVENTS_PAGE.pastEventsGallery.featuredVideo,
    },
    whatWeOffer: {
      ...DEFAULT_EVENTS_PAGE.whatWeOffer,
      ...raw.whatWeOffer,
      items: DEFAULT_EVENTS_PAGE.whatWeOffer.items.map((item, index) => ({
        ...item,
        ...raw.whatWeOffer?.items?.[index],
      })),
    },
  };
}
