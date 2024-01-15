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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image :</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories :</label>
        <input
          type="number"
          id="calories"
          min={1}
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings :</label>
        <input
          type="number"
          id="servings"
          min={1}
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="vegetarian">Vegeratian</label>
        <input
          type="checkbox"
          id="vegetarian"
          checked={vegetarian}
          onChange={(e) => setVegetarian(e.target.checked)}
        />
      </div>
      <button>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
