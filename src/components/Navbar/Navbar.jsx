import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  // const [search, setSearch] = useState("");
  return (
    <nav>
      <h1>🍱 The Ultimate Recipe Book</h1>
      {/* don't forget to deal with handleSubmit */}
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        // name=""
        // id=""
      />
      <button>🔍</button>
      {/* </form> */}
    </nav>
  );
}
