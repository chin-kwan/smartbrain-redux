import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div
      className="ma4 mt0"
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Tilt className="br2 shadow-2">
        <div style={{ height: "100px", width: "100px" }}>
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
