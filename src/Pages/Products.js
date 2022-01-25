import React from "react";
import Productbox from "../Components/Productbox";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import product1 from "../Components/res/Headphone1.jpg";
// const product1 =
//   "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/SADes%2FHeadphone1.jpg?alt=media&token=4fd262c6-8fb5-4548-8ace-8ed0dd2a2e31";

// This file has to be edit for Header top bar search box UI Design

const Products = () => {
  const Cards = [];
  for (let i = 0; i <= 20; i++) {
    Cards.push(
      <Productbox
        key={i}
        ProductImage={product1}
        ProductImageName={"NA"}
        ProductName={"BSS Headphones"}
        ProductDescription={"Kaan faad headphones mat khareedna koi"}
        ProductPrice={"2276/-"}
      />
    );
  }
  return (
    <>
      {/* Top Menu Bar */}
      <header className="top-menu-bar W100">
        <input
          type="text"
          name="search"
          disabled="True"
          placeholder="Search"
          className="top-menu-bar-search-box top-menu-bar-object H100"
        />
        <BiSearch className="top-menu-bar-side-menu-open-button top-menu-bar-object icon" />
        <BiFilterAlt className="top-menu-bar-open-cart-button top-menu-bar-object icon" />
      </header>
      {/* Top Menu Bar */}

      <div id="all-products" className="all-products-page W100">
        {/* Search results will appear here */}
        {Cards}
        {/* Search results will appear here */}
      </div>
    </>
  );
};

export default Products;
