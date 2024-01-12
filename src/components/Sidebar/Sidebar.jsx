import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ sortByCalories, toggleVegetarianFilter }) {
  return (
    <div className="Sidebar">
      <h3>Filters</h3>
      <div>
        <input
          type="checkbox"
          id="sortbycalories"
          onChange={(e) => sortByCalories(e.target.checked)}
        />
        <label htmlFor="sortbycalories">Sort by Calories</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="vegetarian"
          onChange={(e) => toggleVegetarianFilter(e.target.checked)}
        />
        <label htmlFor="vegetarian">Only vegetarian recipes</label>
      </div>
      <p>
        Made with 💚 in Paris. Know more <Link to="/about">about us 👨🏻‍💻👩🏽‍💻</Link>
      </p>
      <Link to="*">Error 404</Link>
    </div>
  );
}
