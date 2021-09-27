import React from "react";
import { Link } from "react-router-dom";
import Logo from "./res/Logo.png";
import menubutton from "./res/menubutton.png";

export default function MyNavbar() {
  return (
    <>
      <header className="header top">
        <img
          src={Logo}
          alt="SA_designer"
          className="logo"
          onClick={() => {
            window.location = "/";
          }}
        />
        <img
          src={menubutton}
          alt="SA_designer"
          className="menubutton"
          onClick={() => {
            let elem = document.getElementById("navbar");
            elem.style.height = elem.style.height === "100vh" ? "0vh" : "100vh";
          }}
        />
        <nav id="navbar">
          <ul className="navbar-child">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Feedback">Feedback</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
