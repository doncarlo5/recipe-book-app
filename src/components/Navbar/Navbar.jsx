import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      navigate(`/?name=${event.target.value}`);
    }
  }

  return (
    <nav className="NavBar">
      <NavLink to="/">
        <h1>📖 The Ultimate Recipe Book</h1>
      </NavLink>
      {/* don't forget to deal with handleSubmit */}
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <input
          className="Search-Input"
          type="search"
          // value={search}
          onKeyDown={(e) => handleKeyDown(e)}
          // name=""
          // id=""
        />
      </div>
    </nav>
  );
}
