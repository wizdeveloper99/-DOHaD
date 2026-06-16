export const ADMIN_SITE = {
  name: 'DOHaD India Regional Society',
  shortName: 'DOHaD India',
  tagline: 'Website Manager',
  homeHeading: 'What would you like to update?',
  homeSubtext: 'Choose a section below to manage content on your website.',
} as const;

export const ADMIN_SECTIONS = [
  {
    label: 'Events',
    description: 'Add or edit conferences, meetings, and workshops',
    href: '/admin/events',
  },
  {
    label: 'Email Subscribers',
    description: 'View people who signed up for your newsletter',
    href: '/admin/newsletter',
  },
  {
    label: 'Photos & Files',
    description: 'Upload and manage images for your website',
    href: '/admin/media',
  },
  {
    label: 'Advisory Board',
    description: 'Update profiles of advisory committee members',
    href: '/admin/advisory',
  },
  {
    label: 'Policies & Documents',
    description: 'Edit governance and equity page content',
    href: '/admin/documents',
  },
  {
    label: 'Website Settings',
    description: 'Contact details, social links, and site information',
    href: '/admin/settings',
  },
] as const;
