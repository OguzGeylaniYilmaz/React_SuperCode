import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase/supabaseClient";
import { Category, Ingredient, Recipe } from "../types/RecipeType";
import Button from "./ui/Button";

interface RecipeDetailsData extends Recipe {
  ingredients: Ingredient[];
  categories: Category;
}

const RecipeItem = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Edit form state
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    instructions: "",
    rating: 0,
  });

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("recipes")
          .select(
            `
            id,
            name,
            description,
            servings,
            instructions,
            imageUrl,
            rating,
            created_at,
            ingredients (
              id,
              name,
              quantity,
              unit,
              additional_info,
              created_at
            ),
            categories (
              id,
              name,
              created_at
            )`
          )
          .eq("id", id!)
          .single();

        if (error) {
          throw error;
        }
        setRecipe(data as RecipeDetailsData);
        // Initialize edit form with current data
        setEditForm({
          name: data.name,
          description: data.description,
          instructions: data.instructions,
          rating: data.rating || 0,
        });
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred while retrieving data");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchRecipe();
  }, [id]);

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from("recipes")
        .update({
          name: editForm.name,
          description: editForm.description,
          instructions: editForm.instructions,
          rating: editForm.rating,
        })
        .eq("id", id!);

      if (error) throw error;

      setIsEditing(false);
      navigate("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while updating");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!recipe?.id) return;
    if (confirm("Möchten Sie dieses Rezept wirklich löschen?")) {
      await supabase.from("recipes").delete().eq("id", recipe?.id);
      navigate("/");
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!recipe)
    return <p className="text-center py-10">Kein Rezept gefunden.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 mb-20 relative">
      <Link to="/" className="mb-4 inline-block">
        <Button>Zurück</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
      <p className="text-gray-600 mb-4">
        Category: <strong>{recipe.categories.name}</strong>
      </p>
      <p className="text-gray-600 mb-4">
        Punktzahl: <strong>{recipe.rating ?? "Nicht bewertet"}</strong>
      </p>

      {recipe.imageUrl && (
        <div className="mb-6">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-64 object-cover rounded"
          />
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Zutaten</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ing) => (
            <li key={ing.id} className="mb-1">
              {ing.quantity && ing.unit ? `${ing.quantity} ${ing.unit} ` : ""}
              {ing.name}
              {ing.additional_info ? ` (${ing.additional_info})` : ""}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Zubereitung</h2>
        <p className="whitespace-pre-line text-gray-700">
          {recipe.instructions}
        </p>
      </section>

      <div className="flex space-x-2 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setIsEditing(true)}
        >
          Ändern
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Löschen
        </button>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Rezept bearbeiten</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Beschreibung</label>
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Anleitung</label>
                <textarea
                  name="instructions"
                  value={editForm.instructions}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded"
                  rows={6}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Bewertung (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={editForm.rating}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border rounded"
                  min="0"
                  max="5"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100"
                onClick={() => setIsEditing(false)}
              >
                Abbrechen
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleSave}
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;
