import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../images/new-qrcode.svg";
import image2 from "../images/new-cashrecord.svg";
import image3 from "../images/new-paymentlink.svg";
import image4 from "../images/new-taptopay.svg";
import image5 from "../images/new-subuser.svg";
import "./main.css";
const Main = () => {
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
    <div>
      <Fade arrows={false}>
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
  );
};

export default Main;
