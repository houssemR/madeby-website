import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const floatRef = useRef(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  // Staggered entrance
  useEffect(() => {
    const items = document.querySelectorAll('.hero-animate');
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('hero-visible'), 150 + i * 120);
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background noise + gradient */}
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
      </div>

      {/* Floating decorative orbs - parallax target */}
      <div className="hero-orbs" ref={floatRef}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container hero-content">
        {/* Launch Banner */}
        <div className="hero-launch-banner hero-animate">
          <span className="launch-icon">🚀</span>
          <span>Coming Soon</span>
        </div>

        {/* App logo above badge */}
        <div className="hero-app-logo hero-animate">
          <div className="hero-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="hero-logo-svg">
              <path d="M70 115 V85 Q70 70 85 70 T100 85 V115 Q100 130 115 130 T130 115 Q130 100 115 100"
                fill="none"
                stroke="#EDFFEC"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="hero-badge hero-animate">
          <span className="badge-dot" />
          <span>The Crafter's Community App</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title hero-animate">
          Where crafters leave<br />
          <em className="hero-title-em">their mark.</em>
        </h1>

        {/* Sub */}
        <p className="hero-sub hero-animate">
          Document your handmade projects, step by step and minute by minute.<br className="hero-br" />
          Share, gift and certify them. Leave a lasting legacy of craft.
        </p>

        {/* CTAs */}
        <div className="hero-ctas hero-animate">
          <a href="#" className="btn btn-primary hero-btn-main">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.34.07 2.27.74 3.06.8 1.15-.21 2.26-.89 3.52-.84 1.51.07 2.65.62 3.4 1.57-3.14 1.87-2.39 5.98.6 7.13-.57 1.5-1.33 2.99-2.58 4.22zM12 7.34c-.12-2.49 2.02-4.58 4.38-4.74.36 2.85-2.55 5.04-4.38 4.74z" fill="currentColor"/>
            </svg>
            App Store
          </a>
          <a href="#" className="btn btn-outline hero-btn-alt">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 20.5v-17a.5.5 0 0 1 .78-.41l15 8.5a.5.5 0 0 1 0 .82l-15 8.5A.5.5 0 0 1 3 20.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Google Play
          </a>
          <a href="#howitworks" className="hero-scroll-link hero-animate">
            <span>Explore features</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Social proof */}
        <div className="hero-social-proof hero-animate">
          <div className="avatar-stack">
            {['#4D5235','#617964','#C9A86A','#3A4228','#B4CDB5'].map((c, i) => (
              <div key={i} className="avatar-dot" style={{ background: c, zIndex: 5 - i }} />
            ))}
          </div>
          <span>Joined by <strong>coming soon+</strong> artisans worldwide</span>
        </div>

        {/* Craft category marquee */}
        <div className="hero-marquee hero-animate" aria-hidden="true">
          <div className="hero-marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="hero-marquee-group">
                <span className="marquee-chip">🧶 Knitting & Crochet</span>
                <span className="marquee-chip">🪡 Sewing & Textiles</span>
                <span className="marquee-chip">🧵 Embroidery & Needlework</span>
                <span className="marquee-chip">🏺 Clay & Ceramics</span>
                <span className="marquee-chip">💍 Jewelry & Beading</span>
                <span className="marquee-chip">✨ …and your own craft</span>
              </div>
            ))}
          </div>
        </div>

        {/* App screenshot fan */}
        <div className="hero-phones hero-animate">
          <div className="hero-phone hero-phone-left">
            <img src="/images/screens/22_step_a.png" alt="Documenting a project step in Craft MadeBy" loading="lazy" />
          </div>
          <div className="hero-phone hero-phone-center">
            <img src="/images/screens/03_home.png" alt="Craft MadeBy home feed" />
          </div>
          <div className="hero-phone hero-phone-right">
            <img src="/images/screens/05_details_top.png" alt="A Certified Handmade project in Craft MadeBy" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-fade-bottom" />
    </section>
  );
}
