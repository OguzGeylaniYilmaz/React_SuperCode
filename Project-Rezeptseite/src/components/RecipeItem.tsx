import React, { use, useEffect, useState } from "react";
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
  const navigate = useNavigate();

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
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Veri alınırken hata oluştu");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!recipe)
    return <p className="text-center py-10">Kein Rezept gefunden.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 mb-20">
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
          onClick={() => navigate(`/rezeptedetails/${recipe.id}/edit`)}
        >
          Ändern
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          // variant="danger"
          onClick={async () => {
            if (confirm("Möchten Sie dieses Rezept wirklich löschen?")) {
              await supabase.from("recipes").delete().eq("id", recipe.id);
              navigate("/");
            }
          }}
        >
          Löschen
        </button>
      </div>
    </div>
  );
};

export default RecipeItem;
