/* eslint-disable array-callback-return */
import React from "react";
import image from "../images/audio-notify.svg";
import "./collection.css";
import "./main.css";
import { Zoom, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import collection from "../images/collection-icon.svg";
import image1 from "../images/new-qrcode.svg";
import image2 from "../images/new-cashrecord.svg";
import image3 from "../images/new-paymentlink.svg";
import image4 from "../images/new-taptopay.svg";
import image5 from "../images/new-subuser.svg";
import Main from "./main";
const Collection = () => {
  const images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
  ];
  return (
    <div className="flex-container">
      <div className="flex-child magenta">
        <div className="clasx">
          <button
            style={{
              border: "none",
              borderRadius: "20px",
              width: "110px",
              height: "40px",
            }}
          >
            {" "}
            <img src={collection} alt="col" /> collections
          </button>
        </div>
        <div>
          <h2 className="pay">Collect Payments Instantly</h2>
        </div>
        <div>
          <div className="div">
            {" "}
            <div className="block-1">
              <i className="bi bi-qr-code">
                <span className="textname">QR CODE</span>
              </i>
              <p className="textpara">
                Share QR and collect payments <br />
                across any UPI App.
              </p>
            </div>
          </div>
          <div className="div">
            {" "}
            <div className="block-1">
              <i className="bi bi-paypal">
                <span className="textname">Payment Link</span>
              </i>
              <p className="textpara">
                Share Payment Links and
                <br />
                collect your Payments.
              </p>
            </div>
          </div>
          <div className="div">
            <div className="block-1">
              <i className="bi bi-geo-alt">
                <span className="textname">Multiple Branch</span>
              </i>
              <p className="textpara">
                Manage and view Payments of all
                <br />
                your business Outlets.
              </p>
            </div>
          </div>
          <div className="div-2">
            <div className="block-1">
              <i className="bi bi-cash">
                <span className="textname">Cash Record</span>
              </i>
              <p className="textpara">
                Record Offline Payments
                <br />
                by Cash.
              </p>
            </div>
          </div>
          <div className="div-2">
            <div className="block-1">
              <i className="bi bi-phone">
                <span className="textname">Tap to Phone</span>
              </i>
              <p className="textpara">
                Accept Contactless Payments from
                <br />
                NFC enabled Cards/SmartPhones.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Collection;
