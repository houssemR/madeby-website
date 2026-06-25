import { useRef } from 'react';
import { useReveal, useCounter } from '../hooks';
import './Stats.css';

function CounterItem({ value, suffix, label, delay }) {
  const ref = useRef(null);
  useCounter(ref, value);
  return (
    <div className={`stat-item reveal reveal-delay-${delay}`}>
      <div className="stat-value-wrap">
        <span className="stat-value" ref={ref}>0</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats() {
  useReveal();
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <CounterItem value={10000} suffix="+" label="Active Makers" delay={1} />
        <CounterItem value={50000} suffix="+" label="Projects Shared" delay={2} />
        <CounterItem value={3200} suffix="+" label="Giveaways Hosted" delay={3} />
        <CounterItem value={98} suffix="%" label="Verified Handmade" delay={4} />
      </div>
    </section>
  );
}
