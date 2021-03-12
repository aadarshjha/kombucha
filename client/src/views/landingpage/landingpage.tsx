import React from "react";
import { Typography } from "antd";
import Intro from "./Intro";
import Scroll from "./Scroll";
import NavBar from "./NavBar"
import "antd/dist/antd.css";
const { Title } = Typography;

const LandingPage: React.FC<{}> = () => (
  <div>
      <NavBar />
      <Intro />
      <Scroll />
  </div>
);

export default LandingPage;
