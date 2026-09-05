import React from 'react';
import './PartnersGrid.css';

export interface PartnerItem {
  id: string;
  name: string;
  /**
   * Put your PNG or SVG logo path or imported file here.
   * Example: logo: '/assets/partners/replit.svg' or logo: myLogoImport
   * If left empty or undefined, the clean placeholder logo will be displayed.
   */
  logo?: string;
  category?: string;
}

// 12 Partner tiles matching the 2-row x 6-column reference design
export const DEFAULT_PARTNERS: PartnerItem[] = [
  { id: 'p1', name: 'IEEE CS', logo: '', category: 'Organizing Chapter' },
  { id: 'p2', name: 'Univ. Jordan', logo: '', category: 'Host Institution' },
  { id: 'p3', name: 'MoDEE', logo: '', category: 'Government Partner' },
  { id: 'p4', name: 'Replit', logo: '', category: 'Keynote & Platform' },
  { id: 'p5', name: 'Petra Ride', logo: '', category: 'Aqaba Track Partner' },
  { id: 'p6', name: 'INJAZ', logo: '', category: 'Incubation & Growth' },
  { id: 'p7', name: 'Ernst & Young', logo: '', category: 'Independent Judging' },
  { id: 'p8', name: 'UJIEC', logo: '', category: 'Innovation Center' },
  { id: 'p9', name: 'Aqaba Hub', logo: '', category: 'Infrastructure' },
  { id: 'p10', name: 'Maysalward', logo: '', category: 'Interactive Media' },
  { id: 'p11', name: 'Abwaab', logo: '', category: 'EdTech Sector' },
  { id: 'p12', name: 'Thakaa AI', logo: '', category: 'AI Systems' },
];

// Vector geometric marks inspired by the reference Logoipsum cards
const PlaceholderIcons: React.FC<{ index: number }> = ({ index }) => {
  const iconProps = {
    className: 'partner-placeholder-icon',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
  };

  switch (index % 12) {
    case 0:
      // Asterisk / Star mark
      return (
        <svg {...iconProps}>
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 1:
      // Nested diamond geometric mark
      return (
        <svg {...iconProps}>
          <rect x="12" y="2" width="14.14" height="14.14" rx="2" transform="rotate(45 12 2)" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="12" y="7" width="7" height="7" rx="1" transform="rotate(45 12 7)" fill="currentColor" />
        </svg>
      );
    case 2:
      // Dual tilted diamond mark
      return (
        <svg {...iconProps}>
          <path d="M7 3l7 7-7 7-7-7 7-7z" fill="currentColor" />
          <path d="M17 7l4 4-4 4-4-4 4-4z" fill="currentColor" opacity="0.65" />
        </svg>
      );
    case 3:
      // Folded ribbon arch
      return (
        <svg {...iconProps}>
          <path d="M4 18V9a7 7 0 0 1 14 0v9h-4V9a3 3 0 0 0-6 0v9H4z" fill="currentColor" />
        </svg>
      );
    case 4:
      // Orbit loop / swirl
      return (
        <svg {...iconProps}>
          <path d="M12 3a9 9 0 0 0-9 9c0 3.5 2.1 6.5 5.2 7.8l1.6-2.5A6 6 0 1 1 18 12c0 1.2-.4 2.3-1 3.2l2.4 1.6A9 9 0 0 0 12 3z" fill="currentColor" />
        </svg>
      );
    case 5:
      // Concentric target / aperture
      return (
        <svg {...iconProps}>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        </svg>
      );
    case 6:
      // Triple stacked curve wings
      return (
        <svg {...iconProps}>
          <path d="M6 5c4 0 7 3 7 7s-3 7-7 7M11 7c3 0 5 2.2 5 5s-2 5-5 5M16 9c2 0 3 1.3 3 3s-1 3-3 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 7:
      // Capsule chain mark
      return (
        <svg {...iconProps}>
          <rect x="3" y="7" width="18" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="8" cy="12" r="2.5" fill="currentColor" />
          <circle cx="16" cy="12" r="2.5" fill="currentColor" />
        </svg>
      );
    case 8:
      // Bolt S-shape mark
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M14 6l-5 6h4l-3 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 9:
      // Sunburst radiating arch
      return (
        <svg {...iconProps}>
          <path d="M12 16a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4z" fill="currentColor" />
          <path d="M12 3v3M5 6l2 2M19 6l-2 2M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 10:
      // Bold geometric monogram mark
      return (
        <svg {...iconProps}>
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="currentColor" />
        </svg>
      );
    case 11:
    default:
      // Winged horizontal bars mark
      return (
        <svg {...iconProps}>
          <path d="M3 6h8a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H3V6zm0 8h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H3v-4z" fill="currentColor" />
        </svg>
      );
  }
};

interface PartnersGridProps {
  partners?: PartnerItem[];
}

export const PartnersGrid: React.FC<PartnersGridProps> = ({ partners = DEFAULT_PARTNERS }) => {
  return (
    <div className="partners-grid-container">
      <div className="partners-tiles-grid">
        {partners.map((p, idx) => (
          <div key={p.id || p.name} className="partner-tile-card" title={p.category || p.name}>
            {p.logo ? (
              <img src={p.logo} alt={p.name} className="partner-logo-img" />
            ) : (
              <div className="partner-placeholder-content">
                <PlaceholderIcons index={idx} />
                <span className="partner-placeholder-name">{p.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
