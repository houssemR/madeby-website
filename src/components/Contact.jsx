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

// Long enough for a detailed bug report, short enough to keep support emails
// readable (matches the app's own 1500-char story limit).
const MESSAGE_MAX = 1500;

// Site-wide daily submission cap, enforced server-side by the
// `contact_form_ticket` RPC in Supabase (100/day). The anon key is public by
// design — the same key ships inside the app.
const SUPA_URL = 'https://yudqqdnpyguyekqcjvhr.supabase.co';
const SUPA_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZHFxZG5weWd1eWVrcWNqdmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyODc3NzQsImV4cCI6MjA5Njg2Mzc3NH0.wUZORYqvm85-A9pnXUNc2DHluaPzhbLli8E6zp-UkF8';

// Returns true when today's quota still has room. p_check_only avoids
// consuming a ticket for the on-load availability check. Fails OPEN: if the
// check itself errors (RPC missing, network), the form stays usable.
async function quotaTicket(checkOnly) {
  try {
    const res = await fetch(`${SUPA_URL}/rest/v1/rpc/contact_form_ticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPA_ANON,
        Authorization: `Bearer ${SUPA_ANON}`,
      },
      body: JSON.stringify({ p_check_only: checkOnly }),
    });
    if (!res.ok) return true;
    return (await res.json()) !== false;
  } catch {
    return true;
  }
}

// The app links here as: https://craftmadeby.com/?email=<email>&name=<account>#contact
// so the sender's email and Craft MadeBy account name arrive pre-filled.
export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | limited

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
    // If today's site-wide quota is already exhausted, show the
    // "come back tomorrow" panel instead of the form.
    quotaTicket(true).then((ok) => {
      if (!ok) setStatus('limited');
    });
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    // Consume a ticket from today's 100-message quota first.
    if (!(await quotaTicket(false))) {
      setStatus('limited');
      return;
    }
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

          {status === 'limited' ? (
            <div className="contact-success" role="status">
              <div className="contact-success-icon contact-limited-icon">🌙</div>
              <h3>We’ve reached today’s message limit</h3>
              <p>
                Our inbox takes up to 100 messages a day and today’s are all used up.
                Come back tomorrow — the form will be open for you again.
              </p>
            </div>
          ) : status === 'sent' ? (
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
                  maxLength={MESSAGE_MAX}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us what’s on your mind — the more detail, the faster we can help."
                />
                <span
                  className={`contact-counter ${form.message.length >= MESSAGE_MAX ? 'at-limit' : ''}`}
                >
                  {form.message.length} / {MESSAGE_MAX}
                </span>
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
