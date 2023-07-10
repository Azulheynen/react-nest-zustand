import { create } from "zustand";

type favoriteRecipesState = {
  favoriteRecipesIds: number[];
  addFavoriteRecipe: (id: number) => void;
  removeFavoriteRecipe: (id: number) => void;
};
export const useFavoriteRecipeStore = create<favoriteRecipesState>((set) => ({
  favoriteRecipesIds: [],
  addFavoriteRecipe: (id: number) =>
    set((state) => ({ favoriteRecipesIds: [...state.favoriteRecipesIds, id] })),
  removeFavoriteRecipe: (id: number) =>
    set((state) => ({
      favoriteRecipesIds: state.favoriteRecipesIds.filter(
        (recipeId) => recipeId !== id
      ),
    })),
}));
