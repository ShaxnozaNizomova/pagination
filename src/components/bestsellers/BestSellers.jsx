import React from "react";
import "./BestSeller.css";
import watch1 from "../../assets/images/watch1.png";
import watch2 from "../../assets/images/watch2.png";
import watch3 from "../../assets/images/watch3.png";

const BestSellers = () => {
  return (
    <div className="bestseller">
      <div className="bestseller__items">
        <div>
          <img src={watch1} alt="watch" />
        </div>
        <div>
          <h4 className="best__title">Apple</h4>
          <p className="best__text">
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
      <div className="bestseller__items">
        <div>
          <img src={watch2} alt="watch" />
        </div>
        <div>
          <h4 className="best__title">Xiaomi</h4>
          <p className="best__text">
            Xiaomi smart watches are produced by MI company.
          </p>
        </div>
      </div>
      <div className="bestseller__items">
        <div>
          <img src={watch3} alt="watch" />
        </div>
        <div>
          <h4 className="best__title">FitBit</h4>
          <p className="best__text">
            FitBit smart watches are best for there health and fitness features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
