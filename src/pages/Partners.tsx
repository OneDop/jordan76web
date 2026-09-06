import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { partnersByTier, type Partner } from '../data/partners';
import { PartnerLogo } from '../components/PartnersGrid';

const PartnerRow: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div className={partner.href ? 'row row--logo' : 'row row--logo row--logo-pair'}>
    <div className="row-logo">
      <PartnerLogo partner={partner} />
    </div>

    <div>
      <div className="row-kicker">{partner.role}</div>
      <div className="row-name">{partner.name}</div>
      {partner.blurb && <p className="row-text">{partner.blurb}</p>}
    </div>

    {partner.href && (
      <a
        className="textlink"
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
      >
        {partner.site}
        <ExternalLink size={13} aria-hidden="true" />
      </a>
    )}
  </div>
);

const SECTIONS = [
  { tier: 'strategic', title: 'Strategic and institutional' },
  { tier: 'programme', title: 'Track and platform' },
  { tier: 'judging', title: 'Judging and incubation' },
  { tier: 'ecosystem', title: 'Ecosystem contributors' },
] as const;

export const Partners: React.FC = () => {
  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">The organizations behind Jordan 2076.</h1>

        <p className="doc-lead">
          Jordan 2076 is built with academic institutions, technology companies, and ecosystem
          builders who have agreed to put real problems, real mentors, and real money in front of
          the next generation of Jordanian engineers.
        </p>
      </header>

      {SECTIONS.map((section) => (
        <section className="sect" key={section.tier}>
          <div className="sect-head">
            <h2 className="sect-title">{section.title}</h2>
          </div>

          <div className="rows">
            {partnersByTier(section.tier).map((partner) => (
              <PartnerRow key={partner.id} partner={partner} />
            ))}
          </div>
        </section>
      ))}

      <div className="band">
        <div>
          <h2 className="band-title">Partner with Jordan 2076</h2>
          <p className="band-text">
            Put your organization in front of 350 young engineers and founders, and get first sight
            of what they build.
          </p>
        </div>
        <Link to="/contact" className="btn-cyber-primary">
          Talk to us about sponsorship
        </Link>
      </div>
    </div>
  );
};
