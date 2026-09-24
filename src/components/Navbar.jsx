import { useEffect, useState } from 'react';
import './Navbar.css';

/* Four links. The old bar carried six and a seventh in the actions slot,
   which read as a site map rather than a way around one page. */
const LINKS = [
  ['#making', 'Document'],
  ['#counter', 'Row counter'],
  ['#corner', 'Your corner'],
  ['#proof', 'Certified'],
  ['#giveaway', 'Giveaways'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" className="brand-tile nav-logo" />
          <span className="nav-name">Craft MadeBy</span>
        </a>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="https://apps.apple.com/app/id6792596703" target="_blank" rel="noopener" className="nav-cta-mobile" onClick={() => setOpen(false)}>Get the app — free</a>
        </div>

        <a
          href="https://apps.apple.com/app/id6792596703"
          target="_blank" rel="noopener"
          className="btn btn-primary nav-cta"
        >Get the app</a>

        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
