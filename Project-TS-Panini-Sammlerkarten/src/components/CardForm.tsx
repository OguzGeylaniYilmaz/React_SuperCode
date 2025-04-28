import React, { useEffect, useState } from "react";
import { CardFormData, EditingCard } from "../types/TradingCard";

interface CardFormProps {
  onAddCard: (card: CardFormData) => void;
  editingCard: EditingCard | null;
  cardToEdit: CardFormData | null;
  onCancelEdit: () => void;
}

const initialFormState: CardFormData = {
  name: "",
  image: "",
  label: "",
  genre: "",
  age: 0,
  country: "",
  bestSong: "",
  albumCount: 0,
};

export const CardForm: React.FC<CardFormProps> = ({
  onAddCard,
  editingCard,
  cardToEdit,
  onCancelEdit,
}) => {
  const [formData, setFormData] = useState<CardFormData>(initialFormState);

  useEffect(() => {
    if (editingCard?.isEditing && cardToEdit) {
      setFormData(cardToEdit);
    } else {
      setFormData(initialFormState);
    }
  }, [editingCard, cardToEdit]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "age" || name === "albumCount") {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10) || 0,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard(formData);
    setFormData(initialFormState);
  };
  return (
    <div className="max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {editingCard?.isEditing ? "Edit Artist Card" : "Add New Artist"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Artist Name"
          />

          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Image URL"
          />

          <input
            type="text"
            name="label"
            value={formData.label}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Record Label"
          />

          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Genre"
          />

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            min="0"
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Age"
          />

          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Country"
          />

          <input
            type="text"
            name="bestSong"
            value={formData.bestSong}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Best Song"
          />

          <input
            type="number"
            name="albumCount"
            value={formData.albumCount}
            onChange={handleInputChange}
            required
            min="0"
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Album Count"
          />
        </div>

        <div className="flex justify-center pt-4">
          {editingCard?.isEditing && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors mr-2"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            {editingCard?.isEditing ? "Save Changes" : "Add Artist"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default CardForm;
