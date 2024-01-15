import "./HomePage.css";
import { useState } from "react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecipeList from "../../components/RecipeList/RecipeList";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import JSONrecipes from "../../assets/recipes.json";

function HomePage() {
  const [recipes, SetRecipes] = useState(JSONrecipes);
  const [showForm, setShowForm] = useState(false);

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
      SetRecipes(recipes);
    }
  }

  function toggleVegetarianFilter(isChecked) {
    if (isChecked) {
      const vegetarianRecipes = recipes.filter((recipe) => {
        return recipe.isVegetarian === true;
      });
      SetRecipes(vegetarianRecipes);
    } else {
      SetRecipes(recipes);
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
      {showForm && (
        <AddRecipeForm addToRecipes={addToRecipes} setShowForm={setShowForm} />
      )}
      <RecipeList handleDelete={handleDelete} recipes={recipes} />
    </div>
  );
}

export default HomePage;
