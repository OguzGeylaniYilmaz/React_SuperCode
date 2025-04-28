export interface Card {
  id: string;
  name: string;
  image: string;
  label: string;
  genre: string;
  age: number;
  country: string;
  bestSong: string;
  albumCount: number;
  isNew?: boolean;
}

export type CardFormData = Omit<Card, "id" | "isNew">;

export type EditingCard = {
  isEditing: boolean;
  cardId: string | null;
};
