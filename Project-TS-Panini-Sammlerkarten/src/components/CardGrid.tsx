import { Card } from "../types/TradingCard";
import { TradingCard } from "./TradingCard";

interface CardGridProps {
  cards: Card[];
  onEditCard: (id: string) => void;
  onDeleteCard: (id: string) => void;
}

export const CardGrid: React.FC<CardGridProps> = ({
  cards,
  onEditCard,
  onDeleteCard,
}) => {
  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No Cards Yet
        </h3>
        <p className="text-gray-600">
          Create your first trading card using the form above!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <TradingCard
          key={card.id}
          card={card}
          onEdit={onEditCard}
          onDelete={onDeleteCard}
        />
      ))}
    </div>
  );
};
