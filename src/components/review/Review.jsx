import React from "react";
import "./Review.css";
import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import rating from "../../assets/images/rating.svg";
import dots from "../../assets/images/dots.svg";
import news from "../../assets/images/Newsletter.svg";
const Review = () => {
  return (
    <div>
      <p className="products__title">Here are our some of the best clients.</p>
      <h3 className="products__title2">What People Say About Us</h3>
      <div className="bestseller">
        <div className="bestseller__items">
          <div>
            <img src={photo1} alt="watch" />
          </div>
          <div>
            <h4 className="best__title">Hamza Faizi</h4>
            <p className="best__text">
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
            <img src={rating} alt="" />
          </div>
        </div>
        <div className="bestseller__items">
          <div>
            <img src={photo2} alt="watch" />
          </div>
          <div>
            <h4 className="best__title">Hafiz Huzaifa</h4>
            <p className="best__text">
              I’ve been purchasing smart watches of Mohid for a long time. All
              the products are good quality.
            </p>
            <img src={rating} alt="" />
          </div>
        </div>
      </div>
      <div className="dots">
        <img src={dots} alt="dots" />
      </div>
      <div className="news">
        <img src={news} alt="" />
      </div>
    </div>
  );
};

export default Review;
