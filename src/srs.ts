import type { CardStatus, Grade, Memory } from "./types";

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

export function blankMemory(): Memory {
  return { ease: 2.5, interval: 0, reps: 0, due: 0, lapses: 0 };
}

export function schedule(prev: Memory | undefined, grade: Grade, now = Date.now()): Memory {
  const card = prev ?? blankMemory();

  if (grade === "again") {
    return {
      ease: Math.max(1.3, card.ease - 0.2),
      interval: 0,
      reps: 0,
      due: now + 10 * MINUTE,
      lapses: card.lapses + (card.reps > 0 ? 1 : 0),
    };
  }

  const reps = card.reps + 1;
  let ease = card.ease;
  let interval = card.interval;

  if (grade === "hard") {
    ease = Math.max(1.3, ease - 0.15);
    interval = reps === 1 ? 0.5 : Math.max(interval * 1.2, 0.5);
  } else if (grade === "good") {
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 3;
    else interval = Math.max(interval, 1) * ease;
  } else {
    ease = ease + 0.15;
    if (reps === 1) interval = 3;
    else interval = Math.max(interval, 1) * ease * 1.3;
  }

  return {
    ease,
    interval,
    reps,
    due: now + interval * DAY,
    lapses: card.lapses,
  };
}

export function cardStatus(memory: Memory | undefined, now = Date.now()): CardStatus {
  if (!memory || (memory.reps === 0 && memory.due === 0)) return "new";
  if (memory.due <= now) return "due";
  if (memory.interval >= 21 && memory.reps >= 3) return "solid";
  return "learning";
}

export function dueLabel(interval: number, grade: Grade): string {
  if (grade === "again") return "this sitting";
  if (interval < 1) return "later today";
  const days = Math.max(1, Math.round(interval));
  if (days === 1) return "tomorrow";
  return `in ${days} days`;
}
