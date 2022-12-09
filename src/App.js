import "./App.css";
import { Header } from "./common/header/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pages } from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import { Cart } from "./common/cart/Cart";

function App() {
  // fecth data from database
  const { productItems } = Data;

  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} />
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} addToCart={addToCart} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
