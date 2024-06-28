import React from "react";
import Hero from "../../components/hero/Hero";
import BestSellers from "../../components/bestsellers/BestSellers";
import Products from "../../components/products/Products";
import Review from "../../components/review/Review";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellers />
      <Products />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
