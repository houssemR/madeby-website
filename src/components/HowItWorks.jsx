import { useEffect } from 'react';
import { useReveal } from '../hooks';
import './HowItWorks.css';

const steps = [
  { num: '01', icon: '🪡', title: 'Start or Add', body: 'Begin a step-by-step project — solo or joint with fellow crafters — or instantly add a finished piece to your portfolio.' },
  { num: '02', icon: '⏱️', title: 'Document Every Detail', body: 'Log materials, tools, costs and photos — and record real invested time with the built-in per-step stopwatch.' },
  { num: '03', icon: '🌿', title: 'Share on Your Terms', body: 'Choose your audience — public, connections only, within a private group, or completely private. Gift or give away any piece.' },
  { num: '04', icon: '🏅', title: 'Earn Crafter Honors', body: 'Climb from Crafter to Inspiring Leader, get Certified Handmade — and unlock a seat on the Expert Panel.' },
];

export default function HowItWorks() {
  useReveal();

  return (
    <section className="how-section" id="howitworks">
      <div className="container">
        <div className="how-header reveal">
          <span className="section-eyebrow">✦ How it Works</span>
          <h2 className="how-title">
            Your creative journey,<br />
            <span className="gradient-text">beautifully tracked.</span>
          </h2>
          <p className="how-sub">
            From the first stitch to the final varnish, every step of your making process has a home.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className={`step-card reveal reveal-delay-${i + 1}`}>
              <div className="step-icon-wrap">
                <span className="step-icon">{s.icon}</span>
              </div>
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
              <div className="step-hover-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
