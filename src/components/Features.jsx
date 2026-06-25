import { useReveal } from '../hooks';
import './Features.css';

const potteryImg = '/images/craft_pottery.png';
const giveawayImg = '/images/craft_giveaway.png';

const bullets1 = [
  { icon: '📋', text: 'Track work-in-progress step by step' },
  { icon: '✅', text: 'Add instantly finished pieces' },
  { icon: '🪵', text: 'Log materials, tools & difficulty' },
  { icon: '📖', text: 'Write the story behind the craft' },
];

const bullets2 = [
  { icon: '🎁', text: 'Tag any project as a giveaway' },
  { icon: '💌', text: 'Receive heartfelt requests from connections' },
  { icon: '🎉', text: 'Tag by occasion — birthdays, anniversaries' },
  { icon: '🏡', text: 'Gifts that find the perfect home' },
];

function FeatureRow({ tag, title, body, bullets, img, alt, reverse, delay }) {
  useReveal();
  return (
    <div className={`feat-row ${reverse ? 'feat-row--reverse' : ''}`}>
      {/* Image block */}
      <div className={`feat-img-block reveal ${reverse ? 'reveal-delay-2' : 'reveal-delay-1'}`}>
        <div className="feat-img-inner">
          <img src={img} alt={alt} />
          <div className="feat-img-overlay" />
        </div>
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
          body="Whether beginning a clay pot or adding a masterpiece, track every step — materials, hours, story — all in one beautiful place."
          bullets={bullets1}
          img={potteryImg}
          alt="Artisan working on pottery"
          reverse={false}
        />
        <FeatureRow
          tag="Giveaways"
          title="Give your craft. Receive gratitude."
          body="Host a giveaway for any project. Connections submit heartfelt requests; you review them and choose who gets your handmade piece."
          bullets={bullets2}
          img={giveawayImg}
          alt="Handmade scarf packaged as a gift"
          reverse={true}
        />
      </div>
    </section>
  );
}
