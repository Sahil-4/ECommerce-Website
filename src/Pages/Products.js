import React from "react";
import product1 from "../Components/res/product1.jpg";
import { BiSearch, BiFilter } from "react-icons/bi";

const Products = () => {
  return (
    <>
      <header className="menu-bar W100">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="search-box2 H100"
        />
        {/* Filter button */}

        {/* search product button */}
        <button className="search-btn H100">Search</button>
      </header>
      <div id="products" className="products-page W100 H100">
        {/* Search results will appear here */}

        <div className="product-card W100">
          <div className="product-card-image-box H100">
            <img
              className="product-card-image H100 W100"
              src={product1}
              alt="product1"
            />
          </div>
          <div className="product-card-info-box H100">
            <h3 className="product-card-name">Name</h3>
            <p className="product-card-description">
              Description Description Description Description
              DescriptionDescription.
            </p>
            <h6 className="product-card-price-tag">INR 655/-</h6>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Products;
