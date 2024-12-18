import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
    </ul>
  );
}
