import React from "react";
import Button from "./Button";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1 id="hero-main-heading">
        They're your ideas & goals, we just bring them to life.
      </h1>
      <h3 id="hero-sub-main">
        Not your average digital agency, but your strategic business partner.
      </h3>
      <div className="hero-btn-container">
        <Button className="btn-1" name="Learn More" />
        <Button className="btn-1" name="Contact Us" />
      </div>
    </div>
  );
}

export default Hero;
