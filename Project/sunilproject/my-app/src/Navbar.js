import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {}
        <li>
          <Link to="/home2">Home</Link>
        </li>{" "}
        {}
        <li>
          <Link to="/">Contact Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
