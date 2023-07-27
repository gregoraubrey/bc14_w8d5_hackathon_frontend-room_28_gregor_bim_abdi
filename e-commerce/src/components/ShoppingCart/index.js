import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function ShoppingCart({ cartCount }) {
  const totalPrice = cartCount
    .reduce((accum, item) => {
      return accum + item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="cart-icon-container">
      <div className="cart-icon-wrapper">
        <FontAwesomeIcon icon={faShoppingCart} />
        <p className="cart-count">({cartCount.length})</p>
      </div>
      <p className="total-price">£{totalPrice}</p>
    </div>
  );
}
export default ShoppingCart;
