export type PolicyKey =
  | 'constitution'
  | 'governance'
  | 'codeOfConduct'
  | 'edi'
  | 'safeguarding';

export type PolicyDocument = {
  url: string;
  title: string;
  description: string;
};

export type PolicyDocuments = Record<PolicyKey, PolicyDocument>;

export const DEFAULT_POLICIES: PolicyDocuments = {
  constitution: {
    url: '/policies/Constitution.docx',
    title: 'Constitution',
    description:
      'The foundational rules and principles governing DOHaD India, detailing our core mission, membership structure, and operational directives.',
  },
  governance: {
    url: '/policies/Governance.docx',
    title: 'Governance Guidelines',
    description:
      'Detailed structural and operational guidelines ensuring transparency, board accountability, and smooth administration across the society.',
  },
  codeOfConduct: {
    url: '/policies/Code%20of%20Conduct.docx',
    title: 'Code of Conduct',
    description:
      'Expected professional behavior, ethical standards, and scientific integrity requirements for all members, affiliates, and participants.',
  },
  edi: {
    url: '/policies/EDI.docx',
    title: 'EDI Policy',
    description:
      'Our Equity, Diversity, and Inclusion framework guarantees equal opportunities, ensures gender balance, and cultivates a welcoming, collaborative environment for all members.',
  },
  safeguarding: {
    url: '/policies/Safeguarding%20Policy.docx',
    title: 'Safeguarding Policy',
    description:
      'Comprehensive guidelines, procedures, and reporting systems to ensure the safety, protection, and overall well-being of all individuals participating in DOHaD India events and activities.',
  },
};

export const GOVERNANCE_POLICY_KEYS: PolicyKey[] = [
  'constitution',
  'governance',
  'codeOfConduct',
  'edi',
];

export const EQUITY_POLICY_KEYS: PolicyKey[] = ['edi', 'safeguarding'];

/** Governance page shows EDI as "Inclusivity" */
export const GOVERNANCE_POLICY_DISPLAY: Partial<Record<PolicyKey, { title: string }>> = {
  edi: { title: 'Inclusivity' },
};

export function normalizePolicies(raw?: Record<string, unknown>): PolicyDocuments {
  const result = { ...DEFAULT_POLICIES };

  if (!raw) return result;

  for (const key of Object.keys(DEFAULT_POLICIES) as PolicyKey[]) {
    const value = raw[key];
    if (typeof value === 'string') {
      result[key] = { ...result[key], url: value || result[key].url };
    } else if (value && typeof value === 'object') {
      const doc = value as Partial<PolicyDocument>;
      result[key] = {
        url: doc.url || result[key].url,
        title: doc.title || result[key].title,
        description: doc.description || result[key].description,
      };
    }
  }

  return result;
}

export function getGovernancePolicyList(policies: PolicyDocuments) {
  return GOVERNANCE_POLICY_KEYS.map((key) => {
    const display = GOVERNANCE_POLICY_DISPLAY[key];
    return {
      key,
      title: display?.title || policies[key].title,
      description: policies[key].description,
      link: policies[key].url,
    };
  });
}

export function getEquityPolicyList(policies: PolicyDocuments) {
  return EQUITY_POLICY_KEYS.map((key) => ({
    key,
    title: policies[key].title,
    description: policies[key].description,
    link: policies[key].url,
  }));
}
