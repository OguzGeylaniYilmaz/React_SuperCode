import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Category, Recipe } from "../types/RecipeType";
import { supabase } from "../lib/supabase/supabaseClient";
import { Database } from "../types/supabase-types";

type RecipeInsert = Database["public"]["Tables"]["recipes"]["Insert"];

const RezeptErstellenSeite = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState("");
  const [instructions, setInstructions] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name, created_at")
        .order("name", { ascending: true });

      if (error) {
        console.log("Error fetching categories:", error);
      } else if (data.length) {
        setCategories(data);
        setCategoryId(data[0].id);
      }
    }
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const servingsNum = parseInt(servings, 10);
    if (isNaN(servingsNum) || servingsNum <= 1) {
      setError("The number of portions must be a positive integer.");
      setLoading(false);
      return;
    }

    const newRecipe: RecipeInsert = {
      name,
      description,
      instructions,
      servings: servingsNum,
      category_id: categoryId,
    };

    try {
      const { data, error } = await supabase
        .from("recipes")
        .insert(newRecipe)
        .select();

      if (error) throw error;

      const newId = data?.[0].id;
      navigate(newId ? `/rezeptedetails/${newId}` : `/`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-red-600 border-b pb-4">
          {isEdit ? "Rezept bearbeiten" : "Neues Rezept erstellen"}
        </h1>
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Rezeptname eingeben"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Beschreibung
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Kurze Beschreibung des Rezepts"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Anzahl der Portionen
            </label>
            <input
              type="number"
              min={1}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              required
              placeholder="z.B. 4"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Anleitung
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 min-h-[200px]"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
              placeholder="Schritt-für-Schritt Anleitung"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kategorie
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-white"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end pt-6">
            <button
              className={`px-6 py-3 rounded-lg font-semibold text-white transition duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 active:bg-pupple-800"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Wird gespeichert..."
                : isEdit
                ? "Änderungen speichern"
                : "Rezept speichern"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RezeptErstellenSeite;
