import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const handleClick = (e: any) => {
  console.log("click ", e);
};

// holds the menu data as a json:
const menuData = {
  Login: <UserOutlined />,
  Home: <HomeOutlined />,
  Learn: <BookOutlined />,
  Events: <CalendarOutlined />,
  Play: <PlayCircleOutlined />,
};

const NavBar: React.FC<{}> = () => {
  const [current] = useState("");
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {Object.entries(menuData).map(([key, value]) => {
          return (
            <Menu.Item icon={value} key={key}>
              {key}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default NavBar;
