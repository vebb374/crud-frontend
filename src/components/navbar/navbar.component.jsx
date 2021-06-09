import React from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title">Yandex CRUD app</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Search</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
