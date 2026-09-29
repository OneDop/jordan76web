import universityOfJordan from '../assets/partners/university-of-jordan.png';
import ujiec from '../assets/partners/ujiec.png';
import ministryOfYouth from '../assets/partners/ministry-of-youth.png';
import ey from '../assets/partners/ey.png';
import replit from '../assets/partners/replit.png';
import feynAi from '../assets/partners/feyn-ai.png';
import mc2 from '../assets/partners/mc2.png';
import injaz from '../assets/partners/injaz.png';
import iyaf from '../assets/partners/iyaf.png';
import shoman from '../assets/partners/shoman.svg';
import intaj from '../assets/partners/intaj.svg';

export type LogoTreatment = 'plate' | 'asIs' | 'knockout';

export type PartnerTier = 'patronage' | 'strategic';

export interface Partner {
  id: string;
  name: string;
  shortName: string;
  role: string;
  tier: PartnerTier;
  logo: string;
  treatment: LogoTreatment;
  blurb?: string;
  href?: string;
  site?: string;
}

/** 1.1 Patronage */
export const PATRONAGE_PARTNERS: Partner[] = [
  {
    id: 'university-of-jordan',
    name: 'University of Jordan',
    shortName: 'Univ. of Jordan',
    role: 'Institutional Host & Patronage',
    tier: 'patronage',
    logo: universityOfJordan,
    treatment: 'asIs',
    blurb:
      'Host of congress day and the historic national base for computing and engineering research in the Kingdom.',
    href: 'http://ju.edu.jo',
    site: 'ju.edu.jo',
  },
  {
    id: 'ujiec',
    name: 'UJ Innovation & Entrepreneurship Center (UJIEC)',
    shortName: 'UJIEC',
    role: 'Innovation & Incubation Patronage',
    tier: 'patronage',
    logo: ujiec,
    treatment: 'asIs',
    blurb:
      'The University of Jordan Innovation and Entrepreneurship Center, providing post-hackathon incubation and venture support.',
    href: 'http://ju.edu.jo',
    site: 'ujiec.ju.edu.jo',
  },
  {
    id: 'ministry-of-youth',
    name: 'Ministry of Youth',
    shortName: 'Ministry of Youth',
    role: 'Official National Patronage',
    tier: 'patronage',
    logo: ministryOfYouth,
    treatment: 'asIs',
    blurb:
      'Official patron of the national initiative, empowering Jordanian youth in technological leadership and future building.',
    href: 'https://moy.gov.jo',
    site: 'moy.gov.jo',
  },
];

/** 1.2 Strategic Partners */
export const STRATEGIC_PARTNERS: Partner[] = [
  {
    id: 'ey',
    name: 'EY',
    shortName: 'EY',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: ey,
    treatment: 'asIs',
    blurb:
      'Global assurance, strategy, and technology advisory providing independent evaluation and governance.',
    href: 'https://www.ey.com',
    site: 'ey.com',
  },
  {
    id: 'replit',
    name: 'Replit',
    shortName: 'Replit',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: replit,
    treatment: 'asIs',
    blurb:
      'Global platform powering modern software development and AI-assisted collaborative engineering.',
    href: 'https://replit.com',
    site: 'replit.com',
  },
  {
    id: 'feyn-ai',
    name: 'Feyn AI',
    shortName: 'Feyn AI',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: feynAi,
    treatment: 'asIs',
    blurb:
      'AI cognitive learning platform utilizing active explanation techniques and next-generation intelligence tools.',
    href: 'https://feynsolutions.ai',
    site: 'feynsolutions.ai',
  },
  {
    id: 'mc2',
    name: 'MC²',
    shortName: 'MC²',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: mc2,
    treatment: 'asIs',
    blurb:
      'Technology & innovation studio advancing regional digital capability and frontier tech solutions.',
    href: 'https://jordan2076.com',
    site: 'mc2.tech',
  },
  {
    id: 'injaz',
    name: 'INJAZ',
    shortName: 'INJAZ',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: injaz,
    treatment: 'asIs',
    blurb:
      'Leading youth empowerment and economic enablement organization nurturing future entrepreneurs.',
    href: 'https://injaz.org.jo',
    site: 'injaz.org.jo',
  },
  {
    id: 'iyaf',
    name: 'IYAF',
    shortName: 'IYAF',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: iyaf,
    treatment: 'asIs',
    blurb:
      'International Youth Ambassadors Foundation, empowering youth-led ventures, leadership, and community impact.',
    href: 'https://iyafglobal.com',
    site: 'iyafglobal.com',
  },
  {
    id: 'shoman',
    name: 'Abdul Hameed Shoman Foundation',
    shortName: 'Shoman Foundation',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: shoman,
    treatment: 'asIs',
    blurb:
      'Arab Bank’s arm for cultural and social responsibility, championing scientific research and digital innovation.',
    href: 'https://shoman.org',
    site: 'shoman.org',
  },
  {
    id: 'intaj',
    name: 'Intaj',
    shortName: 'int@j',
    role: 'Strategic Partner',
    tier: 'strategic',
    logo: intaj,
    treatment: 'asIs',
    blurb:
      'The Information and Communications Technology Association of Jordan, fostering ICT ecosystem development.',
    href: 'https://intaj.net',
    site: 'intaj.net',
  },
];

/** All confirmed partners */
export const PARTNERS: Partner[] = [...PATRONAGE_PARTNERS, ...STRATEGIC_PARTNERS];

export const partnersByTier = (tier: PartnerTier) => PARTNERS.filter((p) => p.tier === tier);
