import React from "react";
import { Recipe } from "../hooks/types";
import { useFavoriteRecipeStore } from "../store/favoriteRecipes";

type CardProps = {
  recipe: Recipe;
  isFavorite: boolean;
};

function Card({ recipe, isFavorite }: CardProps) {
  const addFavoriteRecipe = useFavoriteRecipeStore(
    (state) => state.addFavoriteRecipe
  );
  const removeFavoriteRecipe = useFavoriteRecipeStore(
    (state) => state.removeFavoriteRecipe
  );


const toggleFavorite = () => {
    if(isFavorite){
        removeFavoriteRecipe(recipe.id)
        return  
    }
    addFavoriteRecipe(recipe.id)
}

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>{recipe.category}</h2>
      <button onClick={toggleFavorite}>{isFavorite ? "Unmark" : "Mark"}</button>
    </div>
  );
}

export default Card;
