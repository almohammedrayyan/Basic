import React from "react";
import "./hero.css";
import hero from "../images/hero-image.svg";
import icon from "../images/google-btn-new.svg";
const Hero = () => {
  return (
    <div class="flex-container">
      <div class="flex-child magenta clasxx">
        <div className="clasxx">
          <img src={hero} alt="hero" />
        </div>
      </div>

      <div class="flex-child green">
        <p className="text-1">Receive payments the Easy Way</p>
        <h1 className="head-1">ALL- IN - ONE Payments App</h1>
        <h1 className="head-2">
          Power your Store <br />
          like never before !
        </h1>
        <button className="but-1">
          <img
            src={icon}
            alt="icon"
            style={{ position: "relative", left: "-30px", top: "12px" }}
          />
          <span style={{ position: "relative", left: "9px" }}>
            Get in on <br />
          </span>
          <span
            style={{
              position: "relative",
              left: "34px",
              color: "#003366",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {" "}
            Google Pay
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
