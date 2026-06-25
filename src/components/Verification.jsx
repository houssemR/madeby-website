import { useReveal } from '../hooks';
import './Verification.css';

const stampImg = '/images/handmade_stamp.png';

export default function Verification() {
  useReveal();
  return (
    <section className="verif-section" id="verification">
      <div className="container">
        <div className="verif-inner reveal">
          <div className="verif-text">
            <span className="section-eyebrow">✦ Authenticity</span>
            <h2 className="verif-title">The Handmade Stamp.</h2>
            <p className="verif-body">
              Trust is at the core of our community. When you see the Craft MadeBy Handmade Stamp on a project, you know you're looking at a truly handcrafted piece — verified by our rigorous certification process.
            </p>
            <div className="verif-badges">
              <div className="verif-badge-item">
                <span>✦</span>
                <div>
                  <strong>Certified Handmade</strong>
                  <p>The piece is genuinely made by the artist's own hands.</p>
                </div>
              </div>
              <div className="verif-badge-item">
                <span>✦</span>
                <div>
                  <strong>Verified Process</strong>
                  <p>The creation steps and methods are fully documented and authentic.</p>
                </div>
              </div>
              <div className="verif-badge-item">
                <span>✦</span>
                <div>
                  <strong>Community Choice</strong>
                  <p>Voted and recognized as exceptional by the maker community.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="verif-stamp-col reveal reveal-delay-3">
            <div className="verif-stamp-glow">
              <img src={stampImg} alt="Handmade Stamp" className="verif-stamp-img" />
            </div>
            <p className="verif-stamp-caption">Applied to verified projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
