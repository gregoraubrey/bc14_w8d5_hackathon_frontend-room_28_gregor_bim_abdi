import React from "react";
import "./index.css";

function NavBar({ categories, onCategoryChange }) {
  return (
    <nav className="navbar">
      <container className="navbar-container">
        <h1 className="navbar-title">Fake E-commerce Store</h1>
        <div className="navbar-dropdown">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </container>
    </nav>
  );
}

export default NavBar;
