import { useReveal } from '../hooks';
import './Counter.css';

const POINTS = [
  ['Count where the work is', 'The counter lives on the step you are actually knitting, so row 42 of the sleeve stays with the sleeve.'],
  ['A second counter for repeats', 'Raglan every 4th row, cable every 8th. Add a repeat counter beside the main one and let it keep its own place.'],
  ['Night mode', 'One enormous number on black. Tap anywhere to count — no hunting for a button in a dark room.'],
  ['On your home screen', 'An Android and iOS widget with the row count, the timer and plus and minus. Count without unlocking the app.'],
];

export default function Counter() {
  useReveal();

  return (
    <section className="section" id="counter">
      <div className="container">
        <div className="patch patch--dark counter-patch reveal">
          <div className="counter-grid">
            <div className="counter-copy">
              <div className="counter-head head">
                <span className="tag tag--honey">Row counter</span>
                <h2 className="h-lg">
                  Never lose
                  <span className="em-line">your row.</span>
                </h2>
                <p className="lede">
                  Put the phone down mid-row, pick it up three days later, and
                  the count is still where you left it — on the step, with the
                  timer and the photos, not on a scrap of paper in the yarn
                  basket.
                </p>
              </div>

              <dl className="counter-list">
                {POINTS.map(([k, v], i) => (
                  <div key={k} className={`counter-item reveal reveal-delay-${i + 1}`}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="counter-stage">
              <figure className="counter-phone">
                <div className="device"><div className="device-screen">
                  <img
                    src="/images/app/counting.webp"
                    alt="Night mode in Craft MadeBy: a single large row count on a black screen"
                    loading="lazy" width="640" height="1421"
                  />
                </div></div>
              </figure>
              <figure className="counter-widget">
                <figcaption>On your home screen</figcaption>
                <img
                  src="/images/app/widget.webp"
                  alt="The Craft MadeBy home-screen widget showing a row count, a timer and plus and minus buttons"
                  loading="lazy" width="760" height="669"
                />
              </figure>
              <span className="chip chip--cloth counter-chip">Night mode</span>
            </div>
          </div>
        </div>
      </div>
      <span className="thread" aria-hidden="true" />
    </section>
  );
}
