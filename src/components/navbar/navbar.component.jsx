import React from "react";
import "./navbar.styles.scss";
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
        <a href="//github.io/jo_geek">Search</a>
        <a href="http://stackoverflow.com/users/4084003/">Usage</a>
        <a href="https://in.linkedin.com/in/jonesvinothjoseph">About</a>
      </div>
    </div>
  );
}

export default Navbar;