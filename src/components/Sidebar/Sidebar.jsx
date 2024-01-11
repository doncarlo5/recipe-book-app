import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/about">About</Link>
      <Link to="*">Error 404</Link>
    </div>
  );
}
