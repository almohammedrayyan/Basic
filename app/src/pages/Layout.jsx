import React from "react";
import Collection from "../component/collection";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Main from "../component/main";
import Slider from "../component/slider";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", marginTop: "10%" }}>
        <Hero />
      </div>
      <div style={{ position: "relative", marginTop: "10%" }}>
        <Slider />
      </div>
      <div style={{ position: "relative" }}>
        <Collection />
      </div>
      <div>{/* <Main /> */}</div>
    </div>
  );
};

export default Layout;
