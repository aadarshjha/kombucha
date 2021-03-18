import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "./landingpage.css";
import { Avatar } from "antd";

const dummyData = [
  "Asia Miller",
  "Aadarsh Jha",
  "Sam Lee",
  "Ashwin Kumar",
  "Zeyad Moustafa",
];

const Info: React.FC<Record<string, never>> = () => (
  <div className="centeredHeader">
    {/* general information about VUMS */}
    <h1>Meet The Board</h1>

    <div className="avatars">
      {dummyData.map((element) => {
        return (
          <div key={element}>
            <Avatar size={128} icon={<UserOutlined />} />
            {/* this is temp (br) dont roast */}
            <br />
            <br />
            <p>{element}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Info;
