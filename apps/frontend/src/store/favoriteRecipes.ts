import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteRecipesState = {
  favoriteRecipesIds: number[];
  addFavoriteRecipe: (id: number) => void;
  removeFavoriteRecipe: (id: number) => void;
};
export const useFavoriteRecipeStore = create(
  persist<favoriteRecipesState>(
    (set) => ({
      favoriteRecipesIds: [],
      addFavoriteRecipe: (id: number) =>
        set((state) => ({
          favoriteRecipesIds: [...state.favoriteRecipesIds, id],
        })),
      removeFavoriteRecipe: (id: number) =>
        set((state) => ({
          favoriteRecipesIds: state.favoriteRecipesIds.filter(
            (recipeId) => recipeId !== id
          ),
        })),
    }),
    {
      name: "favorte-recipes",
    }
  )
);
