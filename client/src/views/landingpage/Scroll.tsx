import React from "react";
import "antd/dist/antd.css";
import { Divider } from 'antd';
import "./landingpage.css"


// I guess we can fetch this from some backend that we build. 
// this is all mocked dummy data. 
const leftMilestoneData = {
  "Event #1": ['./placeholder.png', 'Some Text to describe the event.'],
  "Event #2": ['./placeholder.png', 'Some Text to describe the event.'],
  "Event #3": ['./placeholder.png', 'Some Text to describe the event.']
}

const rightMiletoneData = {
  "Event #1": ['./placeholder.png', 'Some Text to describe the event.'],
  "Event #2": ['./placeholder.png', 'Some Text to describe the event.'],
  "Event #3": ['./placeholder.png', 'Some Text to describe the event.']
}

const Scroll: React.FC<{}> = () => (
  <div className="scroll">
    <div className="left">
        {Object.entries(leftMilestoneData).map(([key, value]) => {
          return (
            <div>
              <h1>{key}</h1>
              <img src={value[0]} alt=""/>
              <p>{value[1]}</p>
            </div>
          );
        })}
    </div>
    <div>
      <Divider type="vertical" style={{backgroundColor: 'black', width: '2px'}}/>
    </div>
    <div className="right">
    {Object.entries(rightMiletoneData).map(([key, value]) => {
          return (
            <div>
              <h1>{key}</h1>
              <img src={value[0]} alt=""/>
              <p>{value[1]}</p>
            </div>
          );
        })}
    </div>
  </div>
);

export default Scroll;
