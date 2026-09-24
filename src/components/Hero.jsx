import { useEffect } from 'react';
import './Hero.css';
import { AppleLogo, PlayLogo } from './Icons';

/* The six craft categories the app ships, as scraps pinned along the thread. */
const CRAFTS = [
  ['Knitting & Crochet', ''],
  ['Sewing & Textiles', ' chip--honey'],
  ['Embroidery & Needlework', ''],
  ['Clay & Ceramics', ' chip--cloth'],
  ['Jewelry & Beading', ''],
  ['…or a craft of your own', ' chip--honey'],
];

export default function Hero() {
  useEffect(() => {
    document.querySelectorAll('.hero-in').forEach((el, i) =>
      setTimeout(() => el.classList.add('is-in'), 90 + i * 95),
    );
  }, []);

  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="tag hero-in">Knitting · Crochet · Every craft</span>

          <h1 className="h-xl hero-title hero-in">
            Every piece<br />starts with
            <span className="em-line">one photo.</span>
          </h1>

          <p className="lede hero-in">
            Craft MadeBy is the journal for everything you make by hand. Count
            the rows, record the real hours, keep the photos in order — and end
            up with a portfolio that proves the work was yours.
          </p>

          <div className="hero-ctas hero-in">
            <a href="https://apps.apple.com/app/id6792596703" target="_blank" rel="noopener" className="btn btn-primary">
              <AppleLogo size={17} /> App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.craftmadeby.app" target="_blank" rel="noopener" className="btn btn-outline">
              <PlayLogo size={17} /> Google Play
            </a>
          </div>

          <p className="hero-note hero-in">
            Free · iPhone, iPad &amp; Android · <strong>12 languages</strong> ·
            Premium free for 14 days
          </p>
        </div>

        {/* The first patch: three screens laid on cloth and sewn down. */}
        <div className="patch patch--cloth hero-patch hero-in">
          <div className="hero-screens">
            <figure className="hero-phone hero-phone--l">
              <div className="device"><div className="device-screen">
                <img src="/images/app/theme.webp" alt="" width="640" height="1421" loading="eager" />
              </div></div>
            </figure>
            <figure className="hero-phone hero-phone--c">
              <div className="device"><div className="device-screen">
                <img
                  src="/images/app/workshop.webp"
                  alt="The Craft MadeBy workshop, showing finished pieces from other crafters"
                  width="640" height="1421" loading="eager" fetchPriority="high"
                />
              </div></div>
            </figure>
            <figure className="hero-phone hero-phone--r">
              <div className="device"><div className="device-screen">
                <img src="/images/app/counting.webp" alt="" width="640" height="1421" loading="eager" />
              </div></div>
            </figure>
          </div>
          <span className="chip hero-chip hero-chip--hours">124 hours honed</span>
          <span className="chip chip--honey hero-chip hero-chip--rows">8 rows counted</span>
        </div>
      </div>

      {/* The thread leaves the hero and carries the craft scraps with it. */}
      <div className="container hero-crafts hero-in">
        <ul className="hero-craft-list">
          {CRAFTS.map(([name, tone]) => (
            <li key={name}><span className={'chip' + tone}>{name}</span></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
