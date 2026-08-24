import { useReveal } from '../hooks';
import './Mascots.css';
import { AppleLogo } from './Icons';

/* The five craft-theme mascots, in the app's own hand-drawn art. */
const family = [
  { img: 'purl.png',   name: 'Purl',   craft: 'Knitting & Crochet' },
  { img: 'spool.png',  name: 'Spool',  craft: 'Sewing & Textiles' },
  { img: 'hoopla.png', name: 'Hoopla', craft: 'Embroidery & Needlework' },
  { img: 'pinch.png',  name: 'Pinch',  craft: 'Clay & Ceramics' },
  { img: 'bijou.png',  name: 'Bijou',  craft: 'Jewelry & Beading' },
];

export default function Mascots() {
  useReveal();

  return (
    <section className="mascots-section" id="mascots">
      <div className="container mascots-grid">
        {/* Text column */}
        <div className="mascots-text reveal">
          <span className="pill-tag">Your Craft Corner</span>
          <h2 className="mascots-title">
            Pick your theme,<br />meet your mascot.
          </h2>
          <p className="mascots-sub">
            Choose the theme of your craft and a hand-drawn companion moves
            into your studio — cheering your progress and keeping the corner
            alive between projects.
          </p>

          <ul className="mascots-points">
            <li className="reveal reveal-delay-1">
              <span className="mascots-point-icon" aria-hidden="true">?</span>
              <div>
                <strong>A daily craft question</strong>
                <p>One small quiz a day — yarn trivia, clay facts, stitch lore. Your mascot celebrates every right answer.</p>
              </div>
            </li>
            <li className="reveal reveal-delay-2">
              <span className="mascots-point-icon" aria-hidden="true">✦</span>
              <div>
                <strong>Tips of the week</strong>
                <p>Real advice from fellow makers, refreshed weekly — and you can pass on what you've learned, too.</p>
              </div>
            </li>
            <li className="reveal reveal-delay-3">
              <span className="mascots-point-icon" aria-hidden="true">◎</span>
              <div>
                <strong>Five themes — or none</strong>
                <p>Every craft has its own corner and companion. Prefer it quiet? Skip the theme entirely.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Visual column: the real Theme tab, with the family below */}
        <div className="mascots-visual reveal reveal-delay-2">
          <div className="device device--ios mascots-device">
            <div className="device-screen">
              <video
                src="/videos/theme.mp4"
                poster="/videos/theme-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="The Theme tab in Craft MadeBy: the Yarnia corner, a daily craft question, and the mascot family"
              />
            </div>
            <span className="device-tag"><AppleLogo size={12} /> The real app</span>
          </div>
        </div>

        {/* The family, introduced by name */}
        <div className="mascots-family reveal reveal-delay-3">
          {family.map((m) => (
            <figure key={m.name} className="mascot-card">
              <img src={`/images/mascots/${m.img}`} alt={`${m.name}, the ${m.craft} mascot`} loading="lazy" />
              <figcaption>
                <strong>{m.name}</strong>
                <span>{m.craft}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
