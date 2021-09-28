import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// to change layout

const MyFooter = () => {
  return (
    <footer className="footercontainer w-100">
      <nav className="footerbox">
        <ul className="leftfooter">
          <li>FAQ</li>
          <li>Help</li>
          <li>Feedback</li>
          <li>Orders and Return Policy</li>
        </ul>
        <ul className="rightfooter">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Support Us</li>
        </ul>
      </nav>
      <nav className="footerboxbottom">
        <div>
          <span>Follow us on</span>
          <br />
          <span>
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedinIn></FaLinkedinIn>
          </span>
        </div>
        <span>All Rights are Reserved by SA & Co.</span>
      </nav>
    </footer>
  );
};

export default MyFooter;
