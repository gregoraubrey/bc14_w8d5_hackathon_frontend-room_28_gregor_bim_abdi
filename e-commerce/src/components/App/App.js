import React, { useState } from "react";
import "./App.css";
import ProductList from "../ProductList";
import NavBar from "../NavBar";
import ShoppingCart from "../ShoppingCart";
import Footer from "../Footer";

function App() {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartCount, setCartCount] = useState([]);

  function handleCategoryChange(category) {
    console.log("onCategoryChange has been called.");
    setSelectedCategory(category);
  }

  function handleClick(item) {
    console.log(
      "handleClick has been called. See the current cartCount array below:"
    );
    console.log(cartCount);
    setCartCount([...cartCount, item]);
  }

  return (
    <div className="App">
      <ShoppingCart cartCount={cartCount} />
      <NavBar onCategoryChange={handleCategoryChange} categories={categories} />
      <ProductList
        selectedCategory={selectedCategory}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;
