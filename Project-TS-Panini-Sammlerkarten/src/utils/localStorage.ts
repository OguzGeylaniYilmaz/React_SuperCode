import { Card } from "../types/TradingCard";

const STORAGE_KEY = "trading_cards";

export const saveCardsToLocalStorage = (cards: Card[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch (error) {
    console.error("Error saving cards to localStorage:", error);
  }
};

export const loadCardsFromLocalStorage = (): Card[] => {
  try {
    const cardsData = localStorage.getItem(STORAGE_KEY);
    if (!cardsData) return [];

    return JSON.parse(cardsData);
  } catch (error) {
    console.error("Error loading cards from localStorage:", error);
    return [];
  }
};
