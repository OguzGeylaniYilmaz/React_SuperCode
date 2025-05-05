import React, { useEffect, useState } from "react";

import { supabase } from "../lib/supabase/supabaseClient";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/RecipeType";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  async function fetchRecipes() {
    const { data } = await supabase
      .from("recipes")
      .select("*,ingredients(*),categories(*)")
      .order("rating", { ascending: true })
      .limit(3);

    if (data) {
      setRecipes(data);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="h-[650px] bg-gray-50 py-10 px-4">
      {recipes ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Die beliebtesten Rezepte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Loading...</p>
      )}
    </div>
  );
};

export default Recipes;
