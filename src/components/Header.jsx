import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" />
        Food Feaster
      </div>
      <ul>
        <li>
          <Link to="/food-app/">Home</Link>
        </li>
        <li>
          <Link to="/Cart">
            {cart.length == 0 ? "View Cart" : `${cart.length} Cart Items`}
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <button className="page-login">Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
