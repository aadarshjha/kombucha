import React from "react";
import "antd/dist/antd.css";
import "./logo.css";

type logoProps = {
  page: string;
};

// accepts a prop to describe what page we're on
const Logo: React.FC<logoProps> = ({ page }: logoProps) => (
  <div className="centered">
    <img src="vums.png" alt="VUMS Logo" className="vumslogo" />
    <h1>{page}</h1>
  </div>
);

export default Logo;
