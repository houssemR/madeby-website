import { useReveal } from '../hooks';
import './Community.css';

const collabImg = '/images/craft_collab.png';
const groupsImg = '/images/craft_groups.png';
const legacyImg = '/images/craft_legacy.png';
const sharingImg = '/images/craft_sharing.png';

const privacyScopes = [
  { icon: '🌍', label: 'Public', desc: 'Anyone can discover your work', color: '#EDFFEC', accent: '#4D5235' },
  { icon: '👥', label: 'Connections', desc: 'Only your maker network', color: '#FFF3CD', accent: '#7D6005' },
  { icon: '🏠', label: 'Groups', desc: 'Specific maker circles', color: '#E8EFF5', accent: '#2C4A6E' },
  { icon: '🔒', label: 'Private', desc: 'Your personal log only', color: '#F5E9E9', accent: '#8B3636' },
];

const honors = [
  { icon: '🔨', label: 'Maker', desc: 'Starting out' },
  { icon: '✨', label: 'Artisan', desc: 'Growing craft' },
  { icon: '🏆', label: 'Master Artisan', desc: 'Recognized excellence', highlight: true },
  { icon: '🌟', label: 'Inspiring Leader', desc: 'Community icon' },
];

export default function Community() {
  useReveal();

  return (
    <section className="comm-section" id="community">
      <div className="container">

        {/* Header */}
        <div className="comm-header reveal">
          <span className="section-eyebrow">✦ Community</span>
          <h2 className="comm-main-title">Built for real makers,<br /><span className="gradient-text">not just collectors.</span></h2>
        </div>

        {/* 1 — Collaborate */}
        <div className="comm-block">
          <div className="comm-img-col reveal reveal-delay-1">
            <div className="comm-img-wrap">
              <img src={collabImg} alt="Two artisans collaborating in workshop" />
              <div className="comm-img-badge comm-img-badge--tl">
                <span>🤝</span> Collaboration
              </div>
            </div>
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Collaboration</span>
            <h3 className="comm-block-title">Create together, not just alongside.</h3>
            <p className="comm-block-body">Invite fellow makers to co-author any project. Collaborative pieces appear in both portfolios, and every step added notifies the whole team.</p>
            <div className="comm-mini-cards">
              <div className="mini-card">
                <span className="mini-card-icon">🤝</span>
                <div>
                  <strong>Co-Author Projects</strong>
                  <p>Share ownership of the final piece across both portfolios simultaneously.</p>
                </div>
              </div>
              <div className="mini-card">
                <span className="mini-card-icon">🔔</span>
                <div>
                  <strong>Live Activity Updates</strong>
                  <p>Collaborators get instant notifications on new steps and photos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 — Privacy */}
        <div className="comm-block comm-block--reverse">
          <div className="comm-img-col reveal reveal-delay-1">
            <div className="comm-img-wrap">
              <img src={groupsImg} alt="Maker group in a bright studio" />
            </div>
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Groups & Privacy</span>
            <h3 className="comm-block-title">Your audience, your rules.</h3>
            <p className="comm-block-body">Create and join maker groups — from local craft circles to global communities. Every project has granular sharing controls.</p>
            <div className="privacy-grid">
              {privacyScopes.map((s, i) => (
                <div key={i} className="privacy-card" style={{ '--card-bg': s.color, '--card-accent': s.accent }}>
                  <span className="privacy-icon">{s.icon}</span>
                  <strong>{s.label}</strong>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 — Sharing */}
        <div className="comm-block">
          <div className="comm-img-col reveal reveal-delay-1">
            <div className="comm-img-wrap">
              <img src={sharingImg} alt="Friends sharing a handmade wallet" />
              <div className="comm-img-badge comm-img-badge--br">
                <span>💌</span> Genuine Moments
              </div>
            </div>
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Gifts & Giveaways</span>
            <h3 className="comm-block-title">Give your craft a new home.</h3>
            <p className="comm-block-body">Host a giveaway for any project. Connections send a personal note explaining why they'd love it. You choose the recipient.</p>
            <div className="comm-mini-cards">
              <div className="mini-card">
                <span className="mini-card-icon">🎁</span>
                <div>
                  <strong>Request & Review</strong>
                  <p>Receive heartfelt requests and personally select the most deserving recipient.</p>
                </div>
              </div>
              <div className="mini-card">
                <span className="mini-card-icon">💌</span>
                <div>
                  <strong>Occasion-Based Gifts</strong>
                  <p>Tag giveaways with an occasion — birthday, anniversary, just because.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 — Legacy Room */}
        <div className="comm-block comm-block--reverse">
          <div className="comm-img-col reveal reveal-delay-1">
            <div className="comm-img-wrap">
              <img src={legacyImg} alt="Craftsman portfolio flat-lay" />
            </div>
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Legacy Room</span>
            <h3 className="comm-block-title">Your lifetime portfolio of making.</h3>
            <p className="comm-block-body">Track every project you've ever made — total hours honed, masterpieces completed, and reactions earned. Earn prestigious ranks as you grow.</p>
            <div className="honor-ladder">
              {honors.map((h, i) => (
                <div key={i} className={`honor-rung ${h.highlight ? 'honor-rung--highlight' : ''}`}>
                  <span>{h.icon}</span>
                  <div>
                    <strong>{h.label}</strong>
                    <p>{h.desc}</p>
                  </div>
                  {h.highlight && <span className="honor-crown">★</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
