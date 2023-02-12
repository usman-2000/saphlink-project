import React from "react";
import "../styles/cube.css";

function Cube() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="top"></div>
        <div>
          <span style={{ "--i": "0" }}></span>
          <span style={{ "--i": "1" }}></span>
          <span style={{ "--i": "2" }}></span>
          <span style={{ "--i": "3" }}></span>
        </div>
      </div>
    </div>
  );
}

export default Cube;
