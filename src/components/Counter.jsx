import { useReveal } from '../hooks';
import './Counter.css';
import Seam from './Seam';

/* The row counter is the reason a knitter opens the app mid-row, so it gets
   its own band — the darker sage one, the way the store page sets it. */
const POINTS = [
  {
    k: 'Count where the work is',
    v: 'The counter lives on the step you are actually knitting, so row 42 of the sleeve stays with the sleeve.',
  },
  {
    k: 'A second counter for repeats',
    v: 'Raglan every 4th row, cable every 8th. Add a repeat counter beside the main one and let it keep its own place.',
  },
  {
    k: 'Night mode',
    v: 'One enormous number on black. Tap anywhere on the screen to count — no hunting for a button in a dark room.',
  },
  {
    k: 'On your home screen',
    v: 'An Android and iOS widget with the row count, the timer and plus and minus. Count without unlocking the app.',
  },
];

export default function Counter() {
  useReveal();

  return (
    <section className="counter band band--sage" id="counter">
      <div className="container counter-grid">
        <div className="counter-copy reveal">
          <span className="badge">Row counter</span>
          <h2 className="h-lg">
            Never lose
            <span className="em-line">your row.</span>
          </h2>
          <p className="lede">
            Put the phone down mid-row, pick it up three days later, and the
            count is still where you left it — on the step, with the timer and
            the photos, not on a scrap of paper in the yarn basket.
          </p>

          <dl className="counter-list">
            {POINTS.map((p, i) => (
              <div key={p.k} className={`counter-item reveal reveal-delay-${i + 1}`}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="counter-stage reveal reveal-delay-2">
          <figure className="counter-phone">
            <div className="device"><div className="device-screen">
              <img
                src="/images/app/counting.webp"
                alt="Night mode in Craft MadeBy: a single large row count on a black screen"
                loading="lazy" width="640" height="1421"
              />
            </div></div>
          </figure>

          {/* The home-screen widget, lifted out onto its own cut-out card */}
          <figure className="counter-widget card--cut">
            <figcaption className="counter-widget-cap">On your home screen</figcaption>
            <img
              src="/images/app/widget.webp"
              alt="The Craft MadeBy home-screen widget showing a row count, a timer and plus and minus buttons"
              loading="lazy" width="760" height="669"
            />
          </figure>

          <span className="chip chip--celadon counter-chip">Night mode</span>
        </div>
      </div>

      <Seam to="var(--celadon)" dark />
    </section>
  );
}
