import { algebraNotes } from "./algebra";
import { analysisNotes } from "./analysis";
import { primerNotes } from "./primer";
import type { FormulaNote } from "./types";

export type { FormulaNote };

const parts = [primerNotes, analysisNotes, algebraNotes];

export const formulaNotes: Record<string, FormulaNote> = {};

for (const part of parts) {
  for (const [id, note] of Object.entries(part)) {
    if (formulaNotes[id]) throw new Error(`Duplicate formula note ${id}`);
    if (!note.notation.trim() || !note.proof.trim()) {
      throw new Error(`Empty formula note ${id}`);
    }
    formulaNotes[id] = note;
  }
}
