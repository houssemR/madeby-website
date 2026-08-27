import { useReveal } from '../hooks';
import './AppShowcase.css';
import {
  IconStopwatch, IconStory, IconBow, IconMedal, IconScale, IconSeal,
  AppleLogo, AndroidLogo, PlayLogo,
} from './Icons';

/* Same handcrafted app, two platforms: cards alternate honest iPhone and
   Android chrome, so the section itself says "iOS + Android". */
const screens = [
  {
    img: 'stopwatch.png',
    icon: <IconStopwatch size={15} />,
    chip: 'Built-in stopwatch',
    caption: 'Record real hours on every step',
    alt: 'Recording invested time with the Craft MadeBy stopwatch',
    platform: 'ios',
  },
  {
    img: 'timeline.png',
    icon: <IconStory size={15} />,
    chip: 'Craft journal',
    caption: 'Every step, with its photos and materials',
    alt: 'A project timeline with a documented step open in Craft MadeBy',
    platform: 'android',
  },
  {
    img: 'home.png',
    icon: <IconSeal size={15} />,
    chip: 'The feed',
    caption: 'Your workshop and the makers you follow',
    alt: 'The Craft MadeBy home feed',
    platform: 'ios',
  },
  {
    img: 'portfolio.png',
    icon: <IconMedal size={15} />,
    chip: 'Crafter honors',
    caption: 'Rise from Crafter to Inspiring Leader',
    alt: 'The honors ladder on a Craft MadeBy portfolio',
    platform: 'android',
  },
  {
    img: 'top100.png',
    icon: <IconScale size={15} />,
    chip: 'Expert Panel',
    caption: 'Climb the weekly Top 100',
    alt: 'The Top 100 Inspiring Leaders board in Craft MadeBy',
    platform: 'ios',
  },
  {
    img: 'panel.png',
    icon: <IconBow size={15} />,
    chip: 'Review queue',
    caption: 'Certify the work of fellow makers',
    alt: 'The Expert Panel review queue in Craft MadeBy',
    platform: 'android',
  },
];

export default function AppShowcase() {
  useReveal();

  return (
    <section className="showcase-section" id="app">
      <div className="showcase-bg" aria-hidden="true">
        <div className="showcase-blob" />
      </div>
      <div className="container">
        <div className="showcase-header reveal">
          <span className="section-eyebrow">✦ Inside the App</span>
          <h2 className="showcase-title">
            Every screen,{' '}
            <span className="gradient-text">made with care.</span>
          </h2>
          <p className="showcase-sub">
            Real screens from the app — the same quiet home on{' '}
            <span className="showcase-platform"><AppleLogo size={15} /> iPhone</span> and{' '}
            <span className="showcase-platform"><AndroidLogo size={16} /> Android</span>,
            from the first recorded minute to the wax seal on your certified collection.
          </p>
          <div className="showcase-store-row" aria-hidden="true">
            <span className="store-mini"><AppleLogo size={14} /> App Store</span>
            <span className="store-mini"><PlayLogo size={13} /> Google Play</span>
          </div>
        </div>

        <div className="showcase-grid">
          {screens.map((s, i) => (
            <figure
              key={s.img}
              className={`showcase-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className={`showcase-phone showcase-phone--${s.platform} ${s.cropTop ? 'crop-top' : ''}`}>
                <img src={`/images/screens/${s.img}`} alt={s.alt} loading="lazy" />
              </div>
              <figcaption className="showcase-caption">
                <span className="showcase-chip">
                  {s.icon}
                  {s.chip}
                  <span className="showcase-chip-platform">
                    {s.platform === 'ios' ? <AppleLogo size={11} /> : <AndroidLogo size={12} />}
                  </span>
                </span>
                <span className="showcase-text">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
