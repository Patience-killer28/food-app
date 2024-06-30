import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";
import Header from "./components/Header";
import Viewcart from "./components/Viewcart";
import Home from "./components/Home";
import Login from "./components/Login";
import PlaceOrder from "./components/PlaceOrder";

export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Viewcart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
