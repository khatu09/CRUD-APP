import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

export const Header = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Search />
    </>
  );
};

export default Header;
