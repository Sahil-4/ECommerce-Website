import React from "react";
import Productcard from "./Productcard";
import Show1 from "../Components/res/Show1.jpg";
// const Show1 =
//   "https://firebasestorage.googleapis.com/v0/b/storage4otherprojs.appspot.com/o/SADes%2FShow2.jpg?alt=media&token=36cd6e2c-ece9-4443-85fd-57c357992228";

const Trendingproducts = () => {
  const Cards = [];
  for (let i = 0; i <= 9; i++) {
    Cards.push(
      <Productcard
        key={i}
        Image={Show1}
        ImageName={"NA"}
        Name={"Bourge Men's Running Shoes"}
        Description={
          "This is this product description more more more description"
        }
        Price="322/-"
        Stars={5}
      />
    );
  }
  return (
    <>
      <div className="trending-products-box">{Cards}</div>
    </>
  );
};

export default Trendingproducts;
