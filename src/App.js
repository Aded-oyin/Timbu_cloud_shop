import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
