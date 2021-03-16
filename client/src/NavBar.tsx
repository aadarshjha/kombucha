import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";


const NavBar: React.FC<Record<string, never>> = () => {
  const [current] = useState("");
  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item icon={<UserOutlined />}>Login</Menu.Item>
      <Menu.Item icon={<BookOutlined />}>Learn</Menu.Item>
      <Menu.Item icon={<CalendarOutlined />}>Events</Menu.Item>
      <Menu.Item icon={<PlayCircleOutlined />}>Play</Menu.Item>
    </Menu>
  );
};

export default NavBar;
