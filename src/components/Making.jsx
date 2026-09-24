import { useReveal } from '../hooks';
import './Making.css';
import Seam from './Seam';
import { IconCamera, IconSteps, IconStopwatch, IconLock } from './Icons';

/* Four steps, and they really are a sequence — a piece moves through them in
   this order — so they are numbered and strung along the thread. */
const STEPS = [
  {
    n: '01',
    icon: <IconCamera size={22} />,
    title: 'Start with a photo',
    body: 'A photo and a name is all it takes. Already finished something? Add it straight to your portfolio.',
  },
  {
    n: '02',
    icon: <IconSteps size={22} />,
    title: 'Break it into steps',
    body: 'Sleeves, glaze, hem, clasp — each step keeps its own photos, materials, tools and costs.',
  },
  {
    n: '03',
    icon: <IconStopwatch size={22} />,
    title: 'Record the real hours',
    body: 'A stopwatch runs per step. No guessing at the end of a project what it actually cost you in time.',
  },
  {
    n: '04',
    icon: <IconLock size={22} />,
    title: 'Decide who sees it',
    body: 'Public, connections only, inside a private group, or nobody at all. Every piece answers separately.',
  },
];

export default function Making() {
  useReveal();

  return (
    <section className="making band band--celadon" id="making">
      <div className="container">
        <div className="sec-head making-head reveal">
          <div className="sec-head-title">
          <span className="badge">The making</span>
          <h2 className="h-lg making-title">
            A piece, remembered
            <span className="em-line">step by step.</span>
          </h2>
          </div>
          <p className="lede">
            Most of what you make disappears into a camera roll. Here every
            project keeps its own thread — the photos, the yarn, the hours, the
            mistakes you fixed — and that thread is what turns into proof later.
          </p>
        </div>

        <div className="making-body">
          {/* The four steps, hanging off the running stitch */}
          <ol className="making-steps">
            <span className="making-thread" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li key={s.n} className={`making-step reveal reveal-delay-${i + 1}`}>
                <span className="making-node">{s.icon}</span>
                <div className="making-step-text">
                  <span className="making-num">{s.n}</span>
                  <h3 className="h-md making-step-title">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* The piece, then the two screens that recorded it */}
          <div className="making-shots reveal reveal-delay-2">
            <figure className="plate making-plate">
              <img src="/images/craft/sweater.webp" alt="Blue Drops Big Merino yarn photographed for a project step" loading="lazy" />
            </figure>
            <figure className="making-shot making-shot--a">
              <div className="device"><div className="device-screen">
                <img src="/images/app/project.webp" alt="A project page in Craft MadeBy, with its steps and photos" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
            <figure className="making-shot making-shot--b">
              <div className="device"><div className="device-screen">
                <img src="/images/app/record.webp" alt="The per-step stopwatch recording time on a project" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
            <span className="chip chip--honey making-chip">Time &amp; rows</span>
          </div>
        </div>
      </div>

      <Seam to="var(--sage)" />
    </section>
  );
}
