import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <img src="/logo.svg" alt="Craft MadeBy" className="footer-logo" />
          </div>
          <span className="footer-brand-name">Craft MadeBy</span>
          <p className="footer-brand-tagline">Where crafters leave their mark.</p>
          <div className="footer-store-links">
            <a href="#" className="footer-store-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.34.07 2.27.74 3.06.8 1.15-.21 2.26-.89 3.52-.84 1.51.07 2.65.62 3.4 1.57-3.14 1.87-2.39 5.98.6 7.13-.57 1.5-1.33 2.99-2.58 4.22z"/>
              </svg>
              App Store
            </a>
            <a href="#" className="footer-store-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 20.5v-17a.5.5 0 0 1 .78-.41l15 8.5a.5.5 0 0 1 0 .82l-15 8.5A.5.5 0 0 1 3 20.5z" strokeLinejoin="round"/>
              </svg>
              Google Play
            </a>
          </div>
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
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
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

      <div className="footer-bottom">
        <div className="container">
          <span className="footer-copy">© 2026 Craft MadeBy. All rights reserved.</span>
          <span className="footer-made">Made with ❤️ for crafters</span>
        </div>
      </div>
    </footer>
  );
}
