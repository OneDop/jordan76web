import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Crown,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import {
  PARTNERS,
  PATRONAGE_PARTNERS,
  STRATEGIC_PARTNERS,
  type Partner,
} from '../data/partners';
import {
  CONFIRMED_SPONSORS,
  PLATINUM_SPONSOR,
  ELITE_SPONSOR,
  GOLD_SPONSORS,
  SILVER_SPONSORS,
  BRONZE_SPONSORS,
  type Sponsor,
} from '../data/sponsors';
import DriftWall from '../components/DriftWall';
import './PartnersSponsors.css';

import type { Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

/* ============================================================
   Spotlight Wrapper — Luxury Cursor Following Glow
   ============================================================ */

interface SpotlightProps {
  as?: 'article' | 'div';
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
  onClick?: () => void;
}

const Spotlight: React.FC<SpotlightProps> = ({ as = 'article', children, className = '', ...rest }) => {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const Component = as === 'div' ? motion.div : motion.article;

  return (
    <Component
      ref={ref as any}
      onMouseMove={onMove}
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={`ps-spot ${className}`}
      {...rest}
    >
      <span className="ps-spot-glow" aria-hidden="true" />
      <span className="ps-spot-sheen" aria-hidden="true" />
      {children}
    </Component>
  );
};

/* ============================================================
   1.1 Patronage Card — 3 Grand Pillars with High-Contrast Plates
   ============================================================ */

const PatronageCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
  <Spotlight className="ps-card ps-card--patronage" aria-label={`${partner.name} — ${partner.role}`}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span className="ps-tier-pill ps-tier-pill--silver" style={{ color: '#7EF3E8', borderColor: 'rgba(126,243,232,0.3)' }}>
        <ShieldCheck size={12} aria-hidden="true" />
        {partner.role}
      </span>
      <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.85rem', fontWeight: 800, color: 'rgba(126,243,232,0.5)' }}>
        0{index + 1}
      </span>
    </div>

    <div className="ps-logo-plate--patronage">
      <img src={partner.logo} alt={partner.name} loading="lazy" />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
      <h3 className="ps-card-name--patronage">{partner.name}</h3>
      {partner.blurb && (
        <p style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
          {partner.blurb}
        </p>
      )}
    </div>

    <div style={{ paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {partner.href ? (
        <a
          className="ps-visit"
          href={partner.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${partner.name} portal`}
        >
          <span>{partner.site ?? 'Visit Official Portal'}</span>
          <span className="ps-visit-icon">
            <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </a>
      ) : (
        <span className="ps-visit ps-visit--static">
          <span>{partner.shortName}</span>
        </span>
      )}
    </div>
  </Spotlight>
);

/* ============================================================
   1.2 Strategic Partner Card — Clean Modern Bento
   ============================================================ */

const StrategicPartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
  <Spotlight className="ps-bento-card" aria-label={`${partner.name} — Strategic Partner`}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span className="ps-tier-pill ps-tier-pill--silver" style={{ fontSize: '0.72rem' }}>
        <Zap size={11} aria-hidden="true" />
        Strategic Partner
      </span>
      <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', fontWeight: 800, color: 'rgba(183,185,189,0.35)' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="ps-bento-logo">
      <img src={partner.logo} alt={partner.name} loading="lazy" />
    </div>

    <h4 className="ps-bento-name">{partner.name}</h4>
    {partner.blurb && <p className="ps-bento-blurb">{partner.blurb}</p>}

    <div style={{ paddingTop: '0.6rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {partner.href && (
        <a
          className="ps-visit"
          href={partner.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${partner.name} site`}
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          <span>{partner.site ?? 'Official Website'}</span>
          <span className="ps-visit-icon">
            <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  </Spotlight>
);

/* ============================================================
   2.1 Exclusive Platinum Sponsor (Hero Showcase)
   ============================================================ */

const PlatinumHeroShowcase: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <Spotlight className="ps-plat-card" aria-label={`${sponsor.name} — Exclusive Platinum Sponsor`}>
    <div className="ps-plat-top-bar">
      <span className="ps-tier-pill ps-tier-pill--platinum" style={{ fontSize: '0.85rem', padding: '0.35rem 0.9rem' }}>
        <Crown size={15} aria-hidden="true" />
        2.1 EXCLUSIVE PLATINUM SPONSOR
      </span>
      <span style={{ fontFamily: 'var(--font-rajdhani)', fontSize: '0.88rem', fontWeight: 700, color: 'rgba(255,217,122,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Official Mobility Partner · Jordan 2076
      </span>
    </div>

    <div className="ps-plat-grid">
      {/* Unclipped, perfectly proportioned logo container */}
      <div className="ps-plat-stage">
        <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
      </div>

      <div className="ps-plat-info">
        <h3 className="ps-plat-title">{sponsor.name}</h3>
        <span className="ps-plat-sub">Jordan's Premier Smart Mobility &amp; Transit Network</span>
        <p className="ps-plat-text">{sponsor.blurb}</p>

        <div className="ps-plat-actions">
          {sponsor.website && (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-plat-cta"
            >
              <span>Visit Official Website</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Spotlight>
);

/* ============================================================
   2.2 Exclusive Elite Sponsor (Distinctive Executive Showcase)
   ============================================================ */

const EliteHeroShowcase: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <Spotlight className="ps-elite-card" aria-label={`${sponsor.name} — Exclusive Elite Sponsor`}>
    <div className="ps-elite-top-bar">
      <span className="ps-tier-pill ps-tier-pill--elite">
        <Sparkles size={13} aria-hidden="true" />
        2.2 EXCLUSIVE ELITE
      </span>
      <span className="ps-elite-badge">
        Anchor Infrastructure &amp; Digital Transformation Partner
      </span>
    </div>

    <div className="ps-elite-grid">
      <div className="ps-elite-stage">
        <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
      </div>

      <div className="ps-elite-info">
        <h3 className="ps-elite-name">{sponsor.name}</h3>
        <span className="ps-elite-sub">
          {sponsor.tagline || 'DRIVING INFRASTRUCTURE, DIGITAL TRANSFORMATION & SUSTAINABLE GROWTH'}
        </span>
        <p className="ps-elite-text">{sponsor.blurb}</p>

        <div className="ps-elite-actions">
          {sponsor.website && (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-elite-cta"
              aria-label={`Visit ${sponsor.name} website`}
            >
              <span>Visit Official Website</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Spotlight>
);

/* ============================================================
   2.3 Gold Sponsor Card (Equal weight to Strategic Partners)
   ============================================================ */

const GoldSponsorCard: React.FC<{ sponsor: Sponsor; index: number }> = ({ sponsor, index }) => (
  <Spotlight className="ps-bento-card ps-gold-card" aria-label={`${sponsor.name} — Gold Sponsor`}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span className="ps-tier-pill ps-tier-pill--gold" style={{ fontSize: '0.72rem' }}>
        <Sparkles size={11} aria-hidden="true" />
        Gold Sponsor
      </span>
      <span style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.78rem', fontWeight: 800, color: 'rgba(245,197,24,0.4)' }}>
        0{index + 1}
      </span>
    </div>

    <div className="ps-bento-logo">
      <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
    </div>

    <h4 className="ps-bento-name">{sponsor.name}</h4>
    {sponsor.blurb && <p className="ps-bento-blurb">{sponsor.blurb}</p>}

    <div style={{ paddingTop: '0.6rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {sponsor.website && (
        <a
          className="ps-visit"
          href={sponsor.website}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${sponsor.name} website`}
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          <span>Visit Website</span>
          <span className="ps-visit-icon">
            <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  </Spotlight>
);

/* ============================================================
   2.3 Silver Sponsor Card (No description, logo + name + link)
   ============================================================ */

const SilverSponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <Spotlight className="ps-silver-card" aria-label={`${sponsor.name} — Silver Sponsor`}>
    <div className="ps-silver-logo-wrap">
      <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
    </div>

    <div style={{ flex: 1, minWidth: 0 }}>
      <span className="ps-tier-pill ps-tier-pill--silver" style={{ marginBottom: '0.35rem' }}>
        Silver Sponsor
      </span>
      <h4 style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 700, fontSize: '1.05rem', color: '#F5F7F8', margin: 0 }}>
        {sponsor.name}
      </h4>
    </div>

    {sponsor.website && (
      <a
        className="ps-visit"
        href={sponsor.website}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Visit ${sponsor.name} site`}
      >
        <span>Visit Site</span>
        <span className="ps-visit-icon">
          <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </a>
    )}
  </Spotlight>
);

/* ============================================================
   2.4 Bronze Sponsor Tile (Logo only)
   ============================================================ */

const BronzeSponsorTile: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <motion.a
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className="ps-bronze-tile"
    aria-label={`${sponsor.name} — Bronze Sponsor`}
    variants={item}
    whileHover={{ y: -3, scale: 1.02 }}
    transition={{ duration: 0.25, ease: EASE }}
  >
    <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
  </motion.a>
);

type TabId = 'partners' | 'sponsors';

/* ============================================================
   Main Partners & Sponsors Page
   ============================================================ */

export const Partners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('partners');

  // DriftWall: ONLY the confirmed partners and sponsors
  const driftItems = useMemo(
    () => [
      ...PARTNERS.map((p) => ({
        image: p.logo,
        title: `${p.name} — ${p.role}`,
        href: p.href,
        treatment: p.treatment,
      })),
      ...CONFIRMED_SPONSORS.map((s) => ({
        image: s.logo,
        title: `${s.name} — ${s.tagline ?? s.name}`,
        href: s.website,
        treatment: s.treatment ?? 'asIs',
      })),
    ],
    []
  );

  const scrollTo = (id: TabId) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const tabs: { id: TabId; label: string; meta: string }[] = [
    { id: 'partners', label: 'Partners', meta: `${PARTNERS.length}` },
    { id: 'sponsors', label: 'Sponsors', meta: `${CONFIRMED_SPONSORS.length}` },
  ];

  return (
    <div className="doc ps-page" style={{ paddingBottom: '8rem' }}>
      {/* ================= HERO ================= */}
      <motion.header
        className="ps-hero"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="ps-hero-badge">
          <Sparkles size={13} aria-hidden="true" />
          <span>Jordan 2076 · Partners &amp; Sponsors Network</span>
          <span className="ps-hero-badge-pulse" aria-hidden="true" />
        </div>

        <h1 className="doc-title doc-title--wide ps-hero-title">
          The organizations <br />
          <span className="ps-gradient-text">behind Jordan&nbsp;2076.</span>
        </h1>

        <p className="doc-lead ps-hero-lead">
          Jordan 2076 is powered by academic institutions, ministries, and global tech platforms — our{' '}
          <strong>partners</strong> — alongside the visionary companies backing the national summit — our{' '}
          <strong>sponsors</strong>.
        </p>

        {/* Tab switcher */}
        <nav className="ps-tabs" aria-label="Jump to section">
          {tabs.map((t, i) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => scrollTo(t.id)}
                aria-pressed={isActive}
                className={`ps-tab-btn${isActive ? ' is-active' : ''}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="ps-tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="ps-tab-num">0{i + 1}</span>
                <span className="ps-tab-label">{t.label}</span>
                <span className="ps-tab-count">{t.meta}</span>
              </button>
            );
          })}
        </nav>
      </motion.header>

      {/* ================= DRIFTWALL ANIMATION ================= */}
      <motion.section
        className="ps-drift-wrap"
        initial={{ opacity: 0, y: 36, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        aria-label="Partner & Sponsor Logo Wall"
      >
        <span className="ps-noise" aria-hidden="true" />
        <div className="ps-drift-grid-bg" aria-hidden="true" />

        <DriftWall
          items={driftItems}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          overlayColor="transparent"
          dim={0.92}
          fade={0.5}
        />

        <span className="ps-drift-fade ps-drift-fade--top" aria-hidden="true" />
        <span className="ps-drift-fade ps-drift-fade--bottom" aria-hidden="true" />
        <span className="ps-drift-ring" aria-hidden="true" />

        <div className="ps-drift-hint" aria-hidden="true">
          <span>Hover a tile to lift it</span>
        </div>
      </motion.section>

      {/* ================= 01 — PARTNERS ================= */}
      <div className="ps-part-label" id="partners">
        <span className="ps-part-num">01 — PARTNERS</span>
        <span className="ps-part-rule" aria-hidden="true" />
        <span className="ps-part-tag">Patronage · Strategic Partners</span>
      </div>

      <section className="sect ps-sect" aria-labelledby="partners-heading">
        {/* 1.1 Patronage */}
        <div className="ps-tier" aria-label="1.1 Patronage">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon">
                <ShieldCheck size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title">1.1 Patronage</h3>
                <p className="ps-tier-copy">
                  Official national and academic patrons anchoring the summit and youth enablement.
                </p>
              </div>
            </div>
            <span className="ps-tier-count">0{PATRONAGE_PARTNERS.length}</span>
          </div>

          <motion.div
            className="ps-patronage-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PATRONAGE_PARTNERS.map((partner, i) => (
              <PatronageCard key={partner.id} partner={partner} index={i} />
            ))}
          </motion.div>
        </div>

        {/* 1.2 Strategic Partners */}
        <div className="ps-tier" aria-label="1.2 Strategic Partners">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon">
                <Zap size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title">1.2 Strategic Partners</h3>
                <p className="ps-tier-copy">
                  Global platforms, foundations, and industry bodies delivering mentorship, judging, and technical tooling.
                </p>
              </div>
            </div>
            <span className="ps-tier-count">
              {String(STRATEGIC_PARTNERS.length).padStart(2, '0')}
            </span>
          </div>

          <motion.div
            className="ps-bento-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {STRATEGIC_PARTNERS.map((partner, i) => (
              <StrategicPartnerCard key={partner.id} partner={partner} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 02 — SPONSORS ================= */}
      <div className="ps-part-label" id="sponsors">
        <span className="ps-part-num">02 — SPONSORS</span>
        <span className="ps-part-rule" aria-hidden="true" />
        <span className="ps-part-tag">Platinum · Gold · Silver · Bronze</span>
      </div>

      <section className="sect ps-sect" aria-labelledby="sponsors-heading">
        {/* 2.1 Exclusive Platinum Sponsor */}
        <div className="ps-tier" aria-label="2.1 Exclusive Platinum Sponsor">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon ps-tier-icon--platinum">
                <Crown size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title" style={{ color: '#FFD97A' }}>
                  2.1 Exclusive Platinum Sponsor
                </h3>
                <p className="ps-tier-copy">
                  Highest and most prominent sponsor level across all of Jordan 2076.
                </p>
              </div>
            </div>
            <span className="ps-tier-count" style={{ WebkitTextStroke: '1px rgba(255,193,60,0.5)' }}>
              01
            </span>
          </div>

          <PlatinumHeroShowcase sponsor={PLATINUM_SPONSOR} />
        </div>

        {/* 2.2 Exclusive Elite */}
        <div className="ps-tier" aria-label="2.2 Exclusive Elite">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon ps-tier-icon--elite">
                <Sparkles size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title" style={{ color: '#00F0FF' }}>
                  2.2 Exclusive Elite
                </h3>
                <p className="ps-tier-copy">
                  Anchor champion driving large-scale digital transformation and infrastructure development.
                </p>
              </div>
            </div>
            <span className="ps-tier-count" style={{ WebkitTextStroke: '1px rgba(0,240,255,0.45)' }}>
              01
            </span>
          </div>

          <EliteHeroShowcase sponsor={ELITE_SPONSOR} />
        </div>

        {/* 2.3 Gold Sponsors */}
        <div className="ps-tier" aria-label="2.3 Gold Sponsors">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon ps-tier-icon--gold">
                <Award size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title" style={{ color: '#F5C518' }}>
                  2.3 Gold Sponsors
                </h3>
                <p className="ps-tier-copy">
                  Key enterprise champions providing prime track support and summit acceleration.
                </p>
              </div>
            </div>
            <span className="ps-tier-count" style={{ WebkitTextStroke: '1px rgba(245,197,24,0.45)' }}>
              0{GOLD_SPONSORS.length}
            </span>
          </div>

          <div className="ps-gold-grid">
            {GOLD_SPONSORS.map((sponsor, i) => (
              <GoldSponsorCard key={sponsor.id} sponsor={sponsor} index={i} />
            ))}
          </div>
        </div>

        {/* 2.4 Silver Sponsors */}
        <div className="ps-tier ps-tier--silver" aria-label="2.4 Silver Sponsors">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon ps-tier-icon--silver">
                <Sparkles size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title" style={{ color: '#E2E8F0' }}>
                  2.4 Silver Sponsors
                </h3>
                <p className="ps-tier-copy">
                  Venture, advisory, and intelligence partners powering summit operations.
                </p>
              </div>
            </div>
            <span className="ps-tier-count" style={{ WebkitTextStroke: '1px rgba(226,232,240,0.35)' }}>
              0{SILVER_SPONSORS.length}
            </span>
          </div>

          <div className="ps-silver-grid">
            {SILVER_SPONSORS.map((sponsor) => (
              <SilverSponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>

        {/* 2.5 Bronze Sponsors */}
        <div className="ps-tier" aria-label="2.5 Bronze Sponsors">
          <div className="ps-tier-head">
            <div className="ps-tier-head-left">
              <span className="ps-tier-icon ps-tier-icon--bronze">
                <Award size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="ps-tier-title" style={{ color: '#E09A5A' }}>
                  2.5 Bronze Sponsors
                </h3>
                <p className="ps-tier-copy">
                  Official community, business center, and innovation alliance supporters.
                </p>
              </div>
            </div>
            <span className="ps-tier-count" style={{ WebkitTextStroke: '1px rgba(205,127,50,0.45)' }}>
              0{BRONZE_SPONSORS.length}
            </span>
          </div>

          <motion.div
            className="ps-bronze-ribbon"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {BRONZE_SPONSORS.map((sponsor) => (
              <BronzeSponsorTile key={sponsor.id} sponsor={sponsor} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;