import React, { useState } from "react";
import "./AddRecipeForm.css";

function AddRecipeForm({ setShowForm, addToRecipes }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);
  const [vegetarian, setVegetarian] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      id: crypto.randomUUID(),
      name,
      image,
      calories,
      servings,
      vegetarian,
    };
    addToRecipes(newRecipe);
    setShowForm(false);
  }

  return (
    <form className="AddRecipeForm" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Name :</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
        />
      </label>

      <label htmlFor="image">
        <p>Image :</p>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image URL"
        />
      </label>

      <label htmlFor="calories">
        <p>Calories :</p>
        <input
          type="number"
          id="calories"
          min={1}
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </label>

      <label htmlFor="servings">
        <p>Servings :</p>
        <input
          type="number"
          id="servings"
          min={1}
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </label>

      <label htmlFor="vegetarian">
        <p>Vegetarian</p>
        <input
          type="checkbox"
          id="vegetarian"
          checked={vegetarian}
          onChange={(e) => setVegetarian(e.target.checked)}
        />
      </label>
      <button>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
