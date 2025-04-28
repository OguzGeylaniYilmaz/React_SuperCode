import { useState, useEffect } from "react";
import { CardForm } from "../components/CardForm";
import { CardGrid } from "../components/CardGrid";
import { Card, CardFormData, EditingCard } from "../types/TradingCard";
import {
  loadCardsFromLocalStorage,
  saveCardsToLocalStorage,
} from "../utils/localStorage";
import { Music2 } from "lucide-react";

function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [editingCard, setEditingCard] = useState<EditingCard>({
    isEditing: false,
    cardId: null,
  });

  useEffect(() => {
    const savedCards = loadCardsFromLocalStorage();
    setCards(savedCards);
  }, []);

  const handleAddCard = (formData: CardFormData) => {
    if (editingCard.isEditing && editingCard.cardId) {
      const updatedCards = cards.map((card) =>
        card.id === editingCard.cardId ? { ...formData, id: card.id } : card
      );
      setCards(updatedCards);
      setEditingCard({ isEditing: false, cardId: null });
    } else {
      const newCard: Card = {
        ...formData,
        id: crypto.randomUUID(),
        isNew: true,
      };
      setCards((prevCards) => [newCard, ...prevCards]);

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === newCard.id ? { ...card, isNew: false } : card
          )
        );
      }, 2000);
    }
  };

  const handleEditCard = (id: string) => {
    const cardToEdit = cards.find((card) => card.id === id);
    if (cardToEdit) {
      setEditingCard({
        isEditing: true,
        cardId: id,
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingCard({ isEditing: false, cardId: null });
  };

  const handleDeleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleSaveAllCards = () => {
    saveCardsToLocalStorage(cards);
    alert("All cards saved successfully!");
  };

  const handleLoadCards = () => {
    const savedCards = loadCardsFromLocalStorage();
    setCards(savedCards);
  };

  const getCardToEdit = (): CardFormData | null => {
    if (!editingCard.isEditing || !editingCard.cardId) return null;
    const card = cards.find((c) => c.id === editingCard.cardId);
    if (!card) return null;
    const { id, isNew, ...formData } = card;
    return formData;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
      <header className="bg-black/20 backdrop-blur-sm text-white p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Music2 size={32} className="text-white" />
              <h1 className="text-3xl font-bold">Artists Sammelkarten</h1>
            </div>
            <div className="space-x-2">
              <button
                onClick={handleSaveAllCards}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
              >
                Save Collection
              </button>
              <button
                onClick={handleLoadCards}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
              >
                Load Collection
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <CardForm
          onAddCard={handleAddCard}
          editingCard={editingCard}
          cardToEdit={getCardToEdit()}
          onCancelEdit={handleCancelEdit}
        />

        <div className="mt-12">
          <CardGrid
            cards={cards}
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
