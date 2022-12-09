import React from "react";
import { FlashDeals } from "../components/flashDeals/FlashDeals";
import { Home } from "../components/mainpage/Home";

export const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} />
    </>
  );
};

// export default Pages;
