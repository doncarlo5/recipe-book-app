import React from "react";
import "./Page.css";
import JSONreipes from "../../assets/recipes.json";

export default function Page() {
  return (
    <div className="Page">
      <div className="RecipeOfTheDay">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h3>Name : </h3>
          <p>Calories</p>
          <p>Serving</p>
        </div>
      </div>
    </div>
  );
}
