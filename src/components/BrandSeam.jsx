import './BrandSeam.css';

/* The app's three words, carried on a running stitch — the same dashed
   thread the app draws behind its own artwork. Used once in the hero and
   once at the foot of the page, so the site opens and closes on it. */
export default function BrandSeam({ className = '', tone = 'light' }) {
  return (
    <p className={`brand-seam brand-seam--${tone} ${className}`.trim()}>
      <span className="brand-seam-thread" aria-hidden="true" />
      <span className="brand-seam-words">
        <span>Handmade</span>
        <span className="brand-seam-dot" aria-hidden="true">·</span>
        <span>Documented</span>
        <span className="brand-seam-dot" aria-hidden="true">·</span>
        <span>Celebrated</span>
      </span>
      <span className="brand-seam-thread" aria-hidden="true" />
    </p>
  );
}
