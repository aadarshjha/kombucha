/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./options.css"


const updateView = (updatedView: string) => {
  // console.log(updatedView)
  if (updatedView == "new") {
    return (
      <h1>
        Hello 
      </h1>
    )
  } else if (updatedView == "update") {
    return (
      <h1>
        Test
      </h1>
    )
  } else {
    return (
      <h1>
        Bye
      </h1>
    )
  }
 }



const Options: React.FC<Record<string, never>> = () => {
  // tells us which option were on: 
  const [form, updateForm] = useState("new")

  const menu = (
    <Menu>
      <Menu.Item onClick={() => {updateForm("new")}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          New Article
        </a>
      </Menu.Item>
      <Menu.Item onClick={() => {updateForm("update")}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Update Article
        </a>
      </Menu.Item>
      <Menu.Item onClick={() => {updateForm("delete")}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Delete Article
        </a>
      </Menu.Item>
    </Menu>
  );

  const updatedView = updateView(form)
  

  return (
    <div className="centered">
      <Dropdown overlay={menu}>
        <Button>
          Options <DownOutlined />
        </Button>
      </Dropdown>
      {
        updatedView
      }
    </div>
  );
};

export default Options;
