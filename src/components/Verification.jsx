import { useReveal } from '../hooks';
import './Verification.css';

const stampImg = '/images/completion_stamp.png';

const criteria = [
  { icon: '🏁', text: 'Completed project' },
  { icon: '📚', text: 'At least 5 documented steps' },
  { icon: '📸', text: 'At least one live camera photo' },
];

const process = [
  {
    icon: '🧭',
    title: 'Reviewed by real experts of your craft',
    body: 'Three Inspiring Leaders are assigned — each certified handmade in your project\'s own category. Knitting is judged by knitters.',
  },
  {
    icon: '⚖️',
    title: 'The majority decides',
    body: 'Reviewers walk through every step, photo, time log and material before voting. Two of three approvals earn the stamp.',
  },
  {
    icon: '⏳',
    title: 'Never stuck in a queue',
    body: 'Every reviewer has 7 days to decide. Declined? You can appeal once for a final review by the Craft MadeBy team.',
  },
];

export default function Verification() {
  useReveal();
  return (
    <section className="verif-section" id="verification">
      <div className="container">
        <div className="verif-inner reveal">
          <div className="verif-text">
            <span className="section-eyebrow">✦ Authenticity</span>
            <h2 className="verif-title">The Handmade Stamp.</h2>
            <p className="verif-body">
              Trust is at the core of our community. When you see the Craft MadeBy Handmade Stamp
              on a project, a panel of proven crafters has verified that it's a truly handcrafted
              piece — and the stamp carries the crafter's own name, like a wax seal.
            </p>

            <div className="verif-criteria">
              <span className="verif-criteria-label">To request it, your project needs</span>
              <div className="crit-chips">
                {criteria.map((c, i) => (
                  <span key={i} className="crit-chip">
                    <span className="crit-chip-icon">{c.icon}</span>
                    {c.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="verif-badges">
              {process.map((p, i) => (
                <div key={i} className="verif-badge-item">
                  <span>{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="verif-visuals reveal reveal-delay-3">
            <div className="verif-stamp-glow">
              <img src={stampImg} alt="Handmade Stamp" className="verif-stamp-img" />
            </div>
            <p className="verif-stamp-caption">Sealed with the crafter's name</p>

            <div className="expert-panel-card">
              <div className="expert-panel-header">
                <span className="expert-icon">🌟</span>
                <h4>Who reviews?</h4>
                <span className="expert-badge">Expert Panel</span>
              </div>
              <p className="expert-desc">
                <strong>Inspiring Leaders</strong> — crafters who climbed the whole honor ladder —
                hold seats on the Expert Panel and keep the stamp honest, one review at a time.
              </p>
              <div className="expert-footer">
                <a href="#expertpanel" className="expert-link">Meet the Expert Panel ↓</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
