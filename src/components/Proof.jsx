import { useReveal } from '../hooks';
import './Proof.css';
import Seam from './Seam';
import { IconSeal, IconVote, IconGift, IconPeople } from './Icons';

const RANKS = ['Crafter', 'Artisan', 'Master', 'Inspiring Leader'];

const PILLARS = [
  {
    icon: <IconSeal size={22} />,
    title: 'Certified Handmade',
    body: 'Submit a finished piece with its steps and its hours. Pass, and it is sealed in wax with your name — the one claim on the internet that a photo alone cannot make.',
  },
  {
    icon: <IconVote size={22} />,
    title: 'The Expert Panel',
    body: 'Certification is not decided by us. Crafters who have earned their standing review the work and vote, and you can earn a seat on that panel yourself.',
  },
  {
    icon: <IconGift size={22} />,
    title: 'Giveaways and gifts',
    body: 'Wrap a finished piece and give it away, or send it to one person. Once it is accepted, a private thread opens between the two of you.',
  },
  {
    icon: <IconPeople size={22} />,
    title: 'Joint projects and groups',
    body: 'Make something with other people, step by step, or keep a private group for a class or a guild. Discover is where the rest of it surfaces.',
  },
];

export default function Proof() {
  useReveal();

  return (
    <section className="proof band band--sage" id="proof">
      <div className="container">
        <div className="proof-head reveal">
          <span className="badge">Certified handmade</span>
          <h2 className="h-lg">
            Anyone can say handmade.
            <span className="em-line">You can prove it.</span>
          </h2>
          <p className="lede">
            Because the app watched the piece being made — the steps, the
            photos, the recorded hours — it can vouch for it afterwards. That is
            the part a finished-object photo can never do.
          </p>
        </div>

        <div className="proof-body">
          <ul className="proof-pillars">
            {PILLARS.map((p, i) => (
              <li key={p.title} className={`card--onsage proof-pillar reveal reveal-delay-${i + 1}`}>
                <span className="proof-icon">{p.icon}</span>
                <h3 className="h-md">{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>

          <div className="proof-shots reveal reveal-delay-2">
            <figure className="proof-shot proof-shot--a">
              <div className="device"><div className="device-screen">
                <img src="/images/app/portfolio.webp" alt="A Craft MadeBy portfolio with hours honed, masterpieces and a Certified Handmade seal" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
            <figure className="proof-shot proof-shot--b">
              <div className="device"><div className="device-screen">
                <img src="/images/app/giveaway.webp" alt="A wrapped giveaway in Craft MadeBy" loading="lazy" width="640" height="1421" />
              </div></div>
            </figure>
          </div>
        </div>

        {/* The ranks, strung on the thread */}
        <div className="proof-ranks reveal">
          <p className="proof-ranks-label">Your standing grows with the work</p>
          <ol className="proof-rank-list">
            {RANKS.map((r) => (
              <li key={r}><span>{r}</span></li>
            ))}
          </ol>
        </div>
      </div>

      <Seam to="var(--celadon)" dark />
    </section>
  );
}
