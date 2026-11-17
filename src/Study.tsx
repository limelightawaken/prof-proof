import { useEffect, useState } from "react";
import { conceptMap, fields, formulaNotes } from "./data";
import { Formula } from "./Formula";
import { cardStatus, dueLabel, schedule } from "./srs";
import type { Deck, Grade } from "./types";

const GRADES: { id: Grade; key: string; label: string; hint: string }[] = [
  { id: "again", key: "1", label: "Again", hint: "I couldn't say it" },
  { id: "hard", key: "2", label: "Hard", hint: "I said it, slowly" },
  { id: "good", key: "3", label: "Good", hint: "I can say it" },
  { id: "easy", key: "4", label: "Easy", hint: "I could teach it" },
];

export function Study({
  title,
  ids,
  deck,
  onGrade,
  onExit,
}: {
  title: string;
  ids: string[];
  deck: Deck;
  onGrade: (id: string, grade: Grade) => void;
  onExit: () => void;
}) {
  const [queue, setQueue] = useState(() => ids.filter((id) => conceptMap.has(id)));
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ again: 0, hard: 0, good: 0, easy: 0 });

  const currentId = queue[0];
  const concept = currentId ? conceptMap.get(currentId) : undefined;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea")) return;
      if (event.key === "Escape") {
        onExit();
        return;
      }
      if (!concept) return;
      const typingOnButton = Boolean(target?.closest("button"));
      if ((event.key === " " || event.key === "Enter") && !typingOnButton) {
        event.preventDefault();
        setFlipped((open) => !open);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        skip(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        skip(-1);
      } else if (flipped && !typingOnButton) {
        const grade = GRADES.find((item) => item.key === event.key);
        if (grade) {
          event.preventDefault();
          rate(grade.id);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function skip(direction: 1 | -1) {
    setFlipped(false);
    setQueue((cards) => {
      if (cards.length < 2) return cards;
      if (direction === 1) return cards.slice(1).concat(cards[0]);
      return [cards[cards.length - 1], ...cards.slice(0, -1)];
    });
  }

  function rate(grade: Grade) {
    const id = queue[0];
    if (!id) return;
    onGrade(id, grade);
    setTally((count) => ({ ...count, [grade]: count[grade] + 1 }));
    setFlipped(false);
    setQueue((cards) => {
      const [first, ...rest] = cards;
      if (grade !== "again") return rest;
      const next = rest.slice();
      next.splice(Math.min(2, next.length), 0, first);
      return next;
    });
  }

  if (!concept) {
    const rated = tally.again + tally.hard + tally.good + tally.easy;
    return (
      <section className="done">
        <p className="eyebrow">Sitting complete</p>
        <h1>{rated === 0 ? "Nothing was waiting in this sitting." : "Those cards are put away."}</h1>
        <p className="lede">
          {rated === 0
            ? "Pick another shelf, or come back when a review is due."
            : "Ratings stay on this device. Due cards return on their own."}
        </p>
        {rated > 0 && (
          <ul>
            {GRADES.map((grade) => (
              <li key={grade.id}>
                <span>{grade.label}</span>
                <span>{tally[grade.id]}</span>
              </li>
            ))}
          </ul>
        )}
        <button className="primary" type="button" onClick={onExit}>
          Back to the desk
        </button>
      </section>
    );
  }

  const status = cardStatus(deck[concept.id]);
  const memory = deck[concept.id];

  return (
    <section className="study">
      <div className="study-top">
        <div>
          <p className="eyebrow">{title}</p>
          <h2>
            {queue.length} still in this sitting
          </h2>
        </div>
        <div className="row-actions">
          <button className="ghost" type="button" onClick={() => skip(-1)} disabled={queue.length < 2}>
            Previous
          </button>
          <button className="ghost" type="button" onClick={() => skip(1)} disabled={queue.length < 2}>
            Skip
          </button>
          <button className="ghost" type="button" onClick={onExit}>
            Close
          </button>
        </div>
      </div>

      <article className="card">
        <div className="card-top">
          <span className="meta">
            {fields.find((field) => field.id === concept.field)?.name ?? concept.field}
          </span>
          <span className={`pill ${status}`}>{status}</span>
        </div>
        <h1>{concept.name}</h1>
        {!flipped ? (
          <>
            <p className="ask">{concept.ask}</p>
            <p className="front-note">Say the idea in your own words, then turn the card.</p>
          </>
        ) : (
          <>
            <section className="block">
              <h3>In one sentence</h3>
              <p className="gist">{concept.gist}</p>
            </section>
            <section className="block">
              <h3>A picture</h3>
              <p>{concept.picture}</p>
            </section>
            <section className="block">
              <h3>The real statement</h3>
              <p>{concept.detail}</p>
            </section>
            {concept.formula && (
              <section className="block">
                <h3>In symbols</h3>
                <Formula tex={concept.formula} />
                {concept.formulaSays && <p className="says">{concept.formulaSays}</p>}
              </section>
            )}
            {concept.formula && formulaNotes[concept.id] && (
              <>
                <section className="block">
                  <h3>The notation</h3>
                  <p>{formulaNotes[concept.id].notation}</p>
                </section>
                <section className="block">
                  <h3>The proof</h3>
                  <p>{formulaNotes[concept.id].proof}</p>
                </section>
              </>
            )}
            <section className="block">
              <h3>Easy to miss</h3>
              <p>{concept.pitfall}</p>
            </section>
            <section className="keep">
              <h3 className="kicker">Keep this line</h3>
              <p>{concept.remember}</p>
              <span className="endmark" aria-hidden="true">∎</span>
            </section>
          </>
        )}
      </article>

      <div className="dock">
        {!flipped ? (
          <button className="turn" type="button" onClick={() => setFlipped(true)}>
            Turn the card
          </button>
        ) : (
          <>
            <button className="texty" type="button" onClick={() => setFlipped(false)}>
              Show the question
            </button>
            <div className="grades">
              {GRADES.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  className={`grade ${grade.id}`}
                  onClick={() => rate(grade.id)}
                >
                  <b>
                    {grade.label} · {grade.key}
                  </b>
                  <small>{grade.hint}</small>
                  <small>{dueLabel(schedule(memory, grade.id).interval, grade.id)}</small>
                </button>
              ))}
            </div>
          </>
        )}
        <p className="keys">Space turns the card. 1–4 rate it. Arrows move without rating. Esc closes.</p>
      </div>
    </section>
  );
}
