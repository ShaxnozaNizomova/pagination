import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import group from "../../assets/images/group.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <div>
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="navbar__menu">
            <li className="menu__link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="menu__link">Brands</li>
            <li className="menu__link">Recent Products</li>
            <li className="menu__link">Contact</li>
            <li className="menu__link">About</li>
          </ul>
        </div>
        <div>
          <Link to={"/login"}>
            {" "}
            <img src={group} alt="svgs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
