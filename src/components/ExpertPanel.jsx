import { useRef } from 'react';
import { useReveal, useCounter } from '../hooks';
import './ExpertPanel.css';

const ladder = [
  { icon: '🔨', label: 'Crafter', rule: 'Everyone starts here' },
  { icon: '✨', label: 'Artisan', rule: 'Complete 3 projects' },
  { icon: '🏆', label: 'Master Artisan', rule: 'Earn 2 Certified Handmade' },
  { icon: '🌟', label: 'Inspiring Leader', rule: 'Collect 10 reactions', highlight: true },
];

const points = [
  { pts: '+10', text: 'per review personally decided', good: true },
  { pts: '+5', text: 'speed bonus within 24 hours (+3 within 3 days)', good: true },
  { pts: '−15', text: 'per missed 7-day deadline', good: false },
];

const board = [
  { medal: '🥇', name: 'Ingrid K.', craft: 'Knitting & Crochet', decided: 48, avg: '11h', pts: 640 },
  { medal: '🥈', name: 'Mateo R.', craft: 'Clay & Ceramics', decided: 41, avg: '1d 2h', pts: 552 },
  { medal: '🥉', name: 'Amara D.', craft: 'Jewelry & Beading', decided: 37, avg: '19h', pts: 511 },
  { medal: '#4', name: 'You?', craft: 'Your craft here', decided: null, avg: null, pts: null, you: true },
];

function BoardRow({ row, delay }) {
  const ptsRef = useRef(null);
  useCounter(ptsRef, row.pts ?? 0, 1600);
  return (
    <div className={`board-row reveal reveal-delay-${delay} ${row.you ? 'board-row--you' : ''}`}>
      <span className="board-medal">{row.medal}</span>
      <div className="board-avatar">{row.name.charAt(0)}</div>
      <div className="board-who">
        <strong>{row.name}</strong>
        <span>{row.craft}</span>
      </div>
      {row.you ? (
        <span className="board-you-hint">Seat waiting ✦</span>
      ) : (
        <>
          <span className="board-meta">{row.decided} decided · avg {row.avg}</span>
          <span className="board-pts"><em ref={ptsRef}>0</em> pts</span>
        </>
      )}
    </div>
  );
}

export default function ExpertPanel() {
  useReveal();
  return (
    <section className="panel-section" id="expertpanel">
      <div className="panel-bg-orb panel-bg-orb-1" />
      <div className="panel-bg-orb panel-bg-orb-2" />
      <div className="container">
        <div className="panel-header reveal">
          <span className="section-eyebrow section-eyebrow--light">✦ Expert Panel</span>
          <h2 className="panel-title">
            Climb the ladder.<br />
            <span className="panel-title-gold">Take your seat.</span>
          </h2>
          <p className="panel-sub">
            Inspiring Leaders don't just wear the top honor — they review Handmade Certificate
            requests, race the 7-day clock, and compete for the weekly Top 100.
          </p>
        </div>

        <div className="panel-grid">
          {/* Left: the honor ladder + duties */}
          <div className="panel-col reveal reveal-delay-1">
            <div className="panel-card">
              <h3 className="panel-card-title">🪜 The honor ladder</h3>
              <div className="panel-ladder">
                {ladder.map((h, i) => (
                  <div key={i} className={`ladder-rung ${h.highlight ? 'ladder-rung--top' : ''}`}>
                    <span className="ladder-icon">{h.icon}</span>
                    <div>
                      <strong>{h.label}</strong>
                      <p>{h.rule}</p>
                    </div>
                    {h.highlight && <span className="ladder-seat">Panel seat 🎓</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-card">
              <h3 className="panel-card-title">🎯 The reviewer score</h3>
              <div className="panel-points">
                {points.map((p, i) => (
                  <div key={i} className="point-row">
                    <span className={`point-pill ${p.good ? '' : 'point-pill--bad'}`}>{p.pts}</span>
                    <span className="point-text">{p.text}</span>
                  </div>
                ))}
              </div>
              <p className="panel-card-note">
                Reviews are category-matched: you only judge crafts you've been certified in yourself.
                Miss 3 deadlines and your seat locks for a month — show up, or pause honestly.
              </p>
            </div>
          </div>

          {/* Right: animated Top 100 board */}
          <div className="panel-col reveal reveal-delay-2">
            <div className="panel-board">
              <div className="panel-board-head">
                <h3>Top 100 Inspiring Leaders</h3>
                <span className="board-weekly-pill">Published weekly</span>
              </div>
              <div className="panel-board-rows">
                {board.map((row, i) => (
                  <BoardRow key={i} row={row} delay={Math.min(i + 1, 4)} />
                ))}
              </div>
              <div className="panel-board-foot">
                <span>📣 Proud of your rank? Share your reviewer stats straight to your feed and groups.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
