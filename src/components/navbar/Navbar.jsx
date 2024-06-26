import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import group from "../../assets/images/group.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="navbar__menu">
            <li className="menu__link">Home</li>
            <li className="menu__link">Brands</li>
            <li className="menu__link">Recent Products</li>
            <li className="menu__link">Contact</li>
            <li className="menu__link">About</li>
          </ul>
        </div>
        <div>
          <img src={group} alt="svgs" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
