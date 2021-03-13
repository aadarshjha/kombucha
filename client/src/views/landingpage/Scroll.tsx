import React from "react";
import "antd/dist/antd.css";
import { Divider } from 'antd';
import "./landingpage.css"

const Scroll: React.FC<{}> = () => (
  <div className="scroll">
    <div className="left">
      test
    </div>
    <div>
      <Divider type="vertical" style={{backgroundColor: 'black', width: '3px'}}/>
    </div>
    <div className="right">
      test
    </div>
  </div>
);

export default Scroll;
