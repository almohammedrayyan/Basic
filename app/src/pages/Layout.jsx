import React from "react";
import Class from "../component/class";
import Collection from "../component/collection";
import Department from "../component/department";
import Footer from "../component/footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/main";
import NeoBanking from "../component/neo-banking";
import OtherBenefits from "../component/otherbenifits";
import OtherPayment from "../component/otherpayement";
import Slider from "../component/slider";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", marginTop: "5%" }}>
        <Hero />
      </div>
      <div style={{ position: "relative", marginTop: "5%" }}>
        <Slider />
      </div>
      <div style={{ position: "relative", marginLeft: "110px" }}>
        <Collection />
      </div>
      <div>
        <NeoBanking style={{ position: "relative" }} />
      </div>
      <div>
        <OtherPayment />
      </div>
      <div>
        <OtherBenefits />
      </div>
      <div style={{ position: "relative", marginTop: "10%" }}>
        <Class />
      </div>
      <div style={{ position: "relative", marginTop: "15%" }}>
        <Department />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
