import React from "react";
import { Card } from "../types/TradingCard";
import { Edit2, Trash } from "lucide-react";

interface TradingCardProps {
  card: Card;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TradingCard: React.FC<TradingCardProps> = ({
  card,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className={`
      relative overflow-hidden rounded-2xl transition-all duration-300
      hover:scale-105 transform bg-black/40 backdrop-blur-sm
      ${card.isNew ? "animate-pulse" : ""}
    `}
    >
      <div className="relative aspect-[3/4]">
        {/* Image with gradient overlay */}
        <img
          src={card.image}
          alt={card.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          {/* Top section */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{card.name}</h3>
              <div className="flex space-x-1">
                <button
                  onClick={() => onEdit(card.id)}
                  className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => onDelete(card.id)}
                  className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Trash size={14} />
                </button>
              </div>
            </div>
            <div className="text-sm opacity-80">
              {card.country} – {card.label}
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Age: {card.age}</span>
              <span>Albums: {card.albumCount}</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm">
                <span className="opacity-80">Genre:</span> {card.genre}
              </div>
              <div className="text-sm">
                <span className="opacity-80">Hit:</span> {card.bestSong}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
