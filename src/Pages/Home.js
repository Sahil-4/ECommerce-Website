import React from "react";
import Topbar from "../Components/Topbar";
import LatestProduct from "../Components/LatestProduct";
import Trendingproducts from "../Components/Trendingproducts";

const Home = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="home">
        <LatestProduct></LatestProduct>
        <Trendingproducts></Trendingproducts>
      </div>
    </>
  );
};

export default Home;
