import React from "react";

const LatestProduct = () => {
  return (
    <div className="latest-product-container W100">
      <div className="latest-product-image-box" id="latest-product-image-box">
        {/* Image will appear here */}
      </div>
      <div className="latest-product-info W100">
        <h3 className="latest-product-title">Product Name</h3>
        <p className="latest-product-description">
          Product Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Product Description Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <span className="latest-product-price-tag">INR 699/-</span>
      </div>
    </div>
  );
};

export default LatestProduct;
