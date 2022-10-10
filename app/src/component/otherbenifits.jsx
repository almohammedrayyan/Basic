import React from "react";
import "./other-benefits.css";
import image1 from "../images/loan.svg";
import image2 from "../images/insurance.svg";
import image3 from "../images/wealth.svg";

const OtherBenefits = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Benefits</h1>

      <div
        style={{ overflow: "hidden", position: "relative", marginLeft: "14%" }}
      >
        <main className="grid">
          <article
            style={{
              backgroundColor: "#f9f9f9",
              width: "300px",
              height: "305px",
            }}
          >
            <div className="text">
              <h3>Loan</h3>
              <ul>
                <li>2X efficient than Conventional Bank Approved Loans.</li>
                <li>Quick Processing Time.</li>
                <li>Zero Collaterals and Low Risk.</li>
              </ul>
            </div>
            <img src={image1} alt="as" />
          </article>
          <article
            style={{
              backgroundColor: "#f9f9f9",
              width: "300px",
              height: "305px",
            }}
          >
            <div className="text">
              <h3>Insurance</h3>
              <ul>
                <li>
                  A Data and Tech Driven Digital Insurance Claims at Record
                  Speed.
                </li>
                <li>Avail all types Motor and Non-Motor Insurance.</li>
                <li>Claims at Record Speed.</li>
              </ul>
            </div>
            <img src={image2} alt="as" />
          </article>
          <article
            style={{
              backgroundColor: "#f9f9f9",
              width: "300px",
              height: "305px",
            }}
          >
            <div className="text">
              <h3>Wealth Management</h3>
              <ul>
                <li>Perfect for Mindful Long Term Returns.</li>
                <li>Indulge also in Over night/1 day investments.</li>
                <li>Choose from a Range of Plans.</li>
              </ul>
            </div>
            <img src={image3} alt="as" />
          </article>
        </main>
      </div>
    </div>
  );
};

export default OtherBenefits;
