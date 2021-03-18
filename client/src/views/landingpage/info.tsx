import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from '@ant-design/icons';
import "./landingpage.css";
import { Avatar } from "antd";

const Info: React.FC<Record<string, never>> = () => (
  <div className="centeredHeader">
      {/* general information about VUMS */}
      <h1>
          Meet The Board
      </h1>

      <div className="avatars">
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
            <br/>
            <p>
                ThisisA Name
            </p>
          </div>
      </div>
      

  </div>
);

export default Info;
