import React, { useState, useEffect } from "react";
import fetchProductsFromAPI from "../API/index.js";
import "./index.css";
import ProductItem from "../ProductItem";

function ProductList({ selectedCategory, handleClick }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchThenSetProducts() {
      const fetchedData = await fetchProductsFromAPI();
      setProducts(fetchedData);
    }
    fetchThenSetProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul className="product-list">
        {products
          .filter((x) => !selectedCategory || x.category === selectedCategory)
          .map((item) => {
            return <ProductItem item={item} handleClick={handleClick} />;
          })}
      </ul>
    </div>
  );
}

export default ProductList;
