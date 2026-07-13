import { useReveal } from '../hooks';
import './AppShowcase.css';

const screens = [
  {
    img: '23_stopwatch.png',
    chip: '⏱️ Built-in stopwatch',
    caption: 'Record real hours on every step',
    alt: 'Recording invested time with the Craft MadeBy stopwatch',
  },
  {
    img: '10_timeline.png',
    chip: '📖 Craft journal',
    caption: 'Your year in making, on one timeline',
    alt: 'The Craft MadeBy timeline of projects and milestones',
  },
  {
    img: '25_review_b.png',
    chip: '🎁 Gift wrapping',
    caption: 'Wrap it, bow it, gift it',
    alt: 'Wrapping a handmade gift in Craft MadeBy',
  },
  {
    img: '09_legacy.png',
    chip: '🏅 Crafter honors',
    caption: 'Rise from Crafter to Inspiring Leader',
    alt: 'The Craft MadeBy honors path on the legacy profile',
  },
  {
    img: '28_stats_b.png',
    chip: '🧑‍⚖️ Expert Panel',
    caption: 'Climb the weekly Top 100',
    alt: 'The Top 100 Inspiring Leaders board in Craft MadeBy',
  },
  {
    img: '12_legacy_seal.png',
    chip: '🕯️ Legacy Room',
    caption: 'Your certified collection, sealed',
    alt: 'The Certified Handmade wax seal collection in Craft MadeBy',
    cropTop: true,
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
            Real screens from the app, from the first recorded minute to the wax seal
            on your certified collection.
          </p>
        </div>

        <div className="showcase-grid">
          {screens.map((s, i) => (
            <figure
              key={s.img}
              className={`showcase-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className={`showcase-phone ${s.cropTop ? 'crop-top' : ''}`}>
                <img src={`/images/screens/${s.img}`} alt={s.alt} loading="lazy" />
              </div>
              <figcaption className="showcase-caption">
                <span className="showcase-chip">{s.chip}</span>
                <span className="showcase-text">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
