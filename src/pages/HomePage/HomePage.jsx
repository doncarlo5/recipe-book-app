import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RecipeList from "../../components/RecipeList/RecipeList";

function HomePage() {
  return (
    <div className="Container">
      <Sidebar />
      <RecipeList />
    </div>
  );
}

export default HomePage;
