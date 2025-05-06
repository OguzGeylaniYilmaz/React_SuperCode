import React from "react";

import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { Recipe } from "../types/RecipeType";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => (
  <div className="bg-gray-100 overflow-hidden rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
    <div
      className="h-52 bg-cover bg-center"
      style={{ backgroundImage: `url(${recipe.imageUrl})` }}
    ></div>

    <div className="p-5">
      <h3 className="font-semibold text-xl mb-2">{recipe.name}</h3>

      <p className="text-gray-700 mb-4 text-sm">{recipe.description}</p>
      <Link to={`/rezeptedetails/${recipe.id}`}>
        <Button>Zum Rezept</Button>
      </Link>
    </div>
  </div>
);

export default RecipeCard;
