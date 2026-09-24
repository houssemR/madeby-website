import { useEffect } from 'react';
import './Hero.css';
import { AppleLogo, PlayLogo } from './Icons';

export default function Hero() {
  useEffect(() => {
    const items = document.querySelectorAll('.hero-in');
    items.forEach((el, i) => setTimeout(() => el.classList.add('is-in'), 100 + i * 100));
  }, []);

  return (
    <header className="hero band band--celadon" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge hero-in">Knitting · Crochet · Every craft</span>

          <h1 className="h-xl hero-title hero-in">
            Somebody made this
            <span className="em-line">by hand.</span>
          </h1>

          <p className="lede hero-in">
            Craft MadeBy is where that gets written down. Count the rows, record
            the hours, keep the photos in order — and the finished piece carries
            proof of every one of them.
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

        {/* A real piece, with the app laid over it — the object first, the
            software because of it. */}
        <div className="hero-stage hero-in">
          <figure className="plate hero-plate">
            <img
              src="/images/craft/jumpsuit.webp"
              alt="A hand-knitted grey baby jumpsuit with wooden buttons, hanging on a wire hanger"
              width="900" height="1200" loading="eager" fetchPriority="high"
            />
          </figure>

          <div className="device hero-device">
            <div className="device-screen">
              <video
                src="/videos/feed.mp4"
                poster="/videos/feed-poster.jpg"
                autoPlay muted loop playsInline
                aria-label="Browsing finished pieces in the Craft MadeBy app"
              />
            </div>
          </div>

          <figcaption className="hero-cap hand">
            Sparkedragt til nevø · 38 hours · 6 steps
          </figcaption>
        </div>
      </div>
    </header>
  );
}
