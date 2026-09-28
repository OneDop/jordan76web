import petraRide from '../assets/partners/petra-ride.webp';
import wamda from '../assets/partners/wamda.svg';
import opensooq from '../assets/partners/opensooq.svg';
import estarta from '../assets/partners/estarta.svg';
import fifth from '../assets/partners/fifth.svg';
import kernel from '../assets/partners/kernel.svg';
import eia from '../assets/partners/eia.svg';
import vbc from '../assets/partners/vbc.svg';

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

export const TIER_ORDER: SponsorTier[] = ['platinum', 'gold', 'silver', 'bronze'];

export interface TierMeta {
  tier: SponsorTier;
  level: 4 | 3 | 2 | 1;
  label: string;
  tagline: string;
}

export const TIER_META: Record<SponsorTier, TierMeta> = {
  platinum: {
    tier: 'platinum',
    level: 4,
    label: 'Exclusive Platinum Sponsor',
    tagline: 'Highest & most prominent sponsor level across Jordan 2076.',
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
}

/** 2.1 Exclusive Platinum Sponsor */
export const PLATINUM_SPONSOR: Sponsor = {
  id: 'petra-ride',
  name: 'Petra Ride',
  logo: petraRide,
  tier: 'platinum',
  tagline: 'Exclusive Platinum Sponsor',
  blurb:
    'The Kingdom’s premier mobility network, powering Jordan 2076 as our Exclusive Platinum Sponsor with premier prominence and mobility leadership.',
  website: 'https://petraride.com',
};

/** 2.2 Gold Sponsors */
export const GOLD_SPONSORS: Sponsor[] = [
  {
    id: 'wamda',
    name: 'Wamda',
    logo: wamda,
    tier: 'gold',
    tagline: 'Gold Sponsor',
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
    blurb:
      'Global ICT solutions and engineering leader delivering enterprise infrastructure and technical excellence.',
    website: 'https://estartasolutions.com',
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
    website: 'https://fifth.jo',
  },
  {
    id: 'kernel',
    name: 'Kernel',
    logo: kernel,
    tier: 'silver',
    tagline: 'Silver Sponsor',
    website: 'https://kernel.jo',
  },
];

/** 2.4 Bronze Sponsors (Logo only) */
export const BRONZE_SPONSORS: Sponsor[] = [
  {
    id: 'eia',
    name: 'EIA',
    logo: eia,
    tier: 'bronze',
    tagline: 'Bronze Sponsor',
    website: 'https://inacademy.eu',
  },
  {
    id: 'vbc',
    name: 'VBC',
    logo: vbc,
    tier: 'bronze',
    tagline: 'Bronze Sponsor',
    website: 'https://vbc.jo',
  },
];

/** All confirmed sponsors */
export const CONFIRMED_SPONSORS: Sponsor[] = [
  PLATINUM_SPONSOR,
  ...GOLD_SPONSORS,
  ...SILVER_SPONSORS,
  ...BRONZE_SPONSORS,
];

export const sponsorsByTier = (tier: SponsorTier): Sponsor[] =>
  CONFIRMED_SPONSORS.filter((s) => s.tier === tier);
