import type { Concept } from "../types";
import { abstractAlgebra } from "./abstract-algebra";
import { algebraicGeometry } from "./algebraic-geometry";
import { categoryTheory } from "./category-theory";
import { combinatorics } from "./combinatorics";
import { complexAnalysis } from "./complex-analysis";
import { differentialEquations } from "./diffeq";
import { differentialGeometry } from "./differential-geometry";
import { dynamics } from "./dynamics";
import { fields } from "./fields";
import { fourier } from "./fourier";
import { foundations } from "./foundations";
import { functionalAnalysis } from "./functional-analysis";
import { graphTheory } from "./graph-theory";
import { linearAlgebra } from "./linear-algebra";
import { measureProbability } from "./measure";
import { numberTheory } from "./number-theory";
import { numerical } from "./numerical";
import { optimization } from "./optimization";
import { partialDifferential } from "./pde";
import { algebra } from "./algebra";
import { calculus } from "./calculus";
import { functionsBasic } from "./functions";
import { notation } from "./notation";
import { numbers } from "./numbers";
import { proofLanguage } from "./proof";
import { realAnalysis } from "./real-analysis";
import { topology } from "./topology";
import { trigonometry } from "./trigonometry";
import { vectors } from "./vectors";
import { formulaNotes } from "./formula-notes";

export { fields, formulaNotes };

export const concepts: Concept[] = [
  ...realAnalysis,
  ...complexAnalysis,
  ...linearAlgebra,
  ...abstractAlgebra,
  ...topology,
  ...measureProbability,
  ...numberTheory,
  ...differentialEquations,
  ...functionalAnalysis,
  ...differentialGeometry,
  ...combinatorics,
  ...graphTheory,
  ...fourier,
  ...optimization,
  ...foundations,
  ...numerical,
  ...partialDifferential,
  ...dynamics,
  ...algebraicGeometry,
  ...categoryTheory,
  ...notation,
  ...numbers,
  ...algebra,
  ...functionsBasic,
  ...trigonometry,
  ...calculus,
  ...vectors,
  ...proofLanguage,
];

const seen = new Set<string>();
for (const concept of concepts) {
  if (seen.has(concept.id)) throw new Error(`Duplicate concept id ${concept.id}`);
  seen.add(concept.id);
  if (!fields.some((field) => field.id === concept.field)) {
    throw new Error(`Unknown field ${concept.field} on ${concept.id}`);
  }
}

for (const field of fields) {
  const count = concepts.filter((concept) => concept.field === field.id).length;
  if (count === 0) throw new Error(`Empty field ${field.id}`);
}

if (concepts.length < 200) {
  throw new Error(`Expected at least 200 concepts, found ${concepts.length}`);
}

for (const concept of concepts) {
  const note = formulaNotes[concept.id];
  if (concept.formula) {
    if (!note?.notation.trim() || !note.proof.trim()) {
      throw new Error(`Formula on ${concept.id} needs a notation note and a proof`);
    }
  } else if (note) {
    throw new Error(`Formula note on ${concept.id} but the card has no formula`);
  }
}

for (const id of Object.keys(formulaNotes)) {
  if (!seen.has(id)) throw new Error(`Formula note for unknown card ${id}`);
}

export const conceptMap = new Map(concepts.map((concept) => [concept.id, concept]));

export function conceptsIn(fieldId: string): Concept[] {
  return concepts.filter((concept) => concept.field === fieldId);
}
