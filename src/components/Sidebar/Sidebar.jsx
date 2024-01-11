import React from "react";
import "./Sidebar.css";

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
        Made with 💚 in Paris. Know more{" "}
        <a href="../About/About.jsx">about us 👨🏻‍💻👩🏽‍💻</a>
      </p>
      <a href="../Error/Error.jsx">Error 404</a>
    </div>
  );
}
