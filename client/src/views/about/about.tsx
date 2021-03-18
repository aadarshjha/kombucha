import React from "react";
import Logo from "../../components/Logo";
import Info from "../landingpage/info";

const About: React.FC<Record<string, never>> = () => {
  return (
      <div>
        <Logo page="" />
        <Info />
      </div>
  )
};

export default About;
