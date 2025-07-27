import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes by name..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;