import React from "react";
import "./OneRecipe.css";

function OneRecipe({ recipe }) {
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
      </div>
    </article>
  );
}

export default OneRecipe;
