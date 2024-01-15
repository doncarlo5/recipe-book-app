import "./HomePage.css";
import { useState } from "react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecipeList from "../../components/RecipeList/RecipeList";
import JSONrecipes from "../../assets/recipes.json";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [recipes, SetRecipes] = useState(JSONrecipes);
  const [searchParams, SetSearchParams] = useSearchParams();
  const searchedName = searchParams.get("name");

  let displayRecipes = recipes;

  if (searchedName) {
    displayRecipes = recipes.filter((recipe) => {
      const regexp = new RegExp(searchedName, "gi");
      return recipe.name.match(regexp);
    });
  }

  function handleDelete(id) {
    const remainingRecipes = recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    SetRecipes(remainingRecipes);
  }

  function sortByCalories(isChecked) {
    if (isChecked) {
      const copy = structuredClone(recipes);
      copy.sort((recipeA, recipeB) => {
        return recipeA.calories - recipeB.calories;
      });
      SetRecipes(copy);
    } else {
      SetRecipes(JSONrecipes);
    }
  }

  function toggleVegetarianFilter(isChecked) {
    if (isChecked) {
      const vegetarianRecipes = recipes.filter((recipe) => {
        return recipe.isVegetarian === true;
      });
      SetRecipes(vegetarianRecipes);
    } else {
      SetRecipes(JSONrecipes);
    }
  }

  return (
    <div className="Container">
      <Sidebar
        sortByCalories={sortByCalories}
        toggleVegetarianFilter={toggleVegetarianFilter}
      />
      <RecipeList handleDelete={handleDelete} recipes={displayRecipes} />
    </div>
  );
}

export default HomePage;
