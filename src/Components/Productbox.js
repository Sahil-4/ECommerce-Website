import React from "react";

const Productbox = (props) => {
  return (
    <div className="product-box W100">
      <div className="product-box-image-box H100">
        <img
          className="product-box-image H100 W100"
          src={props.ProductImage}
          alt="product1"
        />
      </div>
      <div className="product-box-info-box H100">
        <h3 className="product-box-name">{props.ProductName}</h3>
        <h4 className="product-box-description">{props.ProductDescription}</h4>
        <h4 className="product-box-price-tag">{props.ProductPrice}</h4>
      </div>
    </div>
  );
};

export default Productbox;
