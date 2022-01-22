import React from "react";
import Productbox from "../Components/Productbox";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import product1 from "../Components/res/Headphone1.jpg";

const Products = () => {
  return (
    <>
      <header className="menu-bar W100">
        <input
          type="text"
          name="products"
          placeholder="Search Products"
          className="search-box H100"
        />
        {/* Search product button */}
        <BiSearch className="menu-cart-button top-bar-object" />

        {/* Filter product button */}
        <BiFilterAlt className="menu-open-button top-bar-object" />
      </header>
      <div id="all-products" className="search-products-page W100">
        {/* Search results will appear here */}
        <Productbox
          key={0}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={1}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={2}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={3}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={4}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={5}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={6}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={7}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={8}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={9}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        <Productbox
          key={10}
          ProductImage={product1}
          ProductImageName={"NA"}
          ProductName={"BSS Headphones"}
          ProductDescription={"Kaan faad headphones mat khareedna koi"}
          ProductPrice={"2276/-"}
        />
        {/* Search results will appear here */}
      </div>
    </>
  );
};

export default Products;
