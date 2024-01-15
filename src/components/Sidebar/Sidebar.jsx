import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({
  sortByCalories,
  toggleVegetarianFilter,
  setShowForm,
}) {
  return (
    <div className="Sidebar">
      <h3>FILTERS</h3>
      <hr />
      <div className="Sidebar-checkbox">
        <div>
          <input
            type="checkbox"
            id="sortbycalories"
            onChange={(e) => sortByCalories(e.target.checked)}
          />
          <label htmlFor="sortbycalories">Sort by Calories ↯</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="vegetarian"
            onChange={(e) => toggleVegetarianFilter(e.target.checked)}
          />
          <label htmlFor="vegetarian">Only vegetarian 🥬</label>
        </div>
        <button onClick={() => setShowForm((currentState) => !currentState)}>
          ⊕ Add New Recipe
        </button>
      </div>
      <div className="Sidebar-info">
        <hr />
        <p>Made with 💚 in Paris.</p>
        <Link to="/about">ABOUT US 👨🏻‍💻👩🏽‍💻</Link>
        <Link to="*">ERROR 404 🦴</Link>
      </div>
    </div>
  );
}
