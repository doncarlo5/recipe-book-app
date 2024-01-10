import React, { useState } from "react";
import "./RecipeList.css";
import JSONrecipes from "../../assets/recipes.json";
import OneRecipe from "../OneRecipe/OneRecipe";

function RecipeList() {
  const [recipes, SetRecipes] = useState(JSONrecipes);
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <OneRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
