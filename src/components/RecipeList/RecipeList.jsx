import React from "react";
import "./RecipeList.css";
import OneRecipe from "../OneRecipe/OneRecipe";

function RecipeList({ handleDelete, recipes }) {
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <OneRecipe
          key={recipe.id}
          recipe={recipe}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default RecipeList;
