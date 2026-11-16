import type { Deck } from "./types";

const DECK_KEY = "prof-proof.deck.v1";
const THEME_KEY = "prof-proof.theme.v1";

export type Theme = "light" | "dark";

export function loadDeck(): Deck {
  try {
    const raw = localStorage.getItem(DECK_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Deck;
  } catch {
    return {};
  }
}

export function saveDeck(deck: Deck) {
  try {
    localStorage.setItem(DECK_KEY, JSON.stringify(deck));
  } catch {
    /* The sitting still works if storage is blocked. */
  }
}

export function loadTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* Ignore quota and private-mode failures. */
  }
}
