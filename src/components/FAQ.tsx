import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-container" style={{ maxWidth: '850px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="cyber-badge" style={{ marginBottom: '0.8rem' }}>06 / FREQUENTLY ASKED</div>
        <h2 className="section-title">SYSTEM INQUIRIES & FAQ</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
          Got questions about attending Jordan 2076 in-person or virtually? Find instant answers below.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="cyber-card"
              style={{
                borderColor: isOpen ? '#7EF3E8' : 'rgba(126, 243, 232, 0.2)',
                boxShadow: isOpen ? '0 0 20px rgba(126, 243, 232, 0.15)' : 'none',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: '100%',
                  padding: '1.4rem 1.8rem',
                  background: isOpen ? 'rgba(0, 27, 58, 0.7)' : 'transparent',
                  border: 'none',
                  color: '#F5F7F8',
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <HelpCircle size={18} color="#7EF3E8" />
                  <span>{item.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  color="#7EF3E8"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 1.8rem 1.6rem 1.8rem',
                    color: '#B7B9BD',
                    fontSize: '0.98rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(126, 243, 232, 0.15)',
                    paddingTop: '1rem',
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
