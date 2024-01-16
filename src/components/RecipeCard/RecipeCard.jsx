import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, handleDelete }) {
  return (
    <article className="RecipeCard">
      <div className="RecipeCard-img">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="RecipeCard-content">
        <h3>{recipe.name}</h3>
        <p>
          <span>Calories:</span>
          {recipe.calories}
        </p>
        <p>
          <span>Servings:</span>
          {recipe.servings}
        </p>
        <button onClick={() => handleDelete(recipe.id)}>🗑️</button>
      </div>
    </article>
  );
}

export default RecipeCard;
