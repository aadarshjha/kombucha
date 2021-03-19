import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const NavBar: React.FC<Record<string, never>> = () => {
  const [current] = useState("");
  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<QuestionCircleOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item icon={<BookOutlined />}>
        <Link to="/learn">Learn</Link>
      </Menu.Item>
      <Menu.Item icon={<CalendarOutlined />}>
        <Link to="/events">Events</Link>
      </Menu.Item>
      {/* <Menu.Item icon={<PlayCircleOutlined />}>
        <Link to="/play">Play</Link>
      </Menu.Item> */}
    </Menu>
  );
};

export default NavBar;
