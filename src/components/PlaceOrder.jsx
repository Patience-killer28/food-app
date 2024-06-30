import React, { useEffect } from "react";
import { useContext } from "react";
import "./PlaceOrder.css";
import { useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amnt), 0));
  }, [cart]);

 

  return (
    <div>
      <div className="order-container">
        <div className="placed-items">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-7464607-6110040.png?f=webp"
            alt="placed-Order"
          />
        </div>
        <div className="orders">
          {cart.map((carts) => (
            <div className="order-product" key={carts.id}>
              <img src={carts.pic} alt="Image" />
              <div className="order-details">
                <h3>{carts.name}</h3>
                <h3>Price: Rs.{carts.amnt}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="order-total">
          <h1>Bill amount:Rs.{total}</h1>
          <p>Your order will be delievered within 30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
