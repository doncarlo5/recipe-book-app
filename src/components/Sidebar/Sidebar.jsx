import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ sortByCalories }) {
  return (
    <div className="Sidebar">
      <h3>Filters</h3>
      <button
        onClick={() => {
          sortByCalories;
        }}
      >
        Filter by Calories
      </button>
      <p>
        Made with 💚 in Paris. Know more <Link to="/about">about us 👨🏻‍💻👩🏽‍💻</Link>
      </p>
      <Link to="*">Error 404</Link>
    </div>
  );
}
