import { useEffect, useState } from 'react';
import { useReveal } from '../hooks';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="nav-brand">
          <div className="nav-logo-wrap">
            <img src="/logo.svg" alt="Craft MadeBy" className="nav-logo" />
          </div>
          <span className="nav-name">Craft MadeBy</span>
        </a>

        <div className="nav-links">
          <a href="#howitworks">How it Works</a>
          <a href="#projects">Projects</a>
          <a href="#community">Community</a>
          <a href="#verification">Verification</a>
          <a href="#expertpanel">Expert Panel</a>
        </div>

        <div className="nav-actions">
          <a href="#" className="btn btn-primary btn-nav-sm">Download Free</a>
        </div>
      </div>
    </nav>
  );
}
