import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { FAQ_DATA } from '../data/faqs';

const CATEGORIES = ['All', 'General', 'Hackathon', 'Bootcamp', 'Congress'] as const;

export const FAQPage: React.FC = () => {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_DATA[0]?.question ?? null);
  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();

  const results = FAQ_DATA.filter((item) => {
    const inCategory = category === 'All' || item.category === category;
    const inSearch =
      query === '' ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);
    return inCategory && inSearch;
  });

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">Questions, answered.</h1>

        <p className="doc-lead">
          Team eligibility, hackathon tracks, bootcamp requirements, and how to get into congress
          day. If something is missing here, the organizing team will answer directly.
        </p>

        <div style={{ marginTop: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the questions"
              aria-label="Search the questions"
            />
          </div>

          <div className="tabs">
            {CATEGORIES.map((option) => (
              <button
                key={option}
                type="button"
                className="tab"
                aria-pressed={category === option}
                onClick={() => setCategory(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="sect" style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="sect-head">
          <h2 className="sect-title">{category === 'All' ? 'All questions' : category}</h2>
          <span className="sect-note">
            {results.length} {results.length === 1 ? 'question' : 'questions'}
          </span>
        </div>

        {results.length === 0 ? (
          <p className="empty">
            Nothing matches that search. Try a different word, or{' '}
            <Link to="/contact" className="textlink">
              ask the organizing team
            </Link>
            .
          </p>
        ) : (
          <div className="qa-list">
            {results.map((item) => {
              const isOpen = openQuestion === item.question;
              return (
                <div className="qa" key={item.question} data-open={isOpen}>
                  <button
                    type="button"
                    className="qa-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                  >
                    {item.question}
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>

                  <div className="qa-panel">
                    <div>
                      <p className="qa-answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="band">
        <div>
          <h2 className="band-title">Still stuck?</h2>
          <p className="band-text">
            The organizing team answers within 24 to 48 hours, including sponsorship and press.
          </p>
        </div>
        <Link to="/contact" className="btn-cyber-outline">
          Contact the team
        </Link>
      </div>
    </div>
  );
};
