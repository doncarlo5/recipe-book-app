import React, { useState } from "react";
import "./RecipeList.css";
import JSONrecipes from "../../assets/recipes.json";
import OneRecipe from "../OneRecipe/OneRecipe";
import Sidebar from "../Sidebar/Sidebar";

function RecipeList() {
  const [recipes, SetRecipes] = useState(JSONrecipes);

  function handleDelete(id) {
    const remainingRecipes = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    SetRecipes(remainingRecipes);
  }

  function sortByCalories() {
    const copy = structuredClone(recipes);
    copy.sort((recipeA, recipeB) => {
      return recipeA.calories - recipeB.calories;
    });
    SetRecipes(copy);
  }

  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <OneRecipe
          key={recipe.id}
          recipe={recipe}
          handleDelete={handleDelete}
        />
      ))}
      <Sidebar sortByCalories={sortByCalories} />
    </div>
  );
}

export default RecipeList;
