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
    img: '23_stopwatch.png',
    icon: <IconStopwatch size={15} />,
    chip: 'Built-in stopwatch',
    caption: 'Record real hours on every step',
    alt: 'Recording invested time with the Craft MadeBy stopwatch',
    platform: 'ios',
  },
  {
    img: '10_timeline.png',
    icon: <IconStory size={15} />,
    chip: 'Craft journal',
    caption: 'Your year in making, on one timeline',
    alt: 'The Craft MadeBy timeline of projects and milestones',
    platform: 'android',
  },
  {
    img: '25_review_b.png',
    icon: <IconBow size={15} />,
    chip: 'Gift wrapping',
    caption: 'Wrap it, bow it, gift it',
    alt: 'Wrapping a handmade gift in Craft MadeBy',
    platform: 'ios',
  },
  {
    img: '09_legacy.png',
    icon: <IconMedal size={15} />,
    chip: 'Crafter honors',
    caption: 'Rise from Crafter to Inspiring Leader',
    alt: 'The Craft MadeBy honors path on the legacy profile',
    platform: 'android',
  },
  {
    img: '28_stats_b.png',
    icon: <IconScale size={15} />,
    chip: 'Expert Panel',
    caption: 'Climb the weekly Top 100',
    alt: 'The Top 100 Inspiring Leaders board in Craft MadeBy',
    platform: 'ios',
  },
  {
    img: '12_legacy_seal.png',
    icon: <IconSeal size={15} />,
    chip: 'Legacy Room',
    caption: 'Your certified collection, sealed',
    alt: 'The Certified Handmade wax seal collection in Craft MadeBy',
    cropTop: true,
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
