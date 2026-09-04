import { useReveal } from '../hooks';
import './Footer.css';
import BrandSeam from './BrandSeam';

export default function Footer() {
  useReveal();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <img src="/logo.svg" alt="" className="brand-tile footer-logo" />
          <span className="footer-brand-name">Craft MadeBy</span>
          <p className="footer-brand-tagline">Where crafters leave their mark.</p>
          <div className="footer-store-links">
            <a href="https://apps.apple.com/app/id6792596703" target="_blank" rel="noopener" className="footer-store-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.34.07 2.27.74 3.06.8 1.15-.21 2.26-.89 3.52-.84 1.51.07 2.65.62 3.4 1.57-3.14 1.87-2.39 5.98.6 7.13-.57 1.5-1.33 2.99-2.58 4.22z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.craftmadeby.app" target="_blank" rel="noopener" className="footer-store-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 20.5v-17a.5.5 0 0 1 .78-.41l15 8.5a.5.5 0 0 1 0 .82l-15 8.5A.5.5 0 0 1 3 20.5z" strokeLinejoin="round"/>
              </svg>
              Google Play
            </a>
          </div>
          <ul className="footer-social" aria-label="Craft MadeBy on social media">
            <li>
              <a href="https://www.instagram.com/craft_madeby/" target="_blank" rel="noopener" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" />
                  <circle cx="12" cy="12" r="4.1" />
                  <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/socialcraftmadeby/" target="_blank" rel="noopener" className="footer-social-link" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.64 19.32c-.09-.79-.17-2.01.03-2.88.18-.77 1.17-4.94 1.17-4.94s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.26.64 1.26 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.17-4.07-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.32-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.88 0-3.16 2.29-6.06 6.61-6.06 3.47 0 6.17 2.47 6.17 5.78 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.96-.53-2.29-1.15l-.62 2.38c-.23.87-.83 1.96-1.24 2.62A10 10 0 1 0 12 2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@CraftMadeByApp" target="_blank" rel="noopener" className="footer-social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/people/Craft-MadeBy/61594194715747/" target="_blank" rel="noopener" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>


        <div className="footer-links-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#howitworks">How it Works</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#verification">Verification</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#mascots">Mascots</a></li>
            <li><a href="#expertpanel">Expert Panel</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms.html">Terms of Service</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/community-guidelines.html">Community Guidelines</a></li>
            <li><a href="/delete-account.html">Delete Account Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <BrandSeam tone="dark" className="reveal footer-seam" />
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span className="footer-copy">© 2026 Craft MadeBy. All rights reserved.</span>
          <span className="footer-made">Made by hand, for people who make by hand.</span>
        </div>
      </div>
    </footer>
  );
}
