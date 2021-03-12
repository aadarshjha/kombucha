import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const handleClick = (e: any) => {
  console.log("click ", e);
};

// holds the menu data as a json:
const menuData = ["Login", "Home", "Learn", "Events", "Play"];

const NavBar: React.FC<{}> = () => {
  const [current, setCurrent] = useState("");
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {menuData.map((element) => {
          return <Menu.Item key={element}>{element}</Menu.Item>;
        })}
      </Menu>
    </div>
  );
};

export default NavBar;
