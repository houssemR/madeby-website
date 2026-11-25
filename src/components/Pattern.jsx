import { useReveal } from '../hooks';
import './Pattern.css';
import { IconYarn, IconToolbox } from './Icons';

/* DESIGN A PATTERN — the chart editor (app 1.0.28), with My shelf and
   My toolbox as its companions.

   Everything shown here is one real chart from the app: the hearts-and-
   diamonds colourwork on the phones, the same repeat knitted up 3 x 3, and
   the rows and metres the app wrote for it. Keep it that way — the words on
   the pattern card are the app's own output for this chart, not copy. The
   chart is always the maker's own design; never describe it as importing or
   copying a pattern. */

const POINTS = [
  ['Paint with the yarn you own',
    'Every colour on the palette is a yarn from My shelf, and it knows how many metres you have. The chart warns you before you run short.'],
  ['Start from a base colour',
    'Every stitch you don’t paint is knitted in it, or stays white if you choose none. The base can be a yarn from your shelf, if there is enough of it.'],
  ['Keep it, or cast on',
    'Save it to My charts, add it to a project, or start a project from it. The yarn you use comes off your shelf.'],
];

/* The chart's yarns, sampled from the editor capture. */
const YARN = {
  C: '#F2EADF', // Cream
  P: '#2E4A3A', // Pine
};

/* The first three rows as the chart draws them, stitch 24 on the left to
   stitch 1 on the right. Right-side rows are worked from the right and
   wrong-side rows from the left, so each strip fills in that direction. */
const ROWS = [
  { n: 1, side: 'Right side', text: 'Knit in Pine.',
    cells: 'P'.repeat(24) },
  { n: 2, side: 'Wrong side', text: '*P in Pine, p3 in Cream, rep from * to end.',
    cells: 'PCCC'.repeat(6) },
  { n: 3, side: 'Right side', text: '*K in Pine, k in Cream, rep from * to end.',
    cells: 'CP'.repeat(12) },
];

const NEED = [
  ['Cream',   '#F2EADF', '12.2', '900'],
  ['Pine',    '#2E4A3A', '6.2',  '450'],
  ['Rust',    '#9A4A33', '2.9',  '225'],
  ['Mustard', '#D8A657', '1.2',  '225'],
  ['Sage',    '#8FA58C', '0.6',  '225'],
];

const KIT = [
  { icon: <IconYarn size={20} />, title: 'My shelf',
    body: 'Your yarn stash, with the length and colour of every yarn. Add yarn from your shelf to any project or step, and the amount you use is taken off the shelf.' },
  { icon: <IconToolbox size={20} />, title: 'My toolbox',
    body: 'The tools you own, each with its icon. Pick them on any project or step instead of typing them in again.' },
];

export default function Pattern() {
  useReveal();

  let rowStart = 0;

  return (
    <section className="section" id="pattern">
      <div className="container">
        <div className="patch patch--paper pattern-patch reveal">

          <div className="pattern-top">
            <div className="pattern-head head head--wide">
              <span className="tag tag--quiet">Design a pattern</span>
              <h2 className="h-lg">
                Chart it stitch by stitch.
                <span className="em-line">See it knitted up.</span>
              </h2>
              <p className="lede">
                Draw a pattern of your own on a grid — knit and purl,
                decreases and increases, cables, yarn-overs and colourwork.
                Paint it in the yarn on your shelf, see how it knits up, and
                the app writes it out for you, row by row.
              </p>
            </div>

            <div className="pattern-stage">
              <figure className="pattern-phone pattern-phone--a">
                <div className="device"><div className="device-screen">
                  <img src="/images/pattern/chart.webp" alt="The chart editor in Craft MadeBy: a hearts-and-diamonds colourwork chart, 24 stitches by 30 rows, with the stitch symbols and the shelf yarns underneath" loading="lazy" width="640" height="1351" />
                </div></div>
              </figure>
              <figure className="pattern-phone pattern-phone--b">
                <div className="device"><div className="device-screen">
                  <img src="/images/pattern/knitted.webp" alt="The same chart knitted up: a realistic preview of one repeat in cream, pine, rust, mustard and sage" loading="lazy" width="640" height="1351" />
                </div></div>
              </figure>
              <span className="chip chip--honey pattern-chip">Your own design</span>
            </div>

            <dl className="pattern-list">
              {POINTS.map(([k, v], i) => (
                <div key={k} className={`pattern-item reveal reveal-delay-${i + 1}`}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* From chart to cloth: the repeat knitted up, and the pattern the
              app wrote for it. On its own cut of cloth, like the Panel's
              ladder, so the paper patch has an anchor. */}
          <div className="pattern-made reveal">
            <div className="pattern-half">
              <h3 className="h-md">See it knitted up</h3>
              <p>A realistic knitted preview of one repeat, or the repeat tiled 3 × 3.</p>
              <figure className="pattern-swatch">
                <img src="/images/pattern/swatch.webp" alt="The hearts-and-diamonds chart knitted up in Craft MadeBy, the repeat tiled three by three" loading="lazy" width="840" height="797" />
                <figcaption>The chart above, tiled 3 × 3</figcaption>
              </figure>
            </div>

            <div className="pattern-half">
              <h3 className="h-md">Written out, row by row</h3>
              <p>From your own gauge, with the yarn you need set against what you have.</p>
              <div className="pattern-card reveal reveal-delay-2">
                <p className="pattern-card-label">The pattern</p>
                <ul className="pattern-setup">
                  <li>Cast on 24 sts.</li>
                  <li>22 sts and 29 rows to 10 cm, worked in stockinette.</li>
                </ul>

                <ol className="pattern-rows">
                  {ROWS.map((r) => {
                    const start = rowStart;
                    rowStart += r.cells.length;
                    const rs = r.side === 'Right side';
                    return (
                      <li key={r.n} className="pattern-row">
                        <p>
                          <span className="pattern-row-n">Row {r.n}</span>
                          <span className="pattern-row-side">{r.side}</span>
                        </p>
                        <p className="pattern-row-text">{r.text}</p>
                        <span className="pattern-strip" aria-hidden="true">
                          {[...r.cells].map((c, i) => (
                            <i
                              key={i}
                              style={{
                                background: YARN[c],
                                '--k': start + (rs ? r.cells.length - 1 - i : i),
                              }}
                            />
                          ))}
                        </span>
                      </li>
                    );
                  })}
                </ol>

                <p className="pattern-card-label">Yarn you need</p>
                <table className="pattern-need">
                  <tbody>
                    {NEED.map(([name, hex, need, have]) => (
                      <tr key={name}>
                        <th scope="row"><i style={{ background: hex }} aria-hidden="true" />{name}</th>
                        <td>{need} m</td>
                        <td>you have {have} m</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* The companions: what you own, kept once. */}
          <div className="pattern-kit reveal">
            <div className="pattern-kit-head">
              <h3 className="h-md">What you own, kept once</h3>
              <p>
                Your yarn and your tools are kept in the app, so a project, a
                step or a chart can draw on what you already have.
              </p>
            </div>
            <ul className="pattern-kit-list">
              {KIT.map((k) => (
                <li key={k.title} className="pattern-kit-item">
                  <span className="pattern-kit-icon">{k.icon}</span>
                  <div>
                    <h4>{k.title}</h4>
                    <p>{k.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <span className="thread sew sew--down" aria-hidden="true" />
    </section>
  );
}
