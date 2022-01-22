import React from "react";
import { Link } from "react-router-dom";
import {
  BiMenuAltLeft,
  BiCart,
  BiCategoryAlt,
  BiHelpCircle,
  BiInfoCircle,
  BiLogOut,
} from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { AiOutlineHome, AiFillAppstore } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";

const Topbar = () => {
  const toggleSideBar = () => {
    let sideBar = document.getElementById("side-bar");
    sideBar.style.width = sideBar.style.width !== "0%" ? "0%" : "30%";
  };

  return (
    <>
      {/* Top Menu Bar */}
      <header className="menu-bar W100">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="search-box top-bar-object H100"
        />
        <BiMenuAltLeft
          onClick={toggleSideBar}
          className="menu-open-button top-bar-object icon"
        />
        <BiCart className="menu-cart-button top-bar-object icon" />
      </header>
      {/* Top Menu Bar */}

      {/* Side Bar */}
      <div className="side-bar" id="side-bar">
        <IoIosClose
          onClick={toggleSideBar}
          className="menu-close-button icon"
        />
        <ul className="nav-link-container W100">
          <li className="side-menu-links W100">
            <Link to="/" className="link">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/products" className="link">
              <AiFillAppstore />
              All Products
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/categories" className="link">
              <BiCategoryAlt />
              Categories
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/feedback" className="link">
              <MdFeedback />
              Feedback
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/help" className="link">
              <BiHelpCircle />
              Help
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/login" className="link">
              <BiLogOut />
              Log Out
            </Link>
          </li>
          <li className="side-menu-links W100">
            <Link to="/about-us" className="link">
              <BiInfoCircle />
              About Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Side Bar */}
    </>
  );
};

export default Topbar;
