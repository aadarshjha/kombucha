import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "./landingpage.css";
import { Avatar } from "antd";
import { BACKEND_URL } from "../../api";

const dummyData = [
  "Asia Miller",
  "Aadarsh Jha",
  `${BACKEND_URL}/`,
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
    <br />
    <br />

    <h1>What Do We Do?</h1>
    <p className="descriptionText">
      The Vanderbilt Undergraduate Microbiome Society aims to educate the local
      community about the microbiome and the field’s latest developments, to
      promote social and microbial diversity, and to help facilitate the
      distribution of fresh produce to underprivileged persons in Davidson
      County.
    </p>

    <br />
    <br />

    <h1>How Can I Get Involved?</h1>
    <p className="descriptionText">
      Contact us through our{" "}
      <a href="https://anchorlink.vanderbilt.edu/organization/microbiome">
        AnchorLink
      </a>
      !
    </p>
  </div>
);

export default Info;
