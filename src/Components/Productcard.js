import React from "react";
import Rate from "./Rate";

const Productcard = (props) => {
  return (
    <div className="trending-product-card H100">
      <div className="trending-product-image-box">
        <img
          src={props.Image}
          alt={props.ImageName}
          className="trending-product-image W100"
        />
      </div>
      <div className="trending-product-description-box W100">
        <h3 className="trending-product-title">{props.Name}</h3>
        <p className="trending-product-description">{props.Description}</p>
        <span className="trending-product-price">{props.Price}</span>
        <span className="trending-product-rating-box rating-box">
          <Rate Stars={props.Stars}></Rate>
        </span>
        <button className="trending-product-add-to-cart-button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
