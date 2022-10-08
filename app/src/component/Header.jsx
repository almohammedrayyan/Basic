import React from "react";
import svg1 from "../images/logo_ippopay.svg";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={svg1} alt="" />
        <nav className="nav">
          <ul className="ul">
            <li className="link">Payment GateWay</li>
            <li className="link">Payouts</li>
            <li className="link">Net Banking Api</li>
            <li className="link">Pricing</li>
          </ul>
        </nav>
        <div className="but">
          <button className="button-1">Login</button>
          <button className="button-2">
            Sign In<i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
