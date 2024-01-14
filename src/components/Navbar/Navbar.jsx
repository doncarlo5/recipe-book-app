import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  // const [search, setSearch] = useState("");
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
          // onChange={(e) => setSearch(e.target.value)}
          // name=""
          // id=""
        />
        {/* </form> */}
      </div>
    </nav>
  );
}
