import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // State
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering when search term changes
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
  
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...state.favorites, recipeId]
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));