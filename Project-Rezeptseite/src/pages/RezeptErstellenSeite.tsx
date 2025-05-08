import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Category, Recipe } from "../types/RecipeType";
import { supabase } from "../lib/supabase/supabaseClient";

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
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
        if (!categoryId && data.length > 0) {
          setCategoryId(data[0].id);
        }
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center  text-red-600">
        {isEdit ? "Rezept bearbeiten" : "Neues Rezept erstellen"}
      </h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Beschreibung</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Anzahl der Portionen</label>
          <input
            type="number"
            min={1}
            className="w-full border p-2 rounded"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Anleitung</label>
          <textarea
            className="w-full border p-2 rounded whitespace-pre-line"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kategorie</label>
          <select
            className="w-full border p-2 rounded"
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
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
            disabled={loading}
          >
            {isEdit ? "Änderungen speichern" : "Rezept speichern"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RezeptErstellenSeite;
