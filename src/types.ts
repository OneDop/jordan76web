export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  avatar: string;
  track: string;
  keynoteTitle: string;
  /** Which Congress Day slot they hold. Drives the roster grouping. */
  session: 'keynote' | 'panel';
  targetId?: string;
  clearance?: string;
  matchScore?: string;
  cameraCode?: string;
  faceBox?: { top: string; left: string; width: string; height: string };
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface AgendaItem {
  id: string;
  day: number; // 1, 2, or 3
  time: string;
  title: string;
  description: string;
  speakerId?: string;
  speakerName?: string;
  track: 'Keynote' | 'Quantum Tech' | 'Bio-Cybernetics' | 'Space & Energy' | 'AI & Governance';
  location: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  badgeType: 'VIRTUAL' | 'NEURAL' | 'VIP ARCHITECT';
  features: string[];
  popular?: boolean;
}

export interface VisionPillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  stats: string;
}

export interface HackathonTrack {
  id: string;
  /** Zero-padded index shown on the evidence photo, e.g. "01". */
  number: string;
  site: string;
  title: string;
  tagline: string;
  image: string;
  /** How the photo should be framed in the 5:4 polaroid window. */
  focus: string;
  signalCode: string;
  coordinates: string;
  status: string;
  briefing: string;
  deliverables: string[];
  prize: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Tickets' | 'Venue' | 'Cybernetics';
}

export interface UserPass {
  fullName: string;
  email: string;
  handle: string;
  tierId: string;
  passId: string;
  createdDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  teamId: string;
  teamName: string;
  avatar: string;
  bio: string;
  responsibilities: string[];
  tags: string[];
  filename: string;
  fileSize: string;
  modifiedDate: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    instagram?: string;
  };
}

export interface TeamFolder {
  id: string;
  name: string;
  title: string;
  path: string;
  description: string;
  icon: string;
  itemCount: number;
}
