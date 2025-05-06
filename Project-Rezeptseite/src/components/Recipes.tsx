import React, { useEffect, useState } from "react";

import { supabase } from "../lib/supabase/supabaseClient";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/RecipeType";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    fetchRecipes(debouncedTerm);
  }, [debouncedTerm]);

  async function fetchRecipes(term: string) {
    let query = supabase
      .from("recipes")
      .select("*, ingredients(*), categories(*)")
      .order("rating", { ascending: true })
      .limit(3);

    if (term.trim() !== "") {
      query = query.ilike("name", `%${term.trim()}%`);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } else {
      setRecipes(data);
    }
  }
  return (
    <div className="h-[650px] bg-gray-50 py-10 px-4">
      {recipes ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Die beliebtesten Rezepte
          </h2>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 p-2 border rounded shadow focus:outline-none"
            />
          </div>

          {recipes === null ? (
            <p className="text-center text-red-500">Loading...</p>
          ) : recipes.length === 0 ? (
            <p className="text-center text-gray-600">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-red-500">Loading...</p>
      )}
    </div>
  );
};

export default Recipes;
