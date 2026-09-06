import React from 'react';
import { PARTNERS, type Partner } from '../data/partners';
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

export const PartnersGrid: React.FC<PartnersGridProps> = ({ partners = PARTNERS }) => {
  return (
    <div className="partners-grid-container">
      <div className="partners-tiles-grid">
        {partners.map((p) => (
          <div key={p.id} className="partner-tile-card" title={`${p.name} — ${p.role}`}>
            <PartnerLogo partner={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
