import petraRide from '../assets/partners/petra-ride.png';
import wamda from '../assets/partners/wamda.png';
import opensooq from '../assets/partners/opensooq.png';
import estarta from '../assets/partners/estarta.png';
import fifth from '../assets/partners/fifth.png';
import kernel from '../assets/partners/kernel.png';
import eia from '../assets/partners/eia.png';
import vbc from '../assets/partners/vbc.png';
import kbwJordan from '../assets/partners/kbw-jordan.png';

export type SponsorTier = 'platinum' | 'elite' | 'gold' | 'silver' | 'bronze';

export const TIER_ORDER: SponsorTier[] = ['platinum', 'elite', 'gold', 'silver', 'bronze'];

export interface TierMeta {
  tier: SponsorTier;
  level: number;
  label: string;
  tagline: string;
}

export const TIER_META: Record<SponsorTier, TierMeta> = {
  platinum: {
    tier: 'platinum',
    level: 5,
    label: 'Exclusive Platinum Sponsor',
    tagline: 'Highest & most prominent sponsor level across Jordan 2076.',
  },
  elite: {
    tier: 'elite',
    level: 4,
    label: 'Exclusive Elite',
    tagline: 'Driving infrastructure, digital transformation & sustainable growth.',
  },
  gold: {
    tier: 'gold',
    level: 3,
    label: 'Gold Sponsors',
    tagline: 'Premier corporate sponsors powering summit tracks and innovation.',
  },
  silver: {
    tier: 'silver',
    level: 2,
    label: 'Silver Sponsors',
    tagline: 'Key industry backers on the official showcase.',
  },
  bronze: {
    tier: 'bronze',
    level: 1,
    label: 'Bronze Sponsors',
    tagline: 'Ecosystem builders and supporting sponsors.',
  },
};

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: SponsorTier;
  tagline?: string;
  blurb?: string;
  website?: string;
  videoUrl?: string;
  treatment?: 'plate' | 'asIs' | 'knockout';
}

/** 2.1 Exclusive Platinum Sponsor */
export const PLATINUM_SPONSOR: Sponsor = {
  id: 'petra-ride',
  name: 'Petra Ride',
  logo: petraRide,
  tier: 'platinum',
  tagline: 'Exclusive Platinum Sponsor',
  treatment: 'asIs',
  blurb:
    'The Kingdom’s premier mobility network, powering Jordan 2076 as our Exclusive Platinum Sponsor with premier prominence and mobility leadership.',
  website: 'https://petraride.com',
};

/** 2.2 Exclusive Elite Sponsor */
export const ELITE_SPONSOR: Sponsor = {
  id: 'kbw-jordan',
  name: 'KBW Investments Jordan',
  logo: kbwJordan,
  tier: 'elite',
  tagline: 'DRIVING INFRASTRUCTURE, DIGITAL TRANSFORMATION & SUSTAINABLE GROWTH',
  treatment: 'asIs',
  blurb:
    'As a cornerstone of regional development, KBW Investments Jordan joins Jordan 2076 to accelerate public-private partnerships, smart city infrastructure, and large-scale healthcare digitization, anchoring the Kingdom’s leap into the future.',
  website: 'https://kbw-investments.com',
};

export const TITLE_SPONSOR = ELITE_SPONSOR;

/** 2.3 Gold Sponsors */
export const GOLD_SPONSORS: Sponsor[] = [
  {
    id: 'wamda',
    name: 'Wamda',
    logo: wamda,
    tier: 'gold',
    tagline: 'Gold Sponsor',
    treatment: 'asIs',
    blurb:
      'Leading entrepreneurship platform and venture catalyst accelerating MENA founders and investment ecosystems.',
    website: 'https://wamda.com',
  },
  {
    id: 'opensooq',
    name: 'OpenSooq',
    logo: opensooq,
    tier: 'gold',
    tagline: 'Gold Sponsor',
    treatment: 'asIs',
    blurb:
      'The region’s premier classifieds and commerce platform empowering millions of daily digital transactions.',
    website: 'https://opensooq.com',
  },
  {
    id: 'estarta',
    name: 'Estarta',
    logo: estarta,
    tier: 'gold',
    tagline: 'Gold Sponsor',
    treatment: 'asIs',
    blurb:
      'Global ICT solutions and engineering leader delivering enterprise infrastructure and technical excellence.',
    website: 'https://estarta.com',
  },
];

/** 2.3 Silver Sponsors (No description, logo + company name + website link) */
export const SILVER_SPONSORS: Sponsor[] = [
  {
    id: 'fifth',
    name: 'Fifth',
    logo: fifth,
    tier: 'silver',
    tagline: 'Silver Sponsor',
    treatment: 'asIs',
    website: 'https://fifth.jo',
  },
  {
    id: 'kernel',
    name: 'Kernel',
    logo: kernel,
    tier: 'silver',
    tagline: 'Silver Sponsor',
    treatment: 'asIs',
    website: 'https://kernel.jo',
  },
];

/** 2.4 Bronze Sponsors (Logo only) */
export const BRONZE_SPONSORS: Sponsor[] = [
  {
    id: 'eia',
    name: 'Al-Ettifaq International Academy (EIA)',
    logo: eia,
    tier: 'bronze',
    tagline: 'Bronze Sponsor',
    treatment: 'asIs',
    website: 'https://inacademy.eu',
  },
  {
    id: 'vbc',
    name: 'VBC',
    logo: vbc,
    tier: 'bronze',
    tagline: 'Bronze Sponsor',
    treatment: 'asIs',
    website: 'https://vbc.jo',
  },
];

/** All confirmed sponsors */
export const CONFIRMED_SPONSORS: Sponsor[] = [
  PLATINUM_SPONSOR,
  TITLE_SPONSOR,
  ...GOLD_SPONSORS,
  ...SILVER_SPONSORS,
  ...BRONZE_SPONSORS,
];

export const sponsorsByTier = (tier: SponsorTier): Sponsor[] =>
  CONFIRMED_SPONSORS.filter((s) => s.tier === tier);

