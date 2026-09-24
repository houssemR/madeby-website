import { useReveal } from '../hooks';
import './Pieces.css';

/* Six real pieces from one crafter's portfolio, with what the app recorded
   about each. Nothing here is a stock photo or a mockup — which is the whole
   argument the page is making. */
const PIECES = [
  { img: 'sweater.webp',  name: 'Sunny Laugh Sweater', craft: 'Knitting & Crochet', meta: 'In progress · 2 steps' },
  { img: 'reindeer.webp', name: 'Rensdyr',             craft: 'Clay & Ceramics',    meta: 'Certified Handmade' },
  { img: 'necklace.webp', name: 'Sten halskæde',       craft: 'Jewelry & Beading',  meta: '3 steps documented' },
  { img: 'socks.webp',    name: 'Sunday Socks',        craft: 'Knitting & Crochet', meta: 'Gifted to grandad' },
  { img: 'dress.webp',    name: 'Lavendel kjole',      craft: 'Knitting & Crochet', meta: 'Made for a niece' },
  { img: 'jumpsuit.webp', name: 'Sparkedragt',         craft: 'Knitting & Crochet', meta: 'Certified Handmade' },
];

export default function Pieces() {
  useReveal();

  return (
    <section className="pieces band band--celadon" aria-label="Pieces made with Craft MadeBy">
      <div className="container pieces-head reveal">
        <hr className="thread-rule" />
        <p className="hand pieces-kicker">
          Every one of these was made by hand, and the app watched it happen.
        </p>
      </div>

      {/* Edge to edge on purpose: the objects should run off the page. */}
      <ul className="pieces-rail bleed reveal">
        {PIECES.map((p) => (
          <li key={p.img} className="pieces-item">
            <figure className="plate plate--tall">
              <img src={`/images/craft/${p.img}`} alt={`${p.name} — ${p.craft}`} loading="lazy" />
            </figure>
            <figcaption>
              <strong>{p.name}</strong>
              <span>{p.craft}</span>
              <em>{p.meta}</em>
            </figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
