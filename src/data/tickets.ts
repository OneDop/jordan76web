import type { TicketTier } from '../types';

export const TICKET_TIERS: TicketTier[] = [
  {
    id: 'tier-virtual',
    name: 'Virtual Neural Link',
    price: '150 JOD',
    badgeType: 'VIRTUAL',
    features: [
      'Full 8K 3D Holographic Livestream Access',
      'Virtual Expo Hall Access & Q&A',
      'Digital NFT Attendee Badge (2076 Edition)',
      'Access to Keynote On-Demand Archives'
    ],
    popular: false
  },
  {
    id: 'tier-delegate',
    name: 'Cyber Delegate Pass',
    price: '450 JOD',
    badgeType: 'NEURAL',
    features: [
      'Physical Access to Amman CyberDome',
      'All 3 Days Keynote & Track Sessions',
      'Interactive Holo-Exhibition Floor Access',
      'Networking Cyber-Lounge & Gala Dinner',
      'Custom Encrypted Holographic Event Badge',
      'Official Jordan 2076 Tech Kit'
    ],
    popular: true
  },
  {
    id: 'tier-vip',
    name: 'VIP Architect Pass',
    price: '950 JOD',
    badgeType: 'VIP ARCHITECT',
    features: [
      'Priority VIP Front Row seating in Main CyberDome',
      'Exclusive Closed-Door Ministerial AI Roundtable',
      'Private Keynote Speaker Lounge Access',
      'Autonomous Shuttle Transport Service',
      'Commemorative Platinum Neural Badge & Hologram',
      '1-on-1 Venture Capital & Tech Syndicate Meetings'
    ],
    popular: false
  }
];
