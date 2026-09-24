import { useReveal } from '../hooks';
import './Proof.css';
import { IconSeal, IconVote, IconGift, IconPeople } from './Icons';

const RANKS = ['Crafter', 'Artisan', 'Master', 'Inspiring Leader'];

const PILLARS = [
  { icon: <IconSeal size={20} />, title: 'Certified Handmade',
    body: 'Submit a finished piece with its steps and its hours. Pass, and it is sealed in wax with your name.' },
  { icon: <IconVote size={20} />, title: 'The Expert Panel',
    body: 'Certification is not decided by us. Crafters who have earned their standing review the work and vote.' },
  { icon: <IconGift size={20} />, title: 'A project book',
    body: 'Export a piece as a PDF — the story, every step with its photos, the materials and the insights. Premium.' },
  { icon: <IconPeople size={20} />, title: 'Joint projects',
    body: 'Make something with other people step by step, or keep a private group for a class or a guild.' },
];

export default function Proof() {
  useReveal();

  return (
    <section className="section" id="proof">
      <div className="container">
        <div className="patch patch--dark proof-patch reveal">
          <div className="proof-grid">
            <div className="proof-copy">
              <div className="proof-head head head--wide">
                <span className="tag tag--honey">Certified handmade</span>
                <h2 className="h-lg">
                  Anyone can say handmade.
                  <span className="em-line">You can prove it.</span>
                </h2>
                <p className="lede">
                  Because the app watched the piece being made — the steps, the
                  photos, the recorded hours — it can vouch for it afterwards.
                  That is the part a finished-object photo can never do.
                </p>
              </div>

              <ul className="proof-pillars">
                {PILLARS.map((p, i) => (
                  <li key={p.title} className={`proof-pillar reveal reveal-delay-${i + 1}`}>
                    <span className="proof-icon">{p.icon}</span>
                    <h3 className="h-md">{p.title}</h3>
                    <p>{p.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="proof-stage">
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

              {/* The seal itself, pressed under the screens that earn it. */}
              <figure className="proof-seal press">
                <img src="/images/seal.png" alt="The Craft MadeBy wax seal, pressed on a certified piece" width="440" height="440" loading="lazy" />
                <figcaption>
                  <strong>Certified Handmade</strong>
                  <span>Sealed in wax, with your name and the date</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="proof-ranks reveal">
            <p className="proof-ranks-label">Your standing grows with the work</p>
            <ol className="proof-rank-list sew">
              {RANKS.map((r) => <li key={r}><span>{r}</span></li>)}
            </ol>
          </div>
        </div>
      </div>
      <span className="thread sew sew--down" aria-hidden="true" />
    </section>
  );
}
