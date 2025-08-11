import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation
    if (!title.trim()) {
      formErrors.title = "Recipe title is required";
    }
    if (!ingredients.trim()) {
      formErrors.ingredients = "Please enter ingredients";
    } else if (ingredients.split("\n").length < 2) {
      formErrors.ingredients = "Please list at least two ingredients (one per line)";
    }
    if (!steps.trim()) {
      formErrors.steps = "Please enter preparation steps";
    }

    setErrors(formErrors);

    // If no errors, process form
    if (Object.keys(formErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps.split("\n"),
      };
      console.log("New recipe submitted:", newRecipe);
      alert("Recipe submitted successfully!");

      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Chocolate Cake"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Ingredients</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, one per line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List steps, one per line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

