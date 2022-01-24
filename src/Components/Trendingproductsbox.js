import React from "react";
import Productcard from "./Productcard";
// import Show1 from "../Components/res/Show1.jpg";
const Show1 = "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/SADes%2FShow2.jpg?alt=media&token=36cd6e2c-ece9-4443-85fd-57c357992228";

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
