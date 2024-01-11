import "./HomePage.css";
import { useState } from "react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecipeList from "../../components/RecipeList/RecipeList";
import JSONrecipes from "../../assets/recipes.json";

function HomePage() {
  const [recipes, SetRecipes] = useState(JSONrecipes);

  function handleDelete(id) {
    const remainingRecipes = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    SetRecipes(remainingRecipes);
  }

  function sortByCalories() {
    console.log("hello");
    const copy = structuredClone(recipes);
    copy.sort((recipeA, recipeB) => {
      return recipeA.calories - recipeB.calories;
    });
    SetRecipes(copy);
  }

  return (
    <div className="Container">
      <Sidebar sortByCalories={sortByCalories} />
      <RecipeList handleDelete={handleDelete} recipes={recipes} />
    </div>
  );
}

export default HomePage;
