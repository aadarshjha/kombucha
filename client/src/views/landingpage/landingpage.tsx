import React from "react";
import Intro from "./Intro";
import Info from "./info";
import "antd/dist/antd.css";
import "./landingpage.css";

const LandingPage: React.FC<Record<string, never>> = () => (
  <div className="landingFlex">
    <div className="intro">
      <Intro />
    </div>
    <div className="scroll">
      <Info />
      {/* <Scroll /> */}
    </div>
  </div>
);

export default LandingPage;
