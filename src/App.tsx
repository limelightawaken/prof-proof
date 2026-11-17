import { useEffect, useMemo, useState } from "react";
import { concepts, conceptsIn, fields, formulaNotes } from "./data";
import { NotationGuide } from "./NotationGuide";
import { cardStatus, schedule } from "./srs";
import { loadDeck, loadTheme, saveDeck, saveTheme, type Theme } from "./storage";
import { Study } from "./Study";
import type { CardStatus, Deck, Field, Grade } from "./types";

type ReturnTo = { name: "home" } | { name: "field"; fieldId: string };

type Route =
  | { name: "home" }
  | { name: "field"; fieldId: string }
  | { name: "study"; title: string; ids: string[]; returnTo: ReturnTo };

const FILTERS: { id: "all" | CardStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "due", label: "Due" },
  { id: "learning", label: "Learning" },
  { id: "solid", label: "Solid" },
];

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function rotateTo(ids: string[], id: string) {
  const index = ids.indexOf(id);
  if (index <= 0) return ids;
  return ids.slice(index).concat(ids.slice(0, index));
}

export function App() {
  const [theme, setTheme] = useState<Theme>(() => loadTheme() ?? systemTheme());
  const [deck, setDeck] = useState<Deck>(() => loadDeck());
  const [route, setRoute] = useState<Route>({ name: "home" });
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveDeck(deck);
  }, [deck]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const stats = useMemo(() => {
    const count = { solid: 0, learning: 0, due: 0, fresh: 0 };
    for (const concept of concepts) {
      const status = cardStatus(deck[concept.id], now);
      if (status === "solid") count.solid += 1;
      else if (status === "learning") count.learning += 1;
      else if (status === "due") count.due += 1;
      else count.fresh += 1;
    }
    return count;
  }, [deck, now]);

  const results = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [];
    return concepts.filter((concept) => {
      const field = fields.find((item) => item.id === concept.field);
      const haystack = [
        concept.name,
        concept.ask,
        concept.gist,
        concept.detail,
        concept.picture,
        concept.remember,
        concept.pitfall,
        field?.name ?? "",
        formulaNotes[concept.id]?.notation ?? "",
        formulaNotes[concept.id]?.proof ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    });
  }, [query]);

  function grade(id: string, mark: Grade) {
    setNow(Date.now());
    setDeck((current) => ({ ...current, [id]: schedule(current[id], mark) }));
  }

  function start(title: string, ids: string[], returnTo: ReturnTo) {
    if (ids.length === 0) return;
    setRoute({ name: "study", title, ids, returnTo });
  }

  function freshTen() {
    const groups = fields.map((field) =>
      conceptsIn(field.id)
        .filter((concept) => cardStatus(deck[concept.id], now) === "new")
        .map((concept) => concept.id),
    );
    const ids: string[] = [];
    let moved = true;
    while (ids.length < 10 && moved) {
      moved = false;
      for (const group of groups) {
        const next = group.shift();
        if (!next) continue;
        ids.push(next);
        moved = true;
        if (ids.length === 10) break;
      }
    }
    start("Ten new ideas", ids, { name: "home" });
  }

  function exitStudy() {
    if (route.name !== "study") {
      setRoute({ name: "home" });
      return;
    }
    setRoute(route.returnTo);
  }

  const dueIds = concepts
    .filter((concept) => cardStatus(deck[concept.id], now) === "due")
    .map((concept) => concept.id);

  return (
    <div className="app">
      <div className="wrap">
        <header className="mast">
          <button className="brand" type="button" onClick={() => setRoute({ name: "home" })}>
            <span className="tomb" aria-hidden="true">∎</span>
            Prof Proof
          </button>
          <button
            className="ghost"
            type="button"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? "Dark paper" : "Light paper"}
          </button>
        </header>

        <main>
          {route.name === "home" && (
            <Home
              query={query}
              setQuery={setQuery}
              stats={stats}
              dueCount={dueIds.length}
              onReview={() => start("Due for review", dueIds, { name: "home" })}
              onFresh={freshTen}
              freshCount={stats.fresh}
              results={results}
              onOpenField={(fieldId) => {
                setFilter("all");
                setRoute({ name: "field", fieldId });
              }}
              onOpenConcept={(id) =>
                start("Search", rotateTo(results.map((concept) => concept.id), id), { name: "home" })
              }
              onStudyNotation={() =>
                start(
                  "Notation",
                  conceptsIn("notation").map((concept) => concept.id),
                  { name: "home" },
                )
              }
              deck={deck}
              now={now}
              onClear={() => {
                if (window.confirm("Clear every rating stored on this device?")) setDeck({});
              }}
            />
          )}

          {route.name === "field" && (
            <FieldShelf
              fieldId={route.fieldId}
              deck={deck}
              now={now}
              filter={filter}
              setFilter={setFilter}
              onBack={() => setRoute({ name: "home" })}
              onStudy={(title, ids) => start(title, ids, { name: "field", fieldId: route.fieldId })}
            />
          )}

          {route.name === "study" && (
            <Study
              key={`${route.title}:${route.ids.join("|")}`}
              title={route.title}
              ids={route.ids}
              deck={deck}
              onGrade={grade}
              onExit={exitStudy}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function Home({
  query,
  setQuery,
  stats,
  dueCount,
  freshCount,
  onReview,
  onFresh,
  results,
  onOpenField,
  onOpenConcept,
  onStudyNotation,
  deck,
  now,
  onClear,
}: {
  query: string;
  setQuery: (value: string) => void;
  stats: { solid: number; learning: number; due: number; fresh: number };
  dueCount: number;
  freshCount: number;
  onReview: () => void;
  onFresh: () => void;
  results: typeof concepts;
  onOpenField: (fieldId: string) => void;
  onOpenConcept: (id: string) => void;
  onStudyNotation: () => void;
  deck: Deck;
  now: number;
  onClear: () => void;
}) {
  const searching = query.trim().length > 0;

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Flashcards for mathematics</p>
        <h1>Say the idea before you turn the card.</h1>
        <p className="lede">
          {concepts.length} concepts. If the symbols are unfamiliar, start with the guide and the first shelves. The
          later shelves run from the completeness of the real line to adjoint functors. Each card is a picture, the
          real statement, and one line worth keeping.
        </p>
      </section>

      <div className="stats">
        <span><strong>{concepts.length}</strong> ideas</span>
        <span><strong>{stats.fresh}</strong> new</span>
        <span><strong>{stats.learning}</strong> learning</span>
        <span><strong>{stats.solid}</strong> solid</span>
        <span><strong>{stats.due}</strong> due</span>
      </div>

      <div className="actions">
        <button className="primary" type="button" onClick={onReview} disabled={dueCount === 0}>
          Review what is due{dueCount > 0 ? ` (${dueCount})` : ""}
        </button>
        <button className="ghost" type="button" onClick={onFresh} disabled={freshCount === 0}>
          Ten new ideas
        </button>
      </div>

      <label className="search">
        <span>Search the shelves</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="For every, slope, sine, compactness…"
          autoComplete="off"
        />
      </label>

      {searching ? (
        results.length === 0 ? (
          <p className="empty">Nothing on the shelves matches that.</p>
        ) : (
          <div className="results">
            {results.map((concept) => {
              const field = fields.find((item) => item.id === concept.field);
              return (
                <button key={concept.id} className="result" type="button" onClick={() => onOpenConcept(concept.id)}>
                  <span className="mark">{field?.mark}</span>
                  <strong>{concept.name}</strong>
                  <p className="ask">{concept.ask}</p>
                </button>
              );
            })}
          </div>
        )
      ) : (
        <>
          <NotationGuide onStudy={onStudyNotation} onOpen={() => onOpenField("notation")} />
          <section className="band" aria-labelledby="primer-heading">
            <p className="eyebrow">First shelves</p>
            <h2 id="primer-heading">Basics, for a first pass or a refresher.</h2>
            <p className="lede">
              Numbers, algebra, functions, trigonometry, calculus, vectors, and the language of a proof. Open a shelf
              and study it as cards before the later subjects assume them.
            </p>
            <ShelfGrid list={fields.filter((field) => field.band === "primer")} deck={deck} now={now} onOpenField={onOpenField} />
          </section>
          <section className="band" aria-labelledby="advanced-heading">
            <p className="eyebrow">Advanced shelves</p>
            <h2 id="advanced-heading">The rest of the desk.</h2>
            <p className="lede">
              Analysis, algebra, geometry, and the subjects that use the first shelves as ordinary language.
            </p>
            <ShelfGrid list={fields.filter((field) => field.band === "advanced")} deck={deck} now={now} onOpenField={onOpenField} />
          </section>
        </>
      )}

      <footer className="foot">
        <span>Ratings live in this browser. A card becomes solid after it can wait three weeks.</span>
        <button className="texty" type="button" onClick={onClear}>
          Clear study memory
        </button>
      </footer>
    </>
  );
}

function ShelfGrid({
  list,
  deck,
  now,
  onOpenField,
}: {
  list: Field[];
  deck: Deck;
  now: number;
  onOpenField: (fieldId: string) => void;
}) {
  return (
    <div className="shelves">
      {list.map((field) => {
        const cards = conceptsIn(field.id);
        let solid = 0;
        let started = 0;
        for (const concept of cards) {
          const status = cardStatus(deck[concept.id], now);
          if (status === "solid") solid += 1;
          if (status !== "new") started += 1;
        }
        return (
          <button key={field.id} className="shelf" type="button" onClick={() => onOpenField(field.id)}>
            <span className="mark">{field.mark}</span>
            <h2>
              {field.name}
              <span className="meta"> · {cards.length}</span>
            </h2>
            <p className="blurb">{field.blurb}</p>
            <span className="meter" aria-hidden="true">
              <i style={{ width: `${cards.length ? (started / cards.length) * 100 : 0}%` }} />
              <b style={{ width: `${cards.length ? (solid / cards.length) * 100 : 0}%` }} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FieldShelf({
  fieldId,
  deck,
  now,
  filter,
  setFilter,
  onBack,
  onStudy,
}: {
  fieldId: string;
  deck: Deck;
  now: number;
  filter: "all" | CardStatus;
  setFilter: (value: "all" | CardStatus) => void;
  onBack: () => void;
  onStudy: (title: string, ids: string[]) => void;
}) {
  const field = fields.find((item) => item.id === fieldId);
  if (!field) {
    return (
      <section>
        <p className="empty">That shelf is not on the desk.</p>
        <button className="primary" type="button" onClick={onBack}>
          Back
        </button>
      </section>
    );
  }

  const all = conceptsIn(field.id);
  const visible = all.filter((concept) => filter === "all" || cardStatus(deck[concept.id], now) === filter);
  const due = all.filter((concept) => cardStatus(deck[concept.id], now) === "due").map((concept) => concept.id);
  const fresh = all.filter((concept) => cardStatus(deck[concept.id], now) === "new").map((concept) => concept.id);

  return (
    <section>
      <div className="field-head">
        <button className="texty" type="button" onClick={onBack}>
          All shelves
        </button>
        <p className="eyebrow">{field.mark}</p>
        <h1>{field.name}</h1>
        <p className="blurb">{field.blurb}</p>
        <div className="row-actions">
          <button className="primary" type="button" onClick={() => onStudy(field.name, all.map((concept) => concept.id))}>
            Study this shelf
          </button>
          <button className="ghost" type="button" disabled={due.length === 0} onClick={() => onStudy(`${field.name} · due`, due)}>
            Review due
          </button>
          <button className="ghost" type="button" disabled={fresh.length === 0} onClick={() => onStudy(`${field.name} · new`, fresh)}>
            New only
          </button>
        </div>
        <div className="filters" role="group" aria-label="Filter cards">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === filter ? "chip on" : "chip"}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="empty">No cards in this filter.</p>
      ) : (
        <div className="list">
          {visible.map((concept) => {
            const status = cardStatus(deck[concept.id], now);
            return (
              <button
                key={concept.id}
                className="result"
                type="button"
                onClick={() => onStudy(field.name, rotateTo(visible.map((item) => item.id), concept.id))}
              >
                <span className={`pill ${status}`}>{status}</span>
                <strong>{concept.name}</strong>
                <p className="ask">{concept.ask}</p>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
