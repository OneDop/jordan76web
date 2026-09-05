import React, { useState } from 'react';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSent(false), 5000);
  };

  const update = (field: keyof typeof EMPTY_FORM) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((current) => ({ ...current, [field]: event.target.value }));

  return (
    <div className="doc">
      <header className="doc-head">
        <h1 className="doc-title">Get in touch.</h1>

        <p className="doc-lead">
          Hackathon entries, corporate sponsorship, press, or congress attendance — send a message
          and the organizing team will come back within 24 to 48 hours.
        </p>
      </header>

      <div className="split">
        <section>
          <div className="sect-head">
            <h2 className="sect-title">Where to find us</h2>
          </div>

          <div className="rows">
            <div className="row row--pair">
              <div className="row-kicker">Email</div>
              <div>
                <a className="row-name" href="mailto:info@jordan2076.jo" style={{ textDecoration: 'none' }}>
                  info@jordan2076.jo
                </a>
                <p className="row-text">
                  The fastest route for anything about entries, judging, or sponsorship.
                </p>
              </div>
            </div>

            <div className="row row--pair">
              <div className="row-kicker">Organizing chapter</div>
              <div>
                <div className="row-name">IEEE Computer Society</div>
                <p className="row-text">University of Jordan student branch chapter.</p>
              </div>
            </div>

            <div className="row row--pair">
              <div className="row-kicker">Flagship venue</div>
              <div>
                <div className="row-name">University of Jordan Academy</div>
                <p className="row-text">Queen Rania Street, Amman, Jordan.</p>
                <p style={{ marginTop: '0.6rem' }}>
                  <a
                    className="textlink"
                    href="https://maps.google.com/?q=University+of+Jordan+Academy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="panel">
          <h2 className="panel-title">Send a message</h2>

          {sent && (
            <p className="notice" role="status">
              Message sent. The organizing team will reply to the address you gave.
            </p>
          )}

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Full name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={update('subject')}
                placeholder="Hackathon entry, sponsorship, press"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="What do you need?"
                required
              />
            </div>

            <button type="submit" className="btn-cyber-primary" style={{ marginTop: '0.4rem' }}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
