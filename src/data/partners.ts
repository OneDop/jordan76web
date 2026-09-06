import abwaab from '../assets/partners/abwaab.png';
import aqabaDigitalHub from '../assets/partners/aqaba-digital-hub.svg';
import ey from '../assets/partners/ey.webp';
import ieeeCs from '../assets/partners/ieee-cs.png';
import injaz from '../assets/partners/injaz.png';
import maysalward from '../assets/partners/maysalward.png';
import modee from '../assets/partners/modee.png';
import petraRide from '../assets/partners/petra-ride.webp';
import replit from '../assets/partners/replit.svg';
import thakaa from '../assets/partners/thakaa.webp';
import ujiec from '../assets/partners/ujiec.png';
import universityOfJordan from '../assets/partners/university-of-jordan.webp';

/**
 * How a logo has to be treated to survive a dark background.
 *
 * `plate` — the default. True brand colour on a light plate. Most of
 *   these files are full-colour emblems drawn for white paper, and a
 *   white knockout flattens them into unreadable blobs: Maysalward
 *   loses its lion, the University of Jordan and UJIEC crests become
 *   blank shields, Abwaab's two-tone book turns into one shape, and
 *   Thakaa's dot cluster swallows the "TH".
 * `asIs` — the artwork is already light, so it sits straight on the
 *   dark ground. A plate would erase it.
 * `knockout` — flattened to a white silhouette. Correct only for line
 *   art and single-weight wordmarks. If partners supply official
 *   white/mono versions, every logo can move here and the set becomes
 *   one uniform silhouette wall, which is the better end state.
 */
export type LogoTreatment = 'plate' | 'asIs' | 'knockout';

export type PartnerTier = 'strategic' | 'programme' | 'judging' | 'ecosystem';

export interface Partner {
  id: string;
  /** Full legal-ish name, used on the partners page. */
  name: string;
  /** Short name for the home page strip, where space is tight. */
  shortName: string;
  /** What they actually do for Jordan 2076. */
  role: string;
  tier: PartnerTier;
  logo: string;
  treatment: LogoTreatment;
  /** Only where there is something worth saying beyond the role. */
  blurb?: string;
  href?: string;
  site?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'ieee-cs',
    name: 'IEEE Computer Society — University of Jordan chapter',
    shortName: 'IEEE CS',
    role: 'Organizing partner',
    tier: 'strategic',
    logo: ieeeCs,
    treatment: 'plate',
    blurb:
      'The student branch chapter behind Jordan 2076, running technical programmes and computing conferences for the country’s next engineering cohort.',
    href: 'https://www.ieee.org',
    site: 'ieee.org',
  },
  {
    id: 'university-of-jordan',
    name: 'University of Jordan',
    shortName: 'Univ. of Jordan',
    role: 'Institutional host',
    tier: 'strategic',
    logo: universityOfJordan,
    treatment: 'plate',
    blurb:
      'Host of congress day, and a long-standing base for engineering and computing research in the kingdom.',
    href: 'https://ju.edu.jo',
    site: 'ju.edu.jo',
  },
  {
    id: 'modee',
    name: 'Ministry of Digital Economy and Entrepreneurship',
    shortName: 'MoDEE',
    role: 'Government and national strategy',
    tier: 'strategic',
    logo: modee,
    treatment: 'plate',
    blurb:
      'Steward of the national digital transformation strategy, startup enablement policy, and Jordan’s regional technology position.',
    href: 'https://modee.gov.jo',
    site: 'modee.gov.jo',
  },
  {
    id: 'petra-ride',
    name: 'Petra Ride',
    shortName: 'Petra Ride',
    role: 'Aqaba track partner',
    tier: 'programme',
    logo: petraRide,
    treatment: 'asIs',
    blurb:
      'Powers the Aqaba 2076 transportation challenge with the problem statements, the mentorship, and the mobility prize behind it.',
  },
  {
    id: 'replit',
    name: 'Replit',
    shortName: 'Replit',
    role: 'Keynote and platform partner',
    tier: 'programme',
    logo: replit,
    treatment: 'plate',
    blurb:
      'Provides the collaborative build tooling and the keynote on where software development goes in the age of AI.',
  },
  {
    id: 'injaz',
    name: 'INJAZ',
    shortName: 'INJAZ',
    role: 'Incubation and acceleration',
    tier: 'judging',
    logo: injaz,
    treatment: 'plate',
    blurb: 'Youth entrepreneurship, acceleration, and incubation places for winning teams.',
  },
  {
    id: 'ujiec',
    name: 'UJIEC',
    shortName: 'UJIEC',
    role: 'Innovation centre',
    tier: 'judging',
    logo: ujiec,
    treatment: 'plate',
    blurb:
      'The University of Jordan Innovation and Entrepreneurship Centre, hosting post-hackathon incubation.',
  },
  {
    id: 'ey',
    name: 'EY',
    shortName: 'EY',
    role: 'Independent judging',
    tier: 'judging',
    logo: ey,
    treatment: 'plate',
    blurb: 'Independent assessment of financial logic, viability, and governance in the finals.',
  },
  {
    id: 'aqaba-digital-hub',
    name: 'Aqaba Digital Hub',
    shortName: 'Aqaba Hub',
    role: 'Digital infrastructure',
    tier: 'ecosystem',
    logo: aqabaDigitalHub,
    treatment: 'asIs',
  },
  {
    id: 'maysalward',
    name: 'Maysalward',
    shortName: 'Maysalward',
    role: 'Interactive media and gaming',
    tier: 'ecosystem',
    logo: maysalward,
    treatment: 'plate',
  },
  {
    id: 'abwaab',
    name: 'Abwaab',
    shortName: 'Abwaab',
    role: 'Education technology',
    tier: 'ecosystem',
    logo: abwaab,
    treatment: 'plate',
  },
  {
    id: 'thakaa',
    name: 'Thakaa',
    shortName: 'Thakaa',
    role: 'AI systems architecture',
    tier: 'ecosystem',
    logo: thakaa,
    treatment: 'plate',
  },
];

export const partnersByTier = (tier: PartnerTier) => PARTNERS.filter((p) => p.tier === tier);
