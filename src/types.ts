export type Concept = {
  id: string;
  field: string;
  name: string;
  ask: string;
  gist: string;
  picture: string;
  detail: string;
  formula?: string;
  formulaSays?: string;
  pitfall: string;
  remember: string;
};

export type Field = {
  id: string;
  mark: string;
  name: string;
  blurb: string;
  band: "primer" | "advanced";
};

export type Grade = "again" | "hard" | "good" | "easy";

export type Memory = {
  ease: number;
  interval: number;
  reps: number;
  due: number;
  lapses: number;
};

export type Deck = Record<string, Memory>;

export type CardStatus = "new" | "due" | "learning" | "solid";
