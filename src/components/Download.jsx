import { useReveal } from '../hooks';
import './Download.css';
import { AppleLogo, PlayLogo } from './Icons';

export default function Download() {
  useReveal();

  return (
    <section className="section" id="get">
      <div className="container">
        <div className="patch download-patch reveal">
          <img src="/logo.svg" alt="" className="brand-tile download-logo" />

          <h2 className="h-lg download-title">
            Your craft deserves
            <span className="em-line">to be remembered.</span>
          </h2>

          <p className="lede download-sub">
            Free to download, in twelve languages, on iPhone, iPad and Android.
            Premium is free for the first fourteen days.
          </p>

          <div className="download-btns">
            <a href="https://apps.apple.com/app/id6792596703" target="_blank" rel="noopener" className="btn btn-cream">
              <AppleLogo size={17} /> App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.craftmadeby.app" target="_blank" rel="noopener" className="btn btn-ghost">
              <PlayLogo size={17} /> Google Play
            </a>
          </div>

          <p className="download-seam">Handmade · Documented · Celebrated</p>
        </div>
      </div>
    </section>
  );
}
