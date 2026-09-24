import { useEffect } from 'react';
import './Hero.css';
import { AppleLogo, PlayLogo } from './Icons';

/* The six craft categories the app actually ships, as the loose chips the
   store pages scatter around the artwork. */
const CRAFTS = [
  ['Knitting & Crochet', ''],
  ['Sewing & Textiles', ' chip--honey'],
  ['Embroidery & Needlework', ''],
  ['Clay & Ceramics', ' chip--blush'],
  ['Jewelry & Beading', ''],
  ['…or a craft of your own', ' chip--honey'],
];

export default function Hero() {
  useEffect(() => {
    const items = document.querySelectorAll('.hero-in');
    items.forEach((el, i) => setTimeout(() => el.classList.add('is-in'), 120 + i * 110));
  }, []);

  return (
    <header className="hero band band--celadon" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge hero-in">Knitting · Crochet · Every craft</span>

          <h1 className="h-xl hero-title hero-in">
            Every piece<br />starts with
            <span className="em-line">one photo.</span>
          </h1>

          <p className="lede hero-in">
            Craft MadeBy is the journal for everything you make by hand. Count
            your rows, record the real hours, keep the photos in order — and
            end up with a portfolio that proves the work was yours.
          </p>

          <div className="hero-ctas hero-in">
            <a
              href="https://apps.apple.com/app/id6792596703"
              target="_blank" rel="noopener"
              className="btn btn-primary"
            >
              <AppleLogo size={17} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.craftmadeby.app"
              target="_blank" rel="noopener"
              className="btn btn-outline"
            >
              <PlayLogo size={17} /> Google Play
            </a>
          </div>

          <p className="hero-note hero-in">
            Free · iPhone, iPad &amp; Android · <strong>12 languages</strong> ·
            Premium free for 14 days
          </p>
        </div>

        {/* Three real prod screens, tilted the way the store pages tilt them */}
        <div className="hero-stage hero-in" aria-hidden="false">
          <figure className="hero-phone hero-phone--back-l">
            <div className="device"><div className="device-screen">
              <img src="/images/app/theme.webp" alt="" loading="eager" width="640" height="1421" />
            </div></div>
          </figure>

          <figure className="hero-phone hero-phone--front">
            <div className="device"><div className="device-screen">
              <img
                src="/images/app/workshop.webp"
                alt="The Craft MadeBy workshop, with finished pieces from other crafters"
                loading="eager" width="640" height="1421"
              />
            </div></div>
          </figure>

          <figure className="hero-phone hero-phone--back-r">
            <div className="device"><div className="device-screen">
              <img src="/images/app/counting.webp" alt="" loading="eager" width="640" height="1421" />
            </div></div>
          </figure>

          <span className="chip chip--honey hero-chip hero-chip--rows">8 rows counted</span>
          <span className="chip hero-chip hero-chip--hours">124 hours honed</span>
        </div>
      </div>

      {/* The craft chips, on their own thread */}
      <div className="hero-crafts hero-in">
        <div className="container">
          <hr className="thread-rule" />
          <ul className="hero-craft-list">
            {CRAFTS.map(([name, tone]) => (
              <li key={name}>
                <span className={'chip' + tone}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
