import React from "react";
import "../styles/button.css";

function Button(props) {
  return (
    <div className="btn-container">
      <button className={props.className}>{props.name}</button>
    </div>
  );
}

export default Button;
