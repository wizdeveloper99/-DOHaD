import { SECRETARIAT_WHO_WE_ARE_TEXT } from "@/lib/site-contact";

export type WhoWeAreSectionSettings = {
  title: string;
  description: string;
};

export type WhoWeArePageSettings = {
  pageTitle: string;
  pageDescription: string;
  secretariatAddress: string;
  organizationLinkedin: string;
  executiveCouncil: WhoWeAreSectionSettings;
  advisoryGroup: WhoWeAreSectionSettings;
};

export const WHO_WE_ARE_SECTIONS = {
  EXECUTIVE_COUNCIL: 'executive-council',
  ADVISORY_GROUP: 'advisory-group',
} as const;

export type WhoWeAreSection =
  (typeof WHO_WE_ARE_SECTIONS)[keyof typeof WHO_WE_ARE_SECTIONS];

export const WHO_WE_ARE_SECTION_LABELS: Record<WhoWeAreSection, string> = {
  'executive-council': 'Executive Council',
  'advisory-group': 'Advisory Group',
};

export const DEFAULT_WHO_WE_ARE_PAGE: WhoWeArePageSettings = {
  pageTitle: 'Who We Are',
  pageDescription:
    'Meet the dedicated team of researchers, clinicians, and advocates leading DOHaD India\'s mission to advance developmental origins of health and disease research across the country.',
  secretariatAddress: SECRETARIAT_WHO_WE_ARE_TEXT,
  organizationLinkedin:
    'https://www.linkedin.com/in/dohad-india-regional-society-2b784240b/',
  executiveCouncil: {
    title: 'Executive Council',
    description:
      'Our leadership team guiding DOHaD India\'s strategic initiatives',
  },
  advisoryGroup: {
    title: 'Advisory Group',
    description:
      'Distinguished advisors providing strategic guidance and expertise',
  },
};

export function normalizeWhoWeArePageSettings(
  raw?: Partial<WhoWeArePageSettings> | null
): WhoWeArePageSettings {
  if (!raw) return DEFAULT_WHO_WE_ARE_PAGE;

  return {
    pageTitle: raw.pageTitle ?? DEFAULT_WHO_WE_ARE_PAGE.pageTitle,
    pageDescription:
      raw.pageDescription ?? DEFAULT_WHO_WE_ARE_PAGE.pageDescription,
    secretariatAddress:
      raw.secretariatAddress ?? DEFAULT_WHO_WE_ARE_PAGE.secretariatAddress,
    organizationLinkedin:
      raw.organizationLinkedin ?? DEFAULT_WHO_WE_ARE_PAGE.organizationLinkedin,
    executiveCouncil: {
      ...DEFAULT_WHO_WE_ARE_PAGE.executiveCouncil,
      ...raw.executiveCouncil,
    },
    advisoryGroup: {
      ...DEFAULT_WHO_WE_ARE_PAGE.advisoryGroup,
      ...raw.advisoryGroup,
    },
  };
}

export type WhoWeAreMember = {
  _id: string;
  name: string;
  designation: string;
  organization?: string;
  additionalRole?: string;
  shortBio?: string;
  fullBio?: string;
  profileImage?: string;
  linkedinUrl?: string;
  displayOrder: number;
  featured?: boolean;
  section: WhoWeAreSection;
};
