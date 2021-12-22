import React from "react";
import { Link } from "react-router-dom";
import CartImage from "./res/CartImage.png";
import OpenMenu from "./res/OpenMenu.png";
import CloseMenu from "./res/CloseMenu.png";

const Topbar = () => {
  const toggleSideBar = () => {
    let sideBar = document.getElementById("side-menu");
    sideBar.style.width = sideBar.style.width !== "0%" ? "0%" : "35%";
  };
  return (
    <>
      <header className="menu-bar">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="search-box top-bar-object"
        />
        <img
          src={OpenMenu}
          onClick={toggleSideBar}
          className="menu-open-button top-bar-object"
          alt="open-menu"
        />
        <img
          src={CartImage}
          className="menu-cart-button top-bar-object"
          alt="open-cart"
        />
      </header>
      <menu className="side-menu" id="side-menu">
        <img
          src={CloseMenu}
          onClick={toggleSideBar}
          className="menu-close-button side-menu-links"
          alt="close-menu"
        />
        <Link className="side-menu-links" to="/">
          Home
        </Link>
        <Link className="side-menu-links" to="/products">
          All Products
        </Link>
        <Link className="side-menu-links" to="/categories">
          Categories
        </Link>
        <Link className="side-menu-links" to="/feedback">
          Feedback
        </Link>
        <Link className="side-menu-links" to="/help">
          Help
        </Link>
        <Link className="side-menu-links" to="/about">
          About Us
        </Link>
        <Link className="side-menu-links" to="/login">
          Log Out
        </Link>
      </menu>
    </>
  );
};

export default Topbar;
