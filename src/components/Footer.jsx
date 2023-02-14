import React from "react";
import logosapphire from "../images/logosapphire.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { NavLink } from "react-router-dom";

import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main-heading">
        <img src={logosapphire} alt="" />
        <h1>
          Bring your ideas to life, <span>and do it today.</span>
        </h1>
      </div>
      <div className="footer-list-container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-contact-info">
        <div className="email-cont">
          <img src={email} alt="" />
          <p id="email">contact@saphlink.com</p>
        </div>
        <div className="phone-cont">
          <img src={phone} alt="" />
          <p id="phone">021000012121</p>
        </div>
      </div>
    </div>
  );
}
