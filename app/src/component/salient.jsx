import React from "react";
import image1 from "../images/audio-notify.svg";
import image2 from "../images/epos-img.svg";
import image3 from "../images/ledger-img.svg";
import image4 from "../images/new_multiplelang.svg";
import image5 from "../images/reports-img.svg";
import logo from "../images/logo_ippopay.svg";
const Salient = () => {
  return (
    <div>
      <div className="clasxxx">
        <button
          style={{
            border: "none",
            borderRadius: "20px",
            width: "250px",
            height: "40px",
            position: "relative",
            top: "45px",
          }}
        >
          {" "}
          <img src={logo} alt="col" width="60px" />{" "}
          <span style={{ color: "#0b4a94" }}>Others Bebefits</span>
          <h5 style={{ position: "relative", top: "10px" }}>
            Salient Feature of on Merchant App
          </h5>
        </button>
      </div>
      <div></div>

      <div class="container">
        <div class="row" style={{ position: "relative", left: "103px" }}>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={image1}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  Audio Notification
                </h5>
                <p class="card-text">
                  An audio notification whenever you receive payments in the
                  language of your choice right on your app.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={image2}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  ePOS
                </h5>
                <p class="card-text">
                  The Electronic Point of Sale in your App, allows you to load
                  products and select the products to buy and generate a bill
                  and collect payment against an orde
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={image3}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  ledger
                </h5>
                <p class="card-text">
                  The all Powerful Digital Ledger makes note of all the offline
                  and online transactions and also provides details of amount
                  paid and outstanding amount from a customer.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={image4}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  Multiple Language
                </h5>
                <p class="card-text">
                  Select your language of choice from 11 options of major
                  regional languages in India for your App.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={image5}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  Reports
                </h5>
                <p class="card-text">
                  A downloadable report Generation and Summary for a look at
                  detailed inflow and outflow of funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salient;
