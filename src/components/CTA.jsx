import { useReveal } from '../hooks';
import './CTA.css';

export default function CTA() {
  useReveal();
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner reveal">
          {/* Decorative orbs */}
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />

          <div className="cta-content">
            <div className="cta-logo-wrap">
              <img src="/logo.svg" alt="Craft MadeBy" className="cta-logo" />
            </div>
            <h2 className="cta-title">Your craft deserves<br />to be remembered.</h2>
            <p className="cta-sub">
              Join thousands of artisans documenting, sharing, and celebrating<br className="cta-br" />
              their handmade work on Craft MadeBy.
            </p>
            <div className="cta-btns">
              <a href="#" className="btn btn-ghost cta-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.34.07 2.27.74 3.06.8 1.15-.21 2.26-.89 3.52-.84 1.51.07 2.65.62 3.4 1.57-3.14 1.87-2.39 5.98.6 7.13-.57 1.5-1.33 2.99-2.58 4.22zM12 7.34c-.12-2.49 2.02-4.58 4.38-4.74.36 2.85-2.55 5.04-4.38 4.74z" fill="currentColor"/>
                </svg>
                App Store
              </a>
              <a href="#" className="btn btn-ghost cta-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5v-17a.5.5 0 0 1 .78-.41l15 8.5a.5.5 0 0 1 0 .82l-15 8.5A.5.5 0 0 1 3 20.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Google Play
              </a>
            </div>
            <p className="cta-footnote">Free to download · No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
