import { useReveal } from '../hooks';
import './Stats.css';

function StatItem({ label, delay }) {
  return (
    <div className={`stat-item reveal reveal-delay-${delay}`}>
      <div className="stat-value-wrap">
        <span className="stat-value stat-coming-soon">Coming Soon</span>
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
        <StatItem label="Active Makers" delay={1} />
        <StatItem label="Projects Shared" delay={2} />
        <StatItem label="Giveaways Hosted" delay={3} />
        <StatItem label="Verified Handmade" delay={4} />
      </div>
    </section>
  );
}
