/**
 * Sponsors — two distinct sets.
 *
 * CONFIRMED_SPONSORS: corporate backers with a signed package tier.
 *   Tier 4 Platinum · Tier 3 Gold · Tier 2 Silver · Tier 1 Bronze.
 * POTENTIAL_SPONSORS: the outreach board — names only, no logo files.
 */

/* ---------- Tiers ---------- */

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

export const TIER_ORDER: SponsorTier[] = ['platinum', 'gold', 'silver', 'bronze'];

export interface TierMeta {
  tier: SponsorTier;
  /** Package tier number, 4 (top) down to 1. */
  level: 4 | 3 | 2 | 1;
  label: string;
  tagline: string;
}

export const TIER_META: Record<SponsorTier, TierMeta> = {
  platinum: { tier: 'platinum', level: 4, label: 'Platinum', tagline: 'Title backing — stage, showreel and demo floor.' },
  gold: { tier: 'gold', level: 3, label: 'Gold', tagline: 'Prime visibility across congress and broadcast.' },
  silver: { tier: 'silver', level: 2, label: 'Silver', tagline: 'Track-level presence and booth footprint.' },
  bronze: { tier: 'bronze', level: 1, label: 'Bronze', tagline: 'Community backers on the wall.' },
};

/* ---------- Confirmed sponsors ---------- */

export interface ConfirmedSponsor {
  id: string;
  name: string;
  /** Logo image URL. Mock entries use inline SVG monograms — swap for brand files when supplied. */
  logo: string;
  tier: SponsorTier;
  /** Short strap under the name, e.g. "Connectivity partner". */
  tagline?: string;
  blurb?: string;
  website?: string;
  /** Tier 4 package: showreel embed for the video modal. */
  videoUrl?: string;
  /** Tier 4 package: named showcase on the demo floor. */
  demoArea?: string;
}

/**
 * Inline SVG monogram — self-contained placeholder mark so the page never
 * depends on third-party logo files. Replace `logo` with the supplied
 * brand asset when a sponsor signs.
 */
const mono = (initials: string, bg = '#0B2237', fg = '#7EF3E8'): string => {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'>` +
    `<rect width='320' height='160' rx='20' fill='${bg}'/>` +
    `<rect x='14' y='14' width='292' height='132' rx='14' fill='none' stroke='${fg}' stroke-opacity='0.35' stroke-width='2'/>` +
    `<text x='160' y='96' font-family='Arial,sans-serif' font-size='52' font-weight='700' ` +
    `fill='${fg}' text-anchor='middle' letter-spacing='2'>${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const CONFIRMED_SPONSORS: ConfirmedSponsor[] = [
  {
    id: 'orange-jordan',
    name: 'Orange Jordan',
    logo: mono('OJ', '#141414', '#FF7900'),
    tier: 'platinum',
    tagline: 'Connectivity partner',
    blurb:
      'Powers the congress network end to end — the venue backbone, the hackathon uplink, and the broadcast that carries Jordan 2076 beyond the hall.',
    website: 'https://orange.jo',
    // Placeholder reel — replace with the sponsor-supplied showreel (Tier 4 package).
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    demoArea: 'Orange 5G Experience Dome — Congress demo floor',
  },
  {
    id: 'bank-al-etihad',
    name: 'Bank al Etihad',
    logo: mono('BE', '#0B2237', '#7EF3E8'),
    tier: 'gold',
    tagline: 'Fintech & banking partner',
    blurb:
      'Backs the fintech track and the founders’ lounge — banking rails for the teams building Jordan’s next ledger.',
    website: 'https://bankaletihad.com',
  },
  {
    id: 'progresssoft',
    name: 'ProgressSoft',
    logo: mono('PS', '#0B2237', '#8FF7EC'),
    tier: 'gold',
    tagline: 'Payments technology partner',
    blurb:
      'Brings real-world payment problem statements and engineering mentors to the fintech challenge.',
    website: 'https://progressoft.com',
  },
  {
    id: 'petra-ride',
    name: 'Petra Ride',
    logo: mono('PR', '#101828', '#F5C518'),
    tier: 'silver',
    tagline: 'Mobility track sponsor',
    blurb: 'Fuels the Aqaba 2076 transportation challenge and its mobility prize.',
  },
  {
    id: 'labiba-ai',
    name: 'labiba.ai',
    logo: mono('LA', '#0B2237', '#B8FFF6'),
    tier: 'silver',
    tagline: 'AI solutions sponsor',
    blurb: 'Arabic-language AI tooling and mentors for the intelligence track.',
    website: 'https://labiba.ai',
  },
  {
    id: 'jo-academy',
    name: 'Jo Academy',
    logo: mono('JA', '#0B2237', '#7EF3E8'),
    tier: 'bronze',
    tagline: 'Edtech supporter',
    website: 'https://joacademy.com',
  },
  {
    id: 'zinc',
    name: 'ZINC',
    logo: mono('ZN', '#0B2237', '#8FF7EC'),
    tier: 'bronze',
    tagline: 'Innovation platform supporter',
  },
];

export const sponsorsByTier = (tier: SponsorTier): ConfirmedSponsor[] =>
  CONFIRMED_SPONSORS.filter((s) => s.tier === tier);

/* ---------- Outreach board (prospective) ---------- */

export interface PotentialSponsor {
  name: string;
  note?: string;
}

/**
 * Sponsors board — transcribed from the Potential Sponsors board (Image 3).
 * Kept as names so the page does not depend on third-party logo files.
 */
export const POTENTIAL_SPONSORS: PotentialSponsor[] = [
  { name: 'labiba.ai', note: 'AI solutions' },
  { name: 'Petra Ride', note: 'Mobility' },
  { name: 'ProgressSoft', note: 'Fintech · progressoft.com' },
  { name: 'ACACUS', note: 'Technology' },
  { name: 'Bank al Etihad', note: 'بنك الاتحاد · Banking' },
  { name: 'Chick Mania Production', note: 'Media production' },
  { name: 'Jo Academy', note: 'Edtech' },
  { name: 'Economic Modernization Vision', note: 'رؤية التحديث الاقتصادي' },
  { name: 'PURE Analytica', note: 'Data & analytics' },
  { name: 'King Abdullah II Fund for Development', note: 'Development' },
  { name: 'JEDCO', note: 'Jordan Enterprise Development Corporation' },
  { name: 'Ministry of Digital Economy & Entrepreneurship', note: 'وزارة الاقتصاد الرقمي والريادة' },
  { name: 'Ministry of Youth', note: 'وزارة الشباب' },
  { name: 'Oasis500', note: 'Investment · your investment partner' },
  { name: 'Jordan Tourism Board', note: 'هيئة تنشيط السياحة' },
  { name: 'ZINC', note: 'Innovation platform' },
  { name: 'National Cyber Security Center', note: 'المركز الوطني للأمن السيبراني' },
  { name: 'Qafza Tech', note: 'قفزة · Tech' },
  { name: 'Crown Prince Foundation', note: 'مؤسسة ولي العهد' },
  { name: 'Kernel', note: 'Venture & innovation' },
  { name: 'ISSF', note: 'شركة الصندوق الأردني للريادة · Innovative Startups & SMEs Fund' },
  { name: 'Orange Jordan', note: 'Telecom' },
];
