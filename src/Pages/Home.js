import React from "react";
import Topbar from "../Components/Topbar";
import FeaturedProduct from "../Components/FeaturedProduct";
import Trendingproducts from "../Components/Trendingproducts";

const Home = () => {
  return (
    <>
      <Topbar></Topbar>
      <div className="main W100">
        <FeaturedProduct />
        <Trendingproducts />
        <Trendingproducts />
        <Trendingproducts />
      </div>
    </>
  );
};

export default Home;
