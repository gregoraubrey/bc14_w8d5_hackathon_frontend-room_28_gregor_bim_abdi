import React from "react";
import "./index.css";

function ProductItem({ item, handleClick }) {
  return (
    <li key={item.id} className="product-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} className="item-image"></img>
      <p>£{item.price}</p>
      <button className="cart-button" onClick={() => handleClick(item)}>
        Add to cart
      </button>
    </li>
  );
}

export default ProductItem;
