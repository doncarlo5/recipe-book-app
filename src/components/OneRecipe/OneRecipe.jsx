import React from "react";
import "./OneRecipe.css";
import { motion } from "framer-motion";

//! Change name to RecipeCard

function OneRecipe({ recipe, handleDelete }) {
  return (
    <article className="OneRecipe">
      <div>
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div classeName="recipe-content">
        <h3>{recipe.name}</h3>
        <p>
          <span>Calories:</span>
          {recipe.calories}
        </p>
        <p>
          <span>Servings:</span>
          {recipe.servings}
        </p>
        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
      </div>
    </article>
  );
}

export default OneRecipe;
