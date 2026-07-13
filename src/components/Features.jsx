import { useReveal } from '../hooks';
import './Features.css';

const potteryImg = '/images/craft_pottery.png';
const giveawayImg = '/images/craft_giveaway.png';

const bullets1 = [
  { icon: '📋', text: 'Track work-in-progress step by step, each with its own title & photos' },
  { icon: '🧰', text: 'Log materials AND tools with quantities & costs — totals auto-calculated' },
  { icon: '♻️', text: 'Reuse a material on later steps without double-counting it' },
  { icon: '📖', text: 'Write the story behind the craft' },
];

const bulletsTime = [
  { icon: '⏱️', text: 'One independent stopwatch per step — run several at once' },
  { icon: '🔔', text: 'Keeps counting in the background with a live notification' },
  { icon: '✅', text: 'Register the time straight into the step when you stop' },
  { icon: '📆', text: 'Honest totals in days, hours, minutes & seconds' },
];

const bullets2 = [
  { icon: '🎀', text: 'Wrap it up: choose paper, bow, ribbon & confetti' },
  { icon: '💌', text: 'Receive heartfelt requests from connections' },
  { icon: '🎯', text: 'Or gift it directly to one special person' },
  { icon: '🎉', text: 'Tag by occasion — birthdays, anniversaries' },
];

/* Animated CSS stopwatch — the visual for the Record Time row. */
function StopwatchVisual() {
  return (
    <div className="watch-stage">
      <div className="watch-ring">
        <div className="watch-face">
          <span className="watch-time">02:41:37</span>
          <span className="watch-step">Step 3 · Sleeves</span>
          <span className="watch-live"><i />RECORDING</span>
        </div>
      </div>
      <div className="watch-chip watch-chip--a">⏱️ Step 1 · 4h 12m</div>
      <div className="watch-chip watch-chip--b">⏸️ Step 2 · paused</div>
      <div className="watch-chip watch-chip--c">📆 10d 3h 30m total</div>
    </div>
  );
}

function FeatureRow({ tag, title, body, bullets, img, alt, visual, reverse }) {
  useReveal();
  return (
    <div className={`feat-row ${reverse ? 'feat-row--reverse' : ''}`}>
      {/* Image / custom visual block */}
      <div className={`feat-img-block reveal ${reverse ? 'reveal-delay-2' : 'reveal-delay-1'}`}>
        {visual ? (
          visual
        ) : (
          <div className="feat-img-inner">
            <img src={img} alt={alt} />
            <div className="feat-img-overlay" />
          </div>
        )}
        <div className="feat-img-float-badge">
          <span>{tag}</span>
        </div>
      </div>

      {/* Text block */}
      <div className={`feat-text-block reveal ${reverse ? 'reveal-delay-1' : 'reveal-delay-2'}`}>
        <span className="pill-tag">{tag}</span>
        <h2 className="feat-title">{title}</h2>
        <p className="feat-body">{body}</p>
        <ul className="feat-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="feat-bullet">
              <span className="feat-bullet-icon">{b.icon}</span>
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features-section" id="projects">
      <div className="container">
        <FeatureRow
          tag="Creative Journey"
          title="Start a project or add a finished piece."
          body="Whether beginning a clay pot or adding a masterpiece, track every step — resources, hours, story — all in one beautiful place."
          bullets={bullets1}
          img={potteryImg}
          alt="Artisan working on pottery"
          reverse={false}
        />
        <FeatureRow
          tag="Record Time"
          title="Every minute of making, counted."
          body="Tap record on any step and craft away. The stopwatch runs like a real clock — even with the app closed — so your invested time is genuine, not guessed."
          bullets={bulletsTime}
          visual={<StopwatchVisual />}
          reverse={true}
        />
        <FeatureRow
          tag="Giveaways"
          title="Give your craft. Receive gratitude."
          body="Host a giveaway for any project — wrapped in the paper, bow and confetti you pick. Connections request it with a personal note; you choose who unwraps it."
          bullets={bullets2}
          img={giveawayImg}
          alt="Handmade scarf packaged as a gift"
          reverse={false}
        />
      </div>
    </section>
  );
}
