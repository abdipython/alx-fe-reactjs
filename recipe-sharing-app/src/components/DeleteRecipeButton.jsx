import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleClick = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete();
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteRecipeButton;
