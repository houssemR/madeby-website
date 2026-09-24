import { useReveal } from '../hooks';
import './Making.css';
import { IconCamera, IconSteps, IconStopwatch, IconLock } from './Icons';

/* These four really are a sequence — a piece moves through them in order —
   so they are numbered and strung along one thread. */
const STEPS = [
  { n: '01', icon: <IconCamera size={20} />, title: 'Start with a photo',
    body: 'A photo and a name is all it takes. Already finished something? Add it straight to your portfolio.' },
  { n: '02', icon: <IconSteps size={20} />, title: 'Break it into steps',
    body: 'Sleeves, glaze, hem, clasp — each step keeps its own photos, materials, tools and costs.' },
  { n: '03', icon: <IconStopwatch size={20} />, title: 'Record the real hours',
    body: 'A stopwatch runs per step. No guessing at the end what a project actually cost you in time.' },
  { n: '04', icon: <IconLock size={20} />, title: 'Decide who sees it',
    body: 'Public, connections only, inside a private group, or nobody at all. Every piece answers separately.' },
];

export default function Making() {
  useReveal();

  return (
    <section className="section" id="making">
      <div className="container">
        <div className="patch patch--cloth making-patch reveal">
          <div className="making-head head head--wide">
            <span className="tag tag--quiet">The making</span>
            <h2 className="h-lg">
              A piece, remembered
              <span className="em-line">step by step.</span>
            </h2>
            <p className="lede">
              Most of what you make disappears into a camera roll. Here every
              project keeps its own thread — the photos, the yarn, the hours,
              the mistakes you fixed — and that thread is what turns into
              proof later.
            </p>
          </div>

          <ol className="making-steps">
            <span className="making-thread" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li key={s.n} className={`making-step reveal reveal-delay-${i + 1}`}>
                <span className="making-node">{s.icon}</span>
                <span className="making-num">{s.n}</span>
                <h3 className="h-md">{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="making-shots reveal reveal-delay-2">
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
      <span className="thread" aria-hidden="true" />
    </section>
  );
}
