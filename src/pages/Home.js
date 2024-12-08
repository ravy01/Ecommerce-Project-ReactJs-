import React from "react";

import Featurepart from "../components/Featurepart";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Subscribe from "../components/Subscribe";
import Clientlogo from "../components/Clientlogo";
import "owl.carousel/dist/assets/owl.carousel.css";
import ProductList from "../components/ProductList";
import Bestseller from "../components/Bestseller";

const Home = () => {
  return (
    <div>

        <Banner />
        <Featurepart />
        <ProductList/>
        <Offer />
        <Bestseller/>
        <Subscribe />
        <Clientlogo />
    
    </div>
  );
};

export default Home;
