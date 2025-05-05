import React, { use, useEffect, useState } from "react";
import Recipe from "../types/RecipeType";
import { supabase } from "../lib/supabase/supabaseClient";
import RecipeCard from "./RecipeCard";

const NewRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  const fetctNewRecipes = async () => {
    const { data } = await supabase
      .from("recipes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);
    setRecipes(data);
  };

  useEffect(() => {
    fetctNewRecipes();
  }, []);

  return (
    <div className="h-[600px] bg-gray-50 py-10 px-4">
      {recipes ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Neueste Rezepte
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

export default NewRecipes;
