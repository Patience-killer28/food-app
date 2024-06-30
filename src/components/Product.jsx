import React from "react";
import "./Product.css";
import { useContext } from "react";
import { CartContext } from "../App";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const AddCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    console.log(cart);
    console.log(product);
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product" key={product.id}>
      <div className="img">
        <img src={product.pic} alt={product.name}></img>
      </div>
      <h2>{product.name}</h2>
      <h4>Price :{product.amnt}</h4>

      {cart.includes(product) ? (
        <button className="btnRemove" onClick={removeCart}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={AddCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
