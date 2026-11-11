import { useReveal } from '../hooks';
import './Panel.css';
import { IconSeal, IconVote, IconPeople, IconStopwatch } from './Icons';

/* The ladder is a REAL sequence with real, checkable requirements, which is
   the only reason it is numbered. Every figure here comes from the app:
   legacy_room_screen.dart for the rungs, the handmade review migrations for
   the panel rules. Do not round them up to sound better. */
const RUNGS = [
  { rank: 'Crafter',        need: 'Where everyone starts — the moment you open the app.' },
  { rank: 'Artisan',        need: 'Three pieces made solo and documented step by step.' },
  { rank: 'Master Artisan', need: 'Four pieces certified handmade by the panel.' },
  { rank: 'Inspiring Leader', need: 'Ten more reactions and one more certified piece.',
    last: true },
];

const RULES = [
  { icon: <IconPeople size={20} />, title: 'Three leaders, never the maker',
    body: 'Each request goes to three Inspiring Leaders at once, chosen from whoever is carrying the lightest load that day.' },
  { icon: <IconSeal size={20} />, title: 'Who work your craft',
    body: 'A reviewer must hold a certified piece in the same craft as the one they are judging. Potters judge pottery.' },
  { icon: <IconVote size={20} />, title: 'The majority decides',
    body: 'Two votes settle it, approve or decline. A decline comes with a written reason, sent back to the maker.' },
  { icon: <IconStopwatch size={20} />, title: 'Seven days to answer',
    body: 'The seat asks something of you. Going away? Pause it honestly and your queue moves to someone else.' },
];

export default function Panel() {
  useReveal();

  return (
    <section className="section" id="panel">
      <div className="container">
        <div className="patch patch--paper panel-patch reveal">

          <div className="panel-head head head--wide">
            <span className="tag tag--quiet">The Expert Panel</span>
            <h2 className="h-lg">
              Nobody here is appointed.
              <span className="em-line">The seat is earned.</span>
            </h2>
            <p className="lede">
              Craft MadeBy does not decide what counts as handmade — the people
              who make things here do. Certification is voted on by crafters who
              have proved their own work first, and every one of them started
              exactly where you are now.
            </p>
          </div>

          {/* The climb, on its own cloth. Four rungs, in order, each with
              what it actually costs. */}
          <div className="panel-climb">
            <p className="panel-climb-label">The climb, rung by rung</p>
            <ol className="panel-ladder">
              {RUNGS.map((r, i) => (
                <li
                  key={r.rank}
                  className={`panel-rung reveal reveal-delay-${i + 1} ${r.last ? 'panel-rung--last' : ''}`}
                >
                  <span className="panel-step" aria-hidden="true">{i + 1}</span>
                  <h3 className="h-md">{r.rank}</h3>
                  <p>{r.need}</p>
                  {r.last && <span className="panel-unlock">Unlocks the Expert Panel</span>}
                </li>
              ))}
            </ol>
          </div>

          <div className="panel-rules reveal">
            <div className="panel-rules-head">
              <h3 className="h-md">What the seat actually involves</h3>
              <p>
                You open a piece, read it from the first step to the last, and
                say whether the process convinces you. Nothing is anonymous and
                nothing is automatic.
              </p>
            </div>

            <ul className="panel-rule-list">
              {RULES.map((r) => (
                <li key={r.title} className="panel-rule">
                  <span className="panel-rule-icon">{r.icon}</span>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="panel-close reveal">
            It is the top of the ladder, and it is never taken away.
            <strong> Anyone can climb it</strong> — there is no application, no
            invitation and no fee. Make your work, show how it was made, and the
            seat comes to you.
          </p>

        </div>
      </div>
      <span className="thread sew sew--down" aria-hidden="true" />
    </section>
  );
}
