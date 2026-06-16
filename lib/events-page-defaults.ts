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
    subtitle: 'Highlights and memories from our previous events',
  },
  whatWeOffer: {
    title: 'What We Offer',
    subtitle: 'Comprehensive event experiences for our community',
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
      {
        title: 'Event Registration',
        description:
          'Easy online registration system for workshops and conferences with member discounts and early bird pricing.',
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
