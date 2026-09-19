import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  ExternalLink,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PARTNERS, partnersByTier, type Partner, type PartnerTier } from '../data/partners';
import { POTENTIAL_SPONSORS, type PotentialSponsor } from '../data/sponsors';
import { PartnerLogo } from '../components/PartnersGrid';
import DriftWall from '../components/DriftWall';
import './PartnersSponsors.css';

/* ============================================================
   Motion presets — one source of truth for the whole page.
   `once: true` keeps scroll-in cheap; stagger keeps grids liquid.
   ============================================================ */

import type { Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* ============================================================
   Spotlight wrapper — React-Bits style glow that follows cursor.
   Pure CSS vars (--mx / --my), zero re-renders on mousemove.
   ============================================================ */

interface SpotlightProps {
  as?: 'article' | 'div';
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
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

  if (as === 'div') {
    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        onMouseMove={onMove}
        variants={item}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: EASE }}
        className={`ps-spot ${className}`}
        {...rest}
      >
        <span className="ps-spot-glow" aria-hidden="true" />
        <span className="ps-spot-sheen" aria-hidden="true" />
        {children}
      </motion.div>
    );
  }

  return (
    <motion.article
      ref={ref as React.Ref<HTMLElement>}
      onMouseMove={onMove}
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`ps-spot ${className}`}
      {...rest}
    >
      <span className="ps-spot-glow" aria-hidden="true" />
      <span className="ps-spot-sheen" aria-hidden="true" />
      {children}
    </motion.article>
  );
};

/* ============================================================
   PART 01 — Partner spotlight glass card
   ============================================================ */

