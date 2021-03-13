import React from "react";
import "antd/dist/antd.css";
import "./landingpage.css"


// I guess we can fetch this from some backend that we build. 
// this is all mocked dummy data. 
const leftMilestoneData = {
  "Event #1": ['./placeholder.png', 'Some Text tt to describe the the event. Some Tet to describe the the event. Some t to describe the the event. Some Tet to describe the the event. Some Tet to describe the the event. Some TeTet to describe the the event. Some Tet to describe the the event. Some Teo describe the event.'],
  "Event #2": ['./placeholder.png', 'Some Text to dest to describe the the event. Some Tet to describe the the event. Some Tet to describe the the event. Somt to describe the the event. Some Tee Tet to describe the the event. Some Tet to describe the the event. Some Tecribe the event.'],
  "Event #3": ['./placeholder.png', 'Some Text to describe tt to describe the the event to describe the the event. Some Tet to describe the the event. Some Tet. Some Te t to describe the the event. Some Te t to describe the the event. Some Tehe event.']
}

const rightMiletoneData = {
  "Event #4": ['./placeholder.png', 'Some Tex. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. Some Text to describe the event. '],
  "Event #5": ['./placeholder.png', 'Some Text to describevent. Some Tevent. Some Te t to describe the the event. Some Te t to describe the the event. Some Te t to describe the the event. Some Te ent.'],
  "Event #6": ['./placeholder.png', 'Some Text to dest to describe the the event. Some Tet to describe the the event. Some Tt tt to describe the the event. St to describe the the event. Some Teome Teo describe the the event. Some Tet to describe the the event. Some Tet to describe the the event. Some Tecribe the event.']
}

const Scroll: React.FC<{}> = () => (
  <div className="scroll">
    <div className="left">
        {Object.entries(leftMilestoneData).map(([key, value]) => {
          return (
            <div>
              <h1>{key}</h1>
              <img className={"imageEventData"} src={value[0]} alt=""/>
              <p>{value[1]}</p>
            </div>
          );
        })}
    </div>
    {/* <div className="vl"></div> */}
    <div className="right">
    {Object.entries(rightMiletoneData).map(([key, value]) => {
          return (
            <div>
              <h1>{key}</h1>
              <img className={"imageEventData"} src={value[0]} alt=""/>
              <p>{value[1]}</p>
            </div>
          );
        })}
    </div>
  </div>
);

export default Scroll;
