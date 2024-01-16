import "./HomePage.css";
import { useState } from "react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecipeCard from "../../components/RecipeList/RecipeList";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import JSONrecipes from "../../assets/recipes.json";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [recipes, SetRecipes] = useState(JSONrecipes);
  const [showForm, setShowForm] = useState(false);
  const [searchParams, SetSearchParams] = useSearchParams();
  const searchedLetters = searchParams.get("name");

  let displayRecipes = recipes;

  if (searchedLetters) {
    displayRecipes = recipes.filter((recipe) => {
      const regexp = new RegExp(searchedLetters, "gi");
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

  function addToRecipes(newRecipe) {
    SetRecipes([newRecipe, ...recipes]);
  }

  return (
    <div className="Container">
      <Sidebar
        sortByCalories={sortByCalories}
        toggleVegetarianFilter={toggleVegetarianFilter}
        setShowForm={setShowForm}
      />
      <div className="Container-Add-RecipeCard">
        {showForm && (
          <AddRecipeForm
            addToRecipes={addToRecipes}
            setShowForm={setShowForm}
          />
        )}
        <RecipeCard handleDelete={handleDelete} recipes={displayRecipes} />
      </div>
    </div>
  );
}

export default HomePage;
