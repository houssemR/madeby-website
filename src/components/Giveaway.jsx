import { useReveal } from '../hooks';
import './Giveaway.css';

/* The only flow in the app with two people in it, so it is drawn as a
   hand-over: the thread runs down the middle and each step sits on the side
   of whoever is acting. Wording follows the app's own screen
   (giveawayFlowStep1–5 in app_en.arb), with the finished piece at the front. */
const STEPS = [
  { who: 'You',  title: 'Finish the piece',
    body: 'A giveaway can only start from a completed project — one with its steps and its recorded hours already in place. There is nothing to give away until the making is done.' },
  { who: 'You',  title: 'Wrap it up',
    body: 'Choose the piece and write what its next owner should know. Pick the paper, the bow and the confetti, then publish it.' },
  { who: 'You',  title: 'Post it to Giveaways',
    body: 'It appears in the Giveaways tab for the whole community. Nothing here is for sale and no money changes hands — this is a gift.' },
  { who: 'They', title: 'Crafters ask for it',
    body: 'Every request arrives with a message. You can look at who is asking and what they make before you decide anything.' },
  { who: 'You',  title: 'You choose who it goes to',
    body: 'Pick one. Everyone else is told kindly, and the piece is marked as spoken for.' },
];

export default function Giveaway() {
  useReveal();

  return (
    <section className="section" id="giveaway">
      <div className="container">
        <div className="patch patch--cloth give-patch reveal">
          <div className="give-top">
            <div className="give-head head head--wide">
              <span className="tag tag--quiet">Giveaways</span>
              <h2 className="h-lg">
                A craft is not finished
                <span className="em-line">until it finds a home.</span>
              </h2>
              <p className="lede">
                When a piece is done and you would rather someone else had it,
                you can give it away. Here is the whole hand-over, from the
                finished project to the moment it lands on somebody's table.
              </p>
            </div>

            <div className="give-shots">
              <figure className="give-shot give-shot--a">
                <div className="device"><div className="device-screen">
                  <img src="/images/app/gift.webp" alt="The wrapping wizard in Craft MadeBy: choosing a bow and a colour before publishing a giveaway" loading="lazy" width="640" height="1421" />
                </div></div>
              </figure>
              <figure className="give-shot give-shot--b">
                <div className="device"><div className="device-screen">
                  <img src="/images/app/giveaway.webp" alt="The Giveaways tab, where offered pieces are listed for the community" loading="lazy" width="640" height="1421" />
                </div></div>
              </figure>
            </div>
          </div>

          <ol className="give-flow">
            <span className="give-thread sew sew--down" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li key={s.title} className={`give-step give-step--${i % 2 ? 'right' : 'left'} reveal reveal--${i % 2 ? 'right' : 'left'} reveal-delay-${(i % 4) + 1}`}>
                <span className="give-node pop" aria-hidden="true" />
                <div className="give-card">
                  <span className={`give-who give-who--${s.who.toLowerCase()}`}>{s.who}</span>
                  <h3 className="h-md">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}

            {/* The two sides meet here, so the last step sits on the thread
                itself rather than on either side of it. */}
            <li className="give-step give-step--end reveal">
              <span className="give-node give-node--end pop" aria-hidden="true" />
              <div className="give-card give-card--end">
                <span className="give-who give-who--both">Both</span>
                <h3 className="h-md">A private thread, until it arrives</h3>
                <p>
                  Accepting opens a conversation only the two of you can see.
                  Agree the hand-over there and nowhere else. When it arrives
                  they mark it received, which closes the thread and removes
                  the address you shared.
                </p>
              </div>
            </li>
          </ol>

          <p className="give-quote">
            “A craft is not complete until it finds its home.”
            <span>Master Artisan proverb, as the app puts it</span>
          </p>
        </div>
      </div>
      <span className="thread sew sew--down" aria-hidden="true" />
    </section>
  );
}
