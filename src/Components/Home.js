import React from "react";
// import phone1Img from "./res/phone1.png";
// import Trendingproducts from "./Trendingproducts";

const Home = () => {
  return (
    <div id="Home">
      {/* <div className="highlightedproductbox w-100p">
        <div className="highlightedproductimgbox w-100p scroll-hide">
          <img
            src={phone1Img}
            alt="Any Product"
            className="highlightedproductimg w-100p"
          />
          <img
            src={phone1Img}
            alt="Any Product"
            className="highlightedproductimg w-100p"
          />
        </div>
        <h1 className="highlightedproductheading">OPPO A5 2020</h1>
        <p className="highlightedproductdescription">
          Oppo A5 2020 mobile with 6.50-inch touchscreen display powered by
          octa-core Qualcomm Snapdragon 665 processor.
          <span id="highlightedproductdescriptionmoretext">
            It comes with 3GB of RAM. The Oppo A5 2020 runs Android 9 Pie and is
            powered by a 5000mAh battery.
          </span>
          <button
            id="readMoreButton"
            className="readMoreButton btn"
            onClick={() => {
              let elem = document.getElementById(
                "highlightedproductdescriptionmoretext"
              );
              elem.style.display =
                elem.style.display === "inline" ? "none" : "inline";
              let thisButton = document.getElementById("readMoreButton");
              thisButton.innerText =
                thisButton.innerText === "Read More"
                  ? "Read Less"
                  : "Read More";
            }}
          >
            Read More
          </button>
        </p>
      </div> */}
      {/* <Trendingproducts></Trendingproducts> */}
    </div>
  );
};

export default Home;