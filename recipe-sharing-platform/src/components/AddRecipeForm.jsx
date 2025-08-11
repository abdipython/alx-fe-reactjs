import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!title.trim()) {
      e.title = "Recipe title is required";
    }

    const ingredientsArr = ingredients
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    if (ingredientsArr.length === 0) {
      e.ingredients = "Please enter ingredients (one per line)";
    } else if (ingredientsArr.length < 2) {
      e.ingredients = "Please list at least two ingredients (one per line)";
    }

    const stepsArr = steps
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    if (stepsArr.length === 0) {
      e.steps = "Please enter preparation steps (one per line)";
    }

    return e;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      instructions: steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    console.log("New recipe submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg mx-auto"
        noValidate
      >
        {/* Title */}
        <div className="mb-4 md:mb-6">
          <label className="block font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Chocolate Cake"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4 md:mb-6">
          <label className="block font-semibold mb-2">Ingredients</label>
          <textarea
            className={`w-full border rounded-lg p-2 h-28 focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, one per line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4 md:mb-6">
          <label className="block font-semibold mb-2">Preparation Steps</label>
          <textarea
            className={`w-full border rounded-lg p-2 h-28 focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List steps, one per line"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 md:py-3"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

