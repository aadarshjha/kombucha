import React from "react";
import Intro from "./Intro";
import "antd/dist/antd.css";
import "./landingpage.css";

const LandingPage: React.FC<Record<string, never>> = () => (
  <div className="landingFlex">
    <div className="intro">
      <Intro />
    </div>
  </div>
);

export default LandingPage;