const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
  <Spotlight className="ps-card" aria-label={`${partner.name} — ${partner.role}`}>
    <div className="ps-card-top">
      <motion.div
        className="ps-logo-well"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <PartnerLogo partner={partner} />
      </motion.div>
      <span className="ps-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="ps-card-body">
      <span className="ps-role">
        <span className="ps-role-dot" aria-hidden="true" />
        {partner.role}
      </span>
      <h4 className="ps-card-name">{partner.name}</h4>
      {partner.blurb && <p className="ps-card-blurb">{partner.blurb}</p>}
    </div>

    <div className="ps-card-foot">
      {partner.href ? (
        <a
          className="ps-visit"
          href={partner.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${partner.name} website`}
        >
          <span>{partner.site ?? 'Visit website'}</span>
          <span className="ps-visit-icon">
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </a>
      ) : (
        <span className="ps-visit ps-visit--static">
          <span>{partner.shortName}</span>
        </span>
      )}
      {partner.href && <ExternalLink size={12} className="ps-ext" aria-hidden="true" />}
    </div>
  </Spotlight>
);

/* ============================================================
   PART 02 — Sponsor bento tile
   ============================================================ */

const SponsorTile: React.FC<{ sponsor: PotentialSponsor }> = ({ sponsor }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="ps-spot ps-sponsor"
    >
      <span className="ps-spot-glow" aria-hidden="true" />
      <Building2 size={15} className="ps-sponsor-icon" aria-hidden="true" />
      <div className="ps-sponsor-name">{sponsor.name}</div>
      {sponsor.note && <div className="ps-sponsor-note">{sponsor.note}</div>}
    </motion.div>
  );
};

/* ============================================================
   Section metadata
   ============================================================ */

interface PartnerSection {
  tier: PartnerTier;
  title: string;
  copy: string;
  icon: React.ReactNode;
}

const PARTNER_SECTIONS: PartnerSection[] = [
  {
    tier: 'strategic',
    title: 'Strategic & Institutional',
    copy: 'The institutions that host the congress and anchor national strategy.',
    icon: <ShieldCheck size={15} aria-hidden="true" />,
  },
  {
    tier: 'programme',
    title: 'Track & Platform',
    copy: 'Problem owners and build tooling — the tracks run on their rails.',
    icon: <Zap size={15} aria-hidden="true" />,
  },
  {
    tier: 'judging',
    title: 'Judging & Incubation',
    copy: 'Independent assessment on finals day, and a runway after it.',
    icon: <Handshake size={15} aria-hidden="true" />,
  },
  {
    tier: 'ecosystem',
    title: 'Ecosystem Contributors',
    copy: 'Builders across media, education and AI who amplify the program.',
    icon: <Layers size={15} aria-hidden="true" />,
  },
];

type TabId = 'partners' | 'sponsors';

/* ============================================================
   Page
   ============================================================ */

export const Partners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('partners');

  const driftItems = useMemo(
    () => PARTNERS.map((p) => ({ image: p.logo, title: `${p.name} — ${p.role}`, href: p.href })),
    []
  );

  const scrollTo = (id: TabId) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const tabs: { id: TabId; label: string; meta: string }[] = [
    { id: 'partners', label: 'Partners', meta: `${PARTNERS.length}` },
    { id: 'sponsors', label: 'Sponsors', meta: `${POTENTIAL_SPONSORS.length}` },
  ];

  return (
    <div className="doc ps-page">
      {/* ================= HERO ================= */}
      <motion.header
        className="ps-hero"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="ps-hero-badge">
          <Sparkles size={13} aria-hidden="true" />
          <span>Jordan 2076 · Partners &amp; Sponsors network</span>
          <span className="ps-hero-badge-pulse" aria-hidden="true" />
        </div>

        <h1 className="doc-title doc-title--wide ps-hero-title">
          The organizations <br />
          <span className="ps-gradient-text">behind Jordan&nbsp;2076.</span>
        </h1>

        <p className="doc-lead ps-hero-lead">
          Jordan 2076 is built with academic institutions, technology companies, and ecosystem
          builders — our <strong>partners</strong> — alongside the companies that fund the
          stage, the booths, and the broadcast — our <strong>sponsors</strong>.
        </p>

        {/* Animated segmented jump bar — layoutId sliding pill */}
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

      {/* ================= DRIFTWALL HERO =================
          DriftWall is untouched — only its frame, masks and badge are new. */}
      <motion.section
        className="ps-drift-wrap"
        initial={{ opacity: 0, y: 36, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        aria-label="Partner logo wall"
      >
        <span className="ps-noise" aria-hidden="true" />
        <div className="ps-drift-grid-bg" aria-hidden="true" />

        <DriftWall
          items={driftItems}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          overlayColor="#060010"
          dim={0.7}
          fade={0.6}
        />

        {/* radial vignettes melt the wall into the page */}
        <span className="ps-drift-fade ps-drift-fade--top" aria-hidden="true" />
        <span className="ps-drift-fade ps-drift-fade--bottom" aria-hidden="true" />
        <span className="ps-drift-ring" aria-hidden="true" />

        

        <div className="ps-drift-hint" aria-hidden="true">
          <span>Hover a tile to lift it</span>
        </div>
      </motion.section>

      {/* ================= PART 01 — PARTNERS ================= */}
      <div className="ps-part-label" id="partners">
        <span className="ps-part-num">Part 01</span>
        <span className="ps-part-rule" aria-hidden="true" />
        <span className="ps-part-tag">Institutions · platforms · judges · ecosystem</span>
      </div>

      <section className="sect ps-sect" aria-labelledby="partners-heading">
        <motion.div
          className="sect-head ps-sect-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="sect-title" id="partners-heading">
            Partners
          </h2>
          <span className="sect-note">Build with us — not cash for visibility</span>
        </motion.div>
        <motion.p
          className="sect-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Partners contribute venues, problem statements, mentorship, judging, and incubation —
          not cash for visibility. They are the organizations building the program with us.
        </motion.p>

        {PARTNER_SECTIONS.map((section) => {
          const list = partnersByTier(section.tier);
          if (!list.length) return null;
          return (
            <section
              key={section.tier}
              className="ps-tier"
              aria-label={section.title}
            >
              <motion.div
                className="ps-tier-head"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <span className="ps-tier-icon">{section.icon}</span>
                <div>
                  <h3 className="ps-tier-title">{section.title}</h3>
                  <p className="ps-tier-copy">{section.copy}</p>
                </div>
                <span className="ps-tier-count">
                  {String(list.length).padStart(2, '0')}
                </span>
              </motion.div>

              <motion.div
                className="ps-partner-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
              >
                {list.map((partner, i) => (
                  <PartnerCard key={partner.id} partner={partner} index={i} />
                ))}
              </motion.div>
            </section>
          );
        })}
      </section>

      {/* ================= PART 02 — SPONSORS ================= */}
      <div className="ps-part-label" id="sponsors">
        <span className="ps-part-num">Part 02</span>
        <span className="ps-part-rule" aria-hidden="true" />
        <span className="ps-part-tag">{POTENTIAL_SPONSORS.length} organizations approached</span>
      </div>

      <section className="sect ps-sect" aria-labelledby="potential-sponsors-heading">
        <motion.div
          className="sect-head ps-sect-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="sect-title" id="potential-sponsors-heading">
            Sponsors
          </h2>
          <span className="sect-note">The outreach board</span>
        </motion.div>
        <motion.p
          className="sect-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          The organizations on the outreach board — from national funds and ministries to
          telcos, banks, and startup platforms. Join them as a confirmed sponsor.
        </motion.p>

        <motion.div
          className="ps-bento"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {POTENTIAL_SPONSORS.map((sponsor) => (
            <SponsorTile key={sponsor.name} sponsor={sponsor} />
          ))}

          {/* CTA card — closes the bento grid */}
          <motion.div variants={item} className="ps-cta-wrap">
            <AnimatePresence>
              <div className="ps-cta">
                <span className="ps-cta-glow" aria-hidden="true" />
                <span className="ps-noise" aria-hidden="true" />
                <div className="ps-cta-badge">
                  <Sparkles size={13} aria-hidden="true" />
                  <span>Open slot · Congress + Hackathon</span>
                </div>
                <h3 className="ps-cta-title">
                  Become a sponsor. <span className="ps-gradient-text">Join the board.</span>
                </h3>
                <p className="ps-cta-copy">
                  Fund the stage, the booths, and the broadcast — and put your mark on the
                  kingdom&rsquo;s 2076 story. Talk to the outreach team about tiers.
                </p>
                <div className="ps-cta-actions">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/contact" className="ps-cta-btn">
                      <span>Become a sponsor</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </motion.div>
                  <span className="ps-cta-note">Replies within 48h</span>
                </div>
              </div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= Closing band ================= */}
      <motion.div
        className="band ps-band"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <div>
          <div className="band-title">Building with us, not just funding us?</div>
          <p className="band-text">
            Venues, problem statements, mentorship, judging, incubation — if that&rsquo;s
            your lane, you belong in Part 01.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link to="/contact" className="btn-cyber-outline">
            Talk partnerships
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partners;