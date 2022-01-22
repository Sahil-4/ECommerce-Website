import React from "react";

const Productcard = (props) => {
  return (
    <div className="trendingproductcard H100">
      <div className="trendingproductA1ImgBox">
        <img
          src={props.Image}
          alt={props.ImageName}
          className="trendingproductA1ImgImg W100"
        />
      </div>
      <div className="trendingproductA1DescriptionBox W100">
        <h3 className="trendingproducttitle">{props.Name}</h3>
        <p className="trendingproductdescription">{props.Description}</p>
        <h4>{props.Price}</h4>
      </div>
    </div>
  );
};

export default Productcard;
