import React from "react";
import "./Hero.css";
import watch from "../../assets/images/watch.png";
import search from "../../assets/images/search.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__items">
        <div>
          <h1 className="hero__title">
            Discover <br /> Most Suitable Watches
          </h1>
          <p className="hero__text">
            Find the best, reliable, and cheap smart watches here. <br /> We
            focus on product quality. Here you can find smart <br /> watches of
            almost all brands. So why you are waiting? Just order now!
          </p>
          <div className="search">
            <img src={search} alt="search" />
            <input
              className="hero__input"
              type="text"
              placeholder="Find the best brands"
            />
            <button className="hero__button">Search</button>
          </div>
        </div>
        <div>
          <img src={watch} alt="watch" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
