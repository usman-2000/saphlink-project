import React from "react";
import "../styles/aboutHome.css";
import logoMain from "../images/logoMain.png";

export default function AboutHome() {
  return (
    <div className="about-container">
      <div className="img-cont">
        <img src={logoMain} alt="" />
      </div>
      <div className="about-text">
        <h1>Who we are?</h1>
        <p>
          A group of individuals with numerous decades of experience in the
          fields marketing and software, each of us having supported complex
          projects for some of the largest organizations across financial
          services, high-tech, logistics, aviation, and consumer packaged goods
          industries. We are on a mission to bring life to the dreams or ideas
          of the most passionate and motivated individuals or organizations.
        </p>
      </div>
    </div>
  );
}
