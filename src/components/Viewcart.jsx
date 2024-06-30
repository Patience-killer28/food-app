import React, { useEffect } from "react";
import { useContext } from "react";
import "./Cart.css";
import { useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

const Viewcart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amnt), 0));
  }, [cart]);

  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };
  return (
    <>
      <div className="cart-container">
        <h1>Cart Products</h1>
        {cart.length > 0 ? (
          cart.map((carts) => (
            <div className="cart-product" key={carts.id}>
              <img src={carts.pic} alt="Image" />
              <div className="cart-details">
                <h3>{carts.name}</h3>
                <h3>Price: Rs.{carts.amnt}</h3>
              </div>
              <button
                className="cart-delete"
                onClick={() => removeCart(carts.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <h4>Your Cart is Empty</h4>
            <img
              src="https://w7.pngwing.com/pngs/911/637/png-transparent-empty-cart-illustration-thumbnail.png"
              width="200px"
              height="200px"
            />
            <h2>Take a bite out of hunger.</h2>
          </div>
        )}
      </div>
      <div className="cart-complete">
        <h1>Total Price :Rs.{total}</h1>
        <Link to="/place-order">
          <button className="cart-order">Place order</button>
        </Link>
      </div>
    </>
  );
};

export default Viewcart;
