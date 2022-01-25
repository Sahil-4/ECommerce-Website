import React from "react";
import Rate from "./Rate";

const FeaturedProduct = () => {
  return (
    <div className="featured-product-container W100">
      <div
        className="featured-product-image-box"
        id="featured-product-image-box"
      ></div>
      <div className="featured-product-info W100">
        <h3 className="featured-product-title">Product Name</h3>
        <p className="featured-product-description">
          Product Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Product Description Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div className="featured-product-rate">
          <span className="featured-product-price-tag">INR 699/-</span>
          <span className="rating-box">
            <Rate Stars={4}></Rate>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
