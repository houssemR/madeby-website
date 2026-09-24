import { useReveal } from '../hooks';
import './Corner.css';
import { ALL_HATS, HAT_COLLECTIONS } from './hats';

const MASCOTS = [
  { img: 'purl.png',   name: 'Yarnia',  craft: 'Knitting & Crochet' },
  { img: 'spool.png',  name: 'Spoolie', craft: 'Sewing & Textiles' },
  { img: 'hoopla.png', name: 'Hoopla',  craft: 'Embroidery' },
  { img: 'pinch.png',  name: 'Potsy',   craft: 'Clay & Ceramics' },
  { img: 'bijou.png',  name: 'Bijou',   craft: 'Jewelry & Beading' },
];

const FACTS = [
  ['5',  'questions a day', 'A fresh round every morning — stitch lore, clay facts, the history of your own craft. Right answers earn points.'],
  ['7',  'days in a row',   'Play seven days running and the streak pays a ten-point bonus. Miss a day and it simply starts again.'],
  ['26', 'card cloths',     'Dress the portfolio card people see when they visit you — a yarn basket, a mitten line, a tulip bunch.'],
];

export default function Corner() {
  useReveal();

  return (
    <section className="section corner" id="corner">
      <div className="container">
        <div className="corner-top reveal">
          <div className="corner-head head head--wide">
            <span className="tag tag--quiet">Your corner</span>
            <h2 className="h-lg">
              The part that is
              <span className="em-line">purely for fun.</span>
            </h2>
            <p className="lede">
              Pick the theme of your craft and a hand-drawn companion moves in.
              Answer the day's five questions, earn points, then spend them on
              something ridiculous to put on its head — and dye it whatever
              colour you like.
            </p>
          </div>

          <div className="corner-film">
            <div className="device"><div className="device-screen">
              <video
                src="/videos/hats.mp4"
                poster="/videos/hats-poster.jpg"
                autoPlay muted loop playsInline
                aria-label="Trying on hats in Craft MadeBy and dyeing them different colours"
              />
            </div></div>
            <span className="chip chip--honey corner-chip">Try it on · dye it</span>
          </div>
        </div>

        <ul className="corner-facts">
          {FACTS.map(([n, title, body], i) => (
            <li key={n} className={`corner-fact reveal reveal-delay-${i + 1}`}>
              <span className="corner-num">{n}</span>
              <h3 className="h-md">{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>

        {/* The haberdashery drawer: all forty, drawn rather than claimed. */}
        <div className="patch patch--cloth corner-tray reveal">
          <div className="corner-tray-head">
            <h3 className="h-md">Forty hats, eight collections</h3>
            <p>Every one of them earned with points from the daily round.</p>
          </div>
          <ul className="corner-hats">
            {ALL_HATS.map((id) => (
              <li key={id}><img src={`/images/hats/${id}.svg`} alt="" loading="lazy" /></li>
            ))}
          </ul>
          <ul className="corner-collections">
            {HAT_COLLECTIONS.map((c) => (
              <li key={c.name}>
                <span className={`chip${c.premium ? ' chip--honey' : ''}`}>{c.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="corner-mascots reveal">
          <p className="corner-mascots-label">Five themes, five companions — or none at all</p>
          <ul>
            {MASCOTS.map((m) => (
              <li key={m.name}>
                <img src={`/images/mascots/${m.img}`} alt={`${m.name}, the ${m.craft} mascot`} loading="lazy" />
                <span>{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="thread" aria-hidden="true" />
    </section>
  );
}
