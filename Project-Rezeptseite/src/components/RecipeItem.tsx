import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase/supabaseClient";

const RecipeItem = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  return <div></div>;
};

export default RecipeItem;
