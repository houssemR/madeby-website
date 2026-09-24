import { useReveal } from '../hooks';
import './Corner.css';
import Seam from './Seam';
import { ALL_HATS, HAT_COLLECTIONS } from './hats';

const MASCOTS = [
  { img: 'purl.png',   name: 'Yarnia',  craft: 'Knitting & Crochet' },
  { img: 'spool.png',  name: 'Spoolie', craft: 'Sewing & Textiles' },
  { img: 'hoopla.png', name: 'Hoopla',  craft: 'Embroidery' },
  { img: 'pinch.png',  name: 'Potsy',   craft: 'Clay & Ceramics' },
  { img: 'bijou.png',  name: 'Bijou',   craft: 'Jewelry & Beading' },
];

export default function Corner() {
  useReveal();

  return (
    <section className="corner band band--celadon" id="corner">
      <div className="container">
        <div className="corner-head reveal">
          <span className="badge">Your corner</span>
          <h2 className="h-lg corner-title">
            A corner that is
            <span className="em-line">truly yours.</span>
          </h2>
          <p className="lede">
            Pick the theme of your craft and a hand-drawn companion moves in.
            Answer the day's five questions, earn points, and spend them on
            something ridiculous to put on its head.
          </p>
        </div>

        <div className="corner-body">
          {/* Left: the real Theme tab */}
          <div className="corner-shots reveal">
            <figure className="corner-shot corner-shot--a">
              <div className="device"><div className="device-screen">
                <img src="/images/app/theme.webp" alt="The Yarnia corner in Craft MadeBy, with the costume card and the day's round" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
            <figure className="corner-shot corner-shot--b">
              <div className="device"><div className="device-screen">
                <img src="/images/app/cloth.webp" alt="Card cloths in Craft MadeBy, dressing the portfolio card" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
            <span className="chip chip--honey corner-chip">Earn points daily</span>
          </div>

          {/* Right: what actually happens there */}
          <div className="corner-facts">
            <article className="card corner-fact reveal reveal-delay-1">
              <span className="corner-fact-num">5</span>
              <div>
                <h3 className="h-md">questions a day</h3>
                <p>A fresh round every morning — stitch lore, clay facts, the history of your own craft. Right answers earn points.</p>
              </div>
            </article>

            <article className="card corner-fact reveal reveal-delay-2">
              <span className="corner-fact-num">7<small>→+10</small></span>
              <div>
                <h3 className="h-md">days in a row</h3>
                <p>Play seven days running and the streak pays a ten-point bonus. Miss a day and it simply starts again.</p>
              </div>
            </article>

            <article className="card corner-fact reveal reveal-delay-3">
              <span className="corner-fact-num">26</span>
              <div>
                <h3 className="h-md">card cloths</h3>
                <p>Dress the portfolio card people see when they visit you — a yarn basket, a mitten line, a tulip bunch.</p>
              </div>
            </article>

            <div className="corner-mascots reveal reveal-delay-4">
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
        </div>

        {/* The forty hats, drawn rather than claimed */}
        <div className="corner-shelf reveal">
          <div className="corner-shelf-head">
            <h3 className="h-md">Forty hats, eight collections</h3>
            <p>Every one of them, earned with points from the daily round.</p>
          </div>
          <ul className="corner-hats">
            {ALL_HATS.map((id) => (
              <li key={id}>
                <img src={`/images/hats/${id}.svg`} alt="" loading="lazy" />
              </li>
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
      </div>

      <Seam to="var(--sage)" />
    </section>
  );
}
