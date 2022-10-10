import React from "react";
import image from "../images/audio-notify.svg";
import "./neo-banking.css";
import "./collection.css";
import "./main.css";
import { Zoom, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import collection from "../images/neo-banking.svg";
import image1 from "../images/new-businessaccount.svg";
import image2 from "../images/new-ippocard.svg";
import image3 from "../images/new-neopayouts.svg";
import image4 from "../images/new-vendor.svg";
import image5 from "../images/new-salary.svg";
import Main from "./main";

const NeoBanking = () => {
  return (
    <div className="flex-container">
      <div className="fades">
        <Fade
          arrows={false}
          autoplay={true}
          duration={1000}
          transitionDuration={700}
        >
          <div className="each-slide">
            <div>
              <img src={image1} alt="a" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={image2} alt="a" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={image3} alt="a" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={image4} alt="a" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={image5} alt="a" />
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex-child magenta">
        <div className="clasx">
          <button
            style={{
              border: "none",
              borderRadius: "20px",
              width: "250px",
              height: "40px",
            }}
          >
            {" "}
            <img src={collection} alt="col" />{" "}
            <span style={{ color: "red" }}>Neo Banking Solutions</span>
          </button>
        </div>
        <div>
          <h2 className="pay">Exclusive Digital Banking Services</h2>
        </div>
        <div>
          <div className="div">
            {" "}
            <div className="block-1">
              <i class="bi bi-bank2">
                <span className="textname">Business Account</span>
              </i>
              <p className="textpara">
                Receive Payments of any kind to
                <br />
                Merchant Virtual Account
              </p>
            </div>
          </div>
          <div className="div">
            {" "}
            <div className="block-1">
              <i class="bi bi-wallet2">
                <span className="textname">PayOuts</span>
              </i>
              <p className="textpara">
                Clear Bulk/Individual payments
                <br />
                from your dashboard.
              </p>
            </div>
          </div>
          <div className="div">
            <div className="block-1">
              <i class="bi bi-cash">
                <span className="textname">Salary Disbursements</span>
              </i>
              <p className="textpara">
                Plan Payroll and disburse
                <br />
                wage payments.
              </p>
            </div>
          </div>
          <div className="div-2">
            <div className="block-1">
              <i class="bi bi-credit-card">
                <span className="textname">Debit Card</span>
              </i>
              <p className="textpara">
                Make Payments at POS terminals
                <br />
                or Withdraw Cash from ATM’s.
              </p>
            </div>
          </div>
          <div className="div-2">
            <div className="block-1">
              <i class="bi bi-credit-card-2-front">
                <span className="textname">Vendor Payments</span>
              </i>
              <p className="textpara">
                Pay, Track expenses and Manage
                <br />
                vendor payments the Easy way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoBanking;
