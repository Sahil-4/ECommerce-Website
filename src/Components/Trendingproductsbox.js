import React from "react";
import Productcard from "./Productcard";
import Show1 from "./res/Show1.jpg";

const Trendingproductsbox = () => {
  return (
    <>
      <div className="trendingproductsbox">
        <Productcard
          key={0}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={2}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={3}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={4}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={5}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={6}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
        <Productcard
          key={7}
          Image={Show1}
          ImageName={"NA"}
          Name={"Bourge Men's Running Shoes"}
          Description={
            "This is this product description more more more description"
          }
          Price="322/-"
        />
      </div>
    </>
  );
};

export default Trendingproductsbox;
