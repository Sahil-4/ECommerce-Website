import React from "react";
import Topbar from "../Components/Topbar";
import LatestProduct from "../Components/LatestProduct";
import Trendingproductsbox from "../Components/Trendingproductsbox";

const Home = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="home W100">
        <LatestProduct />
        <Trendingproductsbox />
        <Trendingproductsbox />
        <Trendingproductsbox />
      </div>
    </>
  );
};

export default Home;
