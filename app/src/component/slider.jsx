import React from "react";

import OwlCarousel from "react-owl-carousel3";
import image1 from "../images/img1.svg";
import image2 from "../images/img2.svg";
import image3 from "../images/img3.svg";
import image4 from "../images/img4.svg";
import image5 from "../images/img5.svg";
import image6 from "../images/img6.svg";
import image7 from "../images/img7.svg";
import "./slider.css";

const colors = [
  {
    urls: image1,
  },
  {
    urls: image2,
  },
  {
    urls: image3,
  },
  {
    urls: image4,
  },
  {
    urls: image5,
  },
  {
    urls: image6,
  },
  {
    urls: image7,
  },
];
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  //   autoplaySpeed: true,
  autoplayTimeout: 1500,
  //   fluidSpeed: 500,
  //   autoplayHoverPause: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};
function Slider() {
  return (
    <div className="rok">
      <h4 className="too" style={{ textAlign: "center", marginTop: "35px" }}>
        Accepting Payments From Any UPI App Made Easy!
      </h4>
      <article className="cards">
        {/* <div className="row m-0" style={{ height: "300px", margin: "5px" }}> */}
        <OwlCarousel
          className="works-slides dept-slides owl-carousel"
          {...options}
          style={{ cursor: "pointer" }}
        >
          {colors.map((dep, index) => {
            return (
              <div className="cluz associate-img" key={index}>
                <a href={dep.link} target="_blank" rel="noopener noreferrer">
                  <img src={dep.urls} className="mono" alt="source" />
                </a>
              </div>
            );
          })}
        </OwlCarousel>
        {/* </div> */}
      </article>
    </div>
  );
}

export default Slider;
