import React, { useState } from "react";
import { Calendar, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./landingpage";

// umm idk typescript at all... i put <any> here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const handleClick: any = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log("click ", e);
// };

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
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item icon={<UserOutlined />}>Login</Menu.Item>
      <Menu.Item icon={<HomeOutlined />}>Learn</Menu.Item>
      <Menu.Item icon={<CalendarOutlined />}>Events</Menu.Item>
      <Menu.Item icon={<PlayCircleOutlined />}>Play</Menu.Item>
    </Menu>
  );
};

export default NavBar;
