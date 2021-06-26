import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-background">
      <nav className="navbar">
        <h1>sunnyside</h1>
        <ul className="items">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <button className="button">CONTACT</button>
        </ul>
      </nav>
      <h1 className="title">WE ARE CREATIVES</h1>
    </div>
  );
};

export default Navbar;
