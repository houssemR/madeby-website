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
          <img src="/logo.svg" alt="" className="brand-tile nav-logo" />
          <span className="nav-name">Craft MadeBy</span>
        </a>

        <div className="nav-links">
          <a href="#howitworks">How it Works</a>
          <a href="#mascots">Mascots</a>
          <a href="#app">The App</a>
          <a href="#community">Community</a>
          <a href="#verification">Verification</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a href="https://apps.apple.com/app/id6792596703" target="_blank" rel="noopener" className="btn btn-primary btn-nav-sm">Download Free</a>
        </div>
      </div>
    </nav>
  );
}
