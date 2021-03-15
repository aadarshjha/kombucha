import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("click ", e);
};

// holds the menu data as a json:

interface menuStruct {
  Login: JSX.Element;
  Home: JSX.Element;
  Learn: JSX.Element;
  Events: JSX.Element;
  Play: JSX.Element;
}

const menuData: menuStruct = {
  Login: <UserOutlined />,
  Home: <HomeOutlined />,
  Learn: <BookOutlined />,
  Events: <CalendarOutlined />,
  Play: <PlayCircleOutlined />,
};

const NavBar: React.FC<Record<string, never>> = () => {
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
