import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const STRATEGIC = [
  {
    kicker: 'Organizing partner',
    name: 'IEEE Computer Society — University of Jordan chapter',
    text: 'The student branch chapter behind Jordan 2076, running technical programmes and computing conferences for the country’s next engineering cohort.',
    href: 'https://www.ieee.org',
    site: 'ieee.org',
  },
  {
    kicker: 'Institutional host',
    name: 'University of Jordan',
    text: 'Host of congress day, and a long-standing base for engineering and computing research in the kingdom.',
    href: 'https://ju.edu.jo',
    site: 'ju.edu.jo',
  },
  {
    kicker: 'Government and national strategy',
    name: 'Ministry of Digital Economy and Entrepreneurship',
    text: 'Steward of the national digital transformation strategy, startup enablement policy, and Jordan’s regional technology position.',
    href: 'https://modee.gov.jo',
    site: 'modee.gov.jo',
  },
];

const PROGRAMME = [
  {
    kicker: 'Aqaba track partner',
    name: 'Petra Ride',
    text: 'Powers the Aqaba 2076 transportation challenge with the problem statements, the mentorship, and the mobility prize behind it.',
  },
  {
    kicker: 'Keynote and platform partner',
    name: 'Replit',
    text: 'Provides the collaborative build tooling and the keynote on where software development goes in the age of AI.',
  },
];

const JUDGING = [
  {
    kicker: 'Incubation and acceleration',
    name: 'INJAZ',
    text: 'Youth entrepreneurship, acceleration, and incubation places for winning teams.',
  },
  {
    kicker: 'Innovation centre',
    name: 'UJIEC',
    text: 'The University of Jordan Innovation and Entrepreneurship Centre, hosting post-hackathon incubation.',
  },
  {
    kicker: 'Independent judging',
    name: 'EY',
    text: 'Independent assessment of financial logic, viability, and governance in the finals.',
  },
];

const ECOSYSTEM = [
  { kicker: 'Digital infrastructure', name: 'Aqaba Digital Hub' },
  { kicker: 'Interactive media and gaming', name: 'Maysalward' },
  { kicker: 'Education technology', name: 'Abwaab' },
  { kicker: 'AI systems architecture', name: 'Thakaa' },
];

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

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Strategic and institutional</h2>
        </div>

        <div className="rows">
          {STRATEGIC.map((partner) => (
            <div className="row" key={partner.name}>
              <div className="row-kicker">{partner.kicker}</div>
              <div>
                <div className="row-name">{partner.name}</div>
                <p className="row-text">{partner.text}</p>
              </div>
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
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Track and platform</h2>
        </div>

        <div className="rows">
          {PROGRAMME.map((partner) => (
            <div className="row row--pair" key={partner.name}>
              <div className="row-kicker">{partner.kicker}</div>
              <div>
                <div className="row-name">{partner.name}</div>
                <p className="row-text">{partner.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Judging and incubation</h2>
        </div>

        <div className="rows">
          {JUDGING.map((partner) => (
            <div className="row row--pair" key={partner.name}>
              <div className="row-kicker">{partner.kicker}</div>
              <div>
                <div className="row-name">{partner.name}</div>
                <p className="row-text">{partner.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sect">
        <div className="sect-head">
          <h2 className="sect-title">Ecosystem contributors</h2>
        </div>

        <div className="rows">
          {ECOSYSTEM.map((partner) => (
            <div className="row row--pair" key={partner.name}>
              <div className="row-kicker">{partner.kicker}</div>
              <div className="row-name">{partner.name}</div>
            </div>
          ))}
        </div>
      </section>

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
