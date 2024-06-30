import React, { useState } from "react";
import data from "../assests/products.json";
import Product from "./Product";
import "./Home.css";
import Footer from "./Footer";
const Home = () => {
  const [products] = useState(data);
  return (
    <div className="product-container">
      <h1>Foods and Snacks</h1>
      <div className="prod">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
