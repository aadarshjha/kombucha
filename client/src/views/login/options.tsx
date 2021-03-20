/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./options.css"

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        New Article
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Update Article
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        Delete Article
      </a>
    </Menu.Item>
  </Menu>
);

const Options: React.FC<Record<string, never>> = () => {
  return (
    <div className="centered">
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Options;
