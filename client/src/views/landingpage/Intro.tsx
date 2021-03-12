import React from "react";
import { Typography } from "antd";
import "antd/dist/antd.css";
import "./landingpage.css"

const Intro: React.FC<{}> = () => (
  <div className="centeredHeader">
      <img src="vums.png" alt="VUMS Logo" className="vumslogo"/>
      <h1>Welcome To VUMS</h1>
      <p className="descriptionText">
        The Vanderbilt Undergraduate Microbiome Society aims to educate the local community about the microbiome and the field’s latest developments, to promote social and microbial diversity, and to help facilitate the distribution of fresh produce to underprivileged persons in Davidson County.
      </p>
  </div>
);

export default Intro;
