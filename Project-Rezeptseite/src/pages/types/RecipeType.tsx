import { Database } from "./supabase-types";

export type Ingredient = Database["public"]["Tables"]["ingredients"]["Row"];

export type Category = Database["public"]["Tables"]["categories"]["Row"];

export type Recipe = Database["public"]["Tables"]["recipes"]["Row"] & {
  ingredients: Ingredient[];
  categories: Category;
};
