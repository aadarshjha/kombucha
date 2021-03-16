import React from "react";
import Intro from "./Intro";
import Scroll from "./Scroll";
import NavBar from "../../NavBar";
import "antd/dist/antd.css";
import "./landingpage.css";

const LandingPage: React.FC<Record<string, never>> = () => (
  <div className="landingFlex">
    <div className="intro">
      <Intro />
    </div>
    <div className="scroll">
      <Scroll />
    </div>
  </div>
);

export default LandingPage;
