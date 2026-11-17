import { notationGuide } from "./data/guide";
import { Formula } from "./Formula";

export function NotationGuide({ onStudy, onOpen }: { onStudy: () => void; onOpen: () => void }) {
  return (
    <section className="band" aria-labelledby="notation-heading">
      <p className="eyebrow">Learning guide</p>
      <h2 id="notation-heading">How to read the notation.</h2>
      <p className="lede">
        The marks are a small dialect of English. Read a formula from left to right, with the words put back in. The same ideas are flashcards on the Notation shelf when you want to practice saying them.
      </p>
      <div className="actions">
        <button className="primary" type="button" onClick={onStudy}>
          Study the notation cards
        </button>
        <button className="ghost" type="button" onClick={onOpen}>
          Open the notation shelf
        </button>
      </div>
      <div className="guide">
        {notationGuide.map((group) => (
          <article key={group.id} className="guide-group" aria-labelledby={`guide-${group.id}`}>
            <h3 id={`guide-${group.id}`}>{group.title}</h3>
            <p className="lead">{group.lead}</p>
            {group.readings?.map((reading) => (
              <div key={reading.id} className="reading">
                <Formula tex={reading.tex} />
                <p className="aloud">{reading.aloud}</p>
                <p>{reading.gloss}</p>
              </div>
            ))}
            {group.items.map((item) => (
              <div key={item.id} className="entry">
                <div className="symbol">
                  {item.tex ? (
                    <Formula tex={item.tex} display={false} />
                  ) : (
                    <span className="plain">{item.plain}</span>
                  )}
                </div>
                <div>
                  <p className="speak">{item.speak}</p>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
