import React from "react";
import logo from "../images/logo_ippopay.svg";
import "./footer.css";
import { Link } from "react-router-dom";
import logo2 from "../images/sectigo_logo.svg";
import logo3 from "../images/pci-icon.svg";
const Footer = () => {
  return (
    <footer className="footer footer-fixed">
      <div className="container">
        <div className="row">
          <div className="imgs">
            <img src={logo} alt="text" className="img" />
            <p className="para">
              IppoPay provides Payment Infrastructure to small businesses to
              collect and distribute payments. We help businesses, freelancers,
              homeprenures, and people who do business in Tier 2 and 3 cities,
              and rural areas. IppoPay helps retail stores to accept all QR
              payment apps such as PayTm, PhonePe, Google Pay, BHIM and 150+
              other UPI apps.
            </p>
            <div className="topdiv">
              <img src={logo2} alt="logo2" width="72px" />
              <img src={logo3} alt="logo3" />
            </div>
            <div className="copyright">
              <p>
                &copy; IppoPay Technologies Pvt Ltd 2022 . All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="">Collections</a>
                <ul>
                  <li>Payment Gateway</li>
                  <li>Payment Link</li>
                  <li>Invoice</li>
                  <li>Payment pages</li>
                </ul>
              </li>
              <li>
                <a href="">Banking As A Service</a>
                <ul>
                  <li>Neo Banking API</li>
                </ul>
              </li>
              <li>
                <a href="">Make Payouts</a>
                <ul>
                  <li>Payouts</li>
                </ul>
              </li>
              <li>
                <a href="">Developers</a>
                <ul>
                  <li>Documentation</li>
                </ul>
              </li>
              <li>
                <a href="">More</a>
                <ul>
                  <li>More</li>
                  <li>International Collections</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-cols">
            <ul>
              <li>
                <a href="">Company</a>
                <ul>
                  <li>About us</li>
                  <li>Media Room</li>
                </ul>
              </li>
              <li>
                <a href="">Resources</a>
                <ul>
                  <li>Blog</li>
                  <li>Terms And Conditions</li>
                  <li>Cancellation/Refunds</li>
                </ul>
              </li>
              <li>
                <a href="">Support</a>
                <ul>
                  <li>Contact us</li>
                </ul>
              </li>
            </ul>
          </div>
          {/*          
          <div className="copyright">
            <p>&copy; 2022 AASC</p>
            <div className="power">
              <p>Powered By</p> <a href="">Vertace</a>{" "}
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
