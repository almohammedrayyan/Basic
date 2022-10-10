import React from "react";
import { Link } from "react-router-dom";
import pay from "../images/new-payment-gateway.svg";
import payout from "../images/new-payouts.svg";
const OtherPayment = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Other Payment Solution</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={pay}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  Payment Gateway
                </h5>
                <p class="card-text">
                  IppoPay provides e-Commerce solution for your online store.
                  With just a few easy steps of integration, get your business
                  onboard at receiving payments online from a super customized
                  checkout page.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src={payout}
                alt=""
                style={{ backgroundColor: "#eef9fe" }}
              />

              <div class="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5 class="card-title" style={{ color: "#0b4a94" }}>
                  Neo Banking Solution
                </h5>
                <p class="card-text">
                  Unlearn Traditional Banking and Integrate our tech-API's for a
                  faster and risk-free digital banking experience. Ippostacks
                  for all kinds of banking needs of your customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPayment;
