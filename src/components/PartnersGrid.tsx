import React from 'react';
import { PATRONAGE_PARTNERS, type Partner } from '../data/partners';
import './PartnersGrid.css';

export const PartnerLogo: React.FC<{ partner: Partner; className?: string }> = ({
  partner,
  className,
}) => (
  <img
    src={partner.logo}
    alt={partner.name}
    loading="lazy"
    className={['partner-logo', `partner-logo--${partner.treatment}`, className]
      .filter(Boolean)
      .join(' ')}
  />
);

interface PartnersGridProps {
  partners?: Partner[];
}

export const PartnersGrid: React.FC<PartnersGridProps> = ({ partners = PATRONAGE_PARTNERS }) => {
  const isPatronage = partners.length === 3;

  return (
    <div className="partners-grid-container">
      <div className={`partners-tiles-grid ${isPatronage ? 'partners-tiles-grid--patronage' : ''}`}>
        {partners.map((p) => (
          <div
            key={p.id}
            className={`partner-tile-card ${isPatronage ? 'partner-tile-card--patronage' : ''}`}
            title={`${p.name} — ${p.role}`}
            onClick={() => p.href && window.open(p.href, '_blank', 'noopener,noreferrer')}
          >
            <PartnerLogo partner={p} />
            {isPatronage && (
              <div className="partner-patronage-meta">
                <span className="partner-patronage-name">{p.name}</span>
                <span className="partner-patronage-role">{p.role}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
