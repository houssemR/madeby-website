import { useReveal } from '../hooks';
import './Community.css';
import {
  IconGlobe, IconPeople, IconHome, IconLock,
  IconRings, IconVote, IconBow, IconLetterHeart,
  IconToolbox, IconSparkle, IconTrophy, IconStar, IconShield,
  IconCheckCircle, AppleLogo,
} from './Icons';

const privacyScopes = [
  { icon: <IconGlobe size={22} />, label: 'Public', desc: 'Anyone can discover your work', color: '#EDFFEC', accent: '#4D5235' },
  { icon: <IconPeople size={22} />, label: 'Connections', desc: 'Only your crafter network', color: '#FFF3CD', accent: '#7D6005' },
  { icon: <IconHome size={22} />, label: 'Groups', desc: 'Specific crafter circles', color: '#E8EFF5', accent: '#2C4A6E' },
  { icon: <IconLock size={22} />, label: 'Private', desc: 'Your personal log only', color: '#F5E9E9', accent: '#8B3636' },
];

const honors = [
  { icon: <IconToolbox size={20} />, label: 'Crafter', desc: 'Starting out' },
  { icon: <IconSparkle size={20} />, label: 'Artisan', desc: 'Growing craft' },
  { icon: <IconTrophy size={20} />, label: 'Master Artisan', desc: 'Recognized excellence' },
  { icon: <IconStar size={20} />, label: 'Inspiring Leader', desc: 'Expert Panel seat', highlight: true },
];

/* ---- Hand-built app vignettes (replacing stock photography) ---- */

/* A joint project card: equal hands, no boss. */
function JointVignette() {
  return (
    <div className="vig" aria-hidden="true">
      <div className="vig-card">
        <header className="vig-head">
          <span className="vig-chip">Joint project</span>
          <strong>Wildflower Quilt</strong>
        </header>
        <div className="vig-avatars">
          {[['E', '#617964'], ['M', '#C9A86A'], ['J', '#3A4228']].map(([ch, c]) => (
            <span key={ch} className="vig-avatar" style={{ background: c }}>{ch}</span>
          ))}
          <span className="vig-avatars-note">3 crafters · equal hands</span>
        </div>
        <ul className="vig-rows">
          <li><IconCheckCircle size={16} className="vig-ok" /> Elena marked it done</li>
          <li><IconCheckCircle size={16} className="vig-ok" /> Maya marked it done</li>
          <li><span className="vig-dot-pulse" /> Jonas is still stitching…</li>
        </ul>
        <footer className="vig-foot">Completes only when every crafter agrees</footer>
      </div>
    </div>
  );
}

/* A crafter group card. */
function GroupVignette() {
  return (
    <div className="vig" aria-hidden="true">
      <div className="vig-card">
        <header className="vig-head">
          <span className="vig-chip">Group</span>
          <strong>Nordic Knitters</strong>
        </header>
        <div className="vig-avatars">
          {[['A', '#8B6F47'], ['S', '#617964'], ['K', '#2C4A6E'], ['+', '#B4CDB5']].map(([ch, c]) => (
            <span key={ch} className="vig-avatar" style={{ background: c }}>{ch}</span>
          ))}
          <span className="vig-avatars-note">128 makers</span>
        </div>
        <ul className="vig-rows">
          <li><IconSparkle size={16} /> Weekly show &amp; tell — 14 new pieces</li>
          <li><IconLock size={16} /> Projects shared to this circle only</li>
        </ul>
        <button className="vig-btn" type="button" tabIndex={-1}>Request to join</button>
      </div>
    </div>
  );
}

/* A wrapped gift with its request note. */
function GiftVignette() {
  return (
    <div className="vig" aria-hidden="true">
      <div className="vig-gift">
        <div className="vig-parcel">
          <span className="vig-ribbon-v" />
          <span className="vig-ribbon-h" />
          <IconBow size={34} className="vig-bow" />
        </div>
        <div className="vig-note">
          <IconLetterHeart size={16} />
          <p>“This would live on my reading chair, next to Grandma's lamp.” — Sofia</p>
        </div>
        <button className="vig-btn vig-btn--gold" type="button" tabIndex={-1}>Choose who unwraps it</button>
      </div>
    </div>
  );
}

export default function Community() {
  useReveal();

  return (
    <section className="comm-section" id="community">
      <div className="container">

        {/* Header */}
        <div className="comm-header reveal">
          <span className="section-eyebrow">✦ Community</span>
          <h2 className="comm-main-title">Built for real crafters,<br /><span className="gradient-text">not just collectors.</span></h2>
        </div>

        {/* 1 — Joint Projects */}
        <div className="comm-block">
          <div className="comm-img-col reveal reveal-delay-1">
            <JointVignette />
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Joint Projects</span>
            <h3 className="comm-block-title">One project, many hands.</h3>
            <p className="comm-block-body">Start a joint project and invite fellow crafters. There's no boss — every crafter who joins gets equal control, and the piece lives in everyone's legacy.</p>
            <div className="comm-mini-cards">
              <div className="mini-card">
                <span className="mini-card-icon"><IconRings size={22} /></span>
                <div>
                  <strong>Equal Ownership</strong>
                  <p>Every joined crafter can add steps, photos and time — no big avatar on top, just the Crafters roster.</p>
                </div>
              </div>
              <div className="mini-card">
                <span className="mini-card-icon"><IconVote size={22} /></span>
                <div>
                  <strong>Done Means Everyone</strong>
                  <p>The project only completes when every crafter marks it done — and big decisions are voted, together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 — Privacy */}
        <div className="comm-block comm-block--reverse">
          <div className="comm-img-col reveal reveal-delay-1">
            <GroupVignette />
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Groups & Privacy</span>
            <h3 className="comm-block-title">Your audience, your rules.</h3>
            <p className="comm-block-body">Create and join crafter groups — from local craft circles to global communities. Every project has granular sharing controls.</p>
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
            <GiftVignette />
          </div>
          <div className="comm-text-col reveal reveal-delay-2">
            <span className="pill-tag">Gifts & Giveaways</span>
            <h3 className="comm-block-title">Give your craft a new home.</h3>
            <p className="comm-block-body">Host a giveaway for any project. Connections send a personal note explaining why they'd love it. You choose the recipient.</p>
            <div className="comm-mini-cards">
              <div className="mini-card">
                <span className="mini-card-icon"><IconBow size={22} /></span>
                <div>
                  <strong>Wrap It Your Way</strong>
                  <p>Pick the wrapping paper, bow, ribbon and confetti — the gift appears wrapped everywhere it's shown.</p>
                </div>
              </div>
              <div className="mini-card">
                <span className="mini-card-icon"><IconLetterHeart size={22} /></span>
                <div>
                  <strong>Requests or Direct Gifts</strong>
                  <p>Review heartfelt requests and choose the recipient — or skip the queue and gift it directly to someone special.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 — Legacy Room */}
        <div className="comm-block comm-block--reverse">
          <div className="comm-img-col reveal reveal-delay-1">
            <div className="comm-device-stage">
              <div className="device device--ios comm-device">
                <div className="device-screen">
                  <video
                    src="/videos/legacy.mp4"
                    poster="/videos/legacy-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Browsing a maker's portfolio and crafting statistics in the app"
                  />
                </div>
                <span className="device-tag"><AppleLogo size={12} /> The real app</span>
              </div>
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
            <div className="verified-card">
              <span className="verified-badge-ring"><IconShield size={24} /></span>
              <div>
                <strong>Get Verified — show you're real</strong>
                <p>Pass a quick on-device face & liveness check and wear the verified badge. Reviewers and gift-givers see a human, not a bot.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
