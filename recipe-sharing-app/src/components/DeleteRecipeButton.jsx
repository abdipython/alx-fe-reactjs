import { useRecipeStore } from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ Navigate back to home after deletion
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteRecipeButton;
