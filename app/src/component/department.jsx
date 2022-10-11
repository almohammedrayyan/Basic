import React from "react";
import image1 from "../images/liveright.png";
import image2 from "../images/mealbuzz.png";
import image3 from "../images/nararsu.jpg";
import image4 from "../images/ck-bak.png";
import image5 from "../images/roamsoft.jpg";
import image6 from "../images/vegroute.png";
import "./department.css";
const Department = () => {
  return (
    <div>
      <div className="dep">
        <h3 className="text-name">Client</h3>
      </div>
      <div className="card-action">
        <div class="cluzz cont">
          <img src={image1} alt="" className="img" />
          <img src={image2} alt="" className="img" />
          <img src={image3} alt="" className="img" />
          <img src={image4} alt="" className="img" />
          <img src={image5} alt="" className="img" />
          <img src={image6} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Department;
