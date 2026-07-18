import { useEffect, useState } from 'react';
import { useReveal } from '../hooks';
import './Contact.css';

const TOPICS = [
  'Report a bug / technical issue',
  'Account & sign-in',
  'Payments & Premium',
  'Handmade certification',
  'Report content or a user',
  'Feature request',
  'Feedback about the app',
  'Review of the app',
  'Other',
];

// The app links here as: https://craftmadeby.com/?email=<email>&name=<account>#contact
// so the sender's email and Craft MadeBy account name arrive pre-filled.
export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email') || '';
    const name = params.get('name') || '';
    if (email || name) {
      setForm((f) => ({ ...f, email, name }));
    }
    // The #contact element doesn't exist yet when the browser tries to honor
    // the URL fragment (React renders after load), so deep links from the app
    // need a manual scroll.
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      // FormSubmit relays the submission to support@craftmadeby.com — no
      // backend needed on this static site.
      const res = await fetch('https://formsubmit.co/ajax/support@craftmadeby.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[Craft MadeBy] ${form.topic || 'Contact'} — ${form.name || 'unknown account'}`,
          'Account name': form.name,
          'Email': form.email,
          'Topic': form.topic,
          'Message': form.message,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const mailtoHref =
    'mailto:support@craftmadeby.com' +
    `?subject=${encodeURIComponent(`[Craft MadeBy] ${form.topic || 'Contact'}`)}` +
    `&body=${encodeURIComponent(
      `Account name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`,
    )}`;

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner reveal">
          <div className="contact-head">
            <span className="contact-eyebrow">Support</span>
            <h2 className="contact-title">Contact us</h2>
            <p className="contact-sub">
              A question, a problem, feedback or a review — we read everything.
              Messages go straight to our support inbox.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="contact-success" role="status">
              <div className="contact-success-icon">✓</div>
              <h3>Message sent</h3>
              <p>Thanks for reaching out — we’ll get back to you at {form.email || 'your email'}.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="contact-row">
                <label className="contact-field">
                  <span>Craft MadeBy account name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your crafter name in the app"
                    autoComplete="username"
                  />
                </label>
                <label className="contact-field">
                  <span>Your email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Topic *</span>
                <select required value={form.topic} onChange={set('topic')}>
                  <option value="" disabled>
                    Choose a topic…
                  </option>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-field">
                <span>Message *</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us what’s on your mind — the more detail, the faster we can help."
                />
              </label>

              {status === 'error' && (
                <p className="contact-error">
                  Sending failed — please try again, or email us directly at{' '}
                  <a href={mailtoHref}>support@craftmadeby.com</a>.
                </p>
              )}

              <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
