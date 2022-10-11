import React from "react";
import "./class.css";
import logo from "../images/google-play-black.svg";
import mobile from "../images/mobile2.svg";
const Class = () => {
  return (
    <div className="class2">
      <div className="class">
        <p>Collect Your UPI Payments Instantly!</p>
        <h2>IppoPay for Stores</h2>
        <p>App Available Now</p>
        <div className="images">
          <img src={logo} alt="kou" className="kou" />
          <img src={mobile} alt="mob" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Class;
