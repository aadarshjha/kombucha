/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./options.css";
import UpdateArticle from "./updateArticle";
import NewArticle from "./newArticle";
import DeleteArticle from "./deleteArticle";
import AddEvent from "./addEvent";
import DeleteEvent from "./deleteEvent";
import UpdateEvent from "./updateEvent";
import AddAuthor from "./addAuthor";
import UpdateAuthor from "./updateAuthor";
import DeleteAuthor from "./deleteAuthor";
import AddTopic from "./addTopic";
import UpdateTopic from "./updateTopic";
import DeleteTopic from "./deleteTopic";

const updateView = (updatedView: string) => {
  if (updatedView == "newAuthor") {
    return <AddAuthor />;
  } else if (updatedView == "updateAuthor") {
    return <UpdateAuthor />;
  } else if (updatedView == "deleteAuthor") {
    return <DeleteAuthor />;
  } else if (updatedView == "newTopic") {
    return <AddTopic />;
  } else if (updatedView == "updateTopic") {
    return <UpdateTopic />;
  } else if (updatedView == "deleteTopic") {
    return <DeleteTopic />;
  } else if (updatedView == "new") {
    return <NewArticle />;
  } else if (updatedView == "update") {
    return <UpdateArticle />;
  } else if (updatedView == "delete") {
    return <DeleteArticle />;
  } else if (updatedView == "addEvent") {
    return <AddEvent />;
  } else if (updatedView == "deleteEvent") {
    return <DeleteEvent />;
  } else if (updatedView == "updateEvent") {
    return <UpdateEvent />;
  }
};

const Options: React.FC<Record<string, never>> = () => {
  // tells us which option were on:
  const [form, updateForm] = useState("newAuthor");

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          updateForm("newAuthor");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          New Author
        </a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          updateForm("updateAuthor");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Update Author
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("deleteAuthor");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Delete Author
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("newTopic");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          New Topic
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("updateTopic");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Update Topic
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("deleteTopic");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Delete Topic
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("new");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          New Article
        </a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          updateForm("update");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Update Article
        </a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          updateForm("delete");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Delete Article
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("addEvent");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Add Event
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("deleteEvent");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Delete Event
        </a>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          updateForm("updateEvent");
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          Update Event
        </a>
      </Menu.Item>
    </Menu>
  );

  const updatedView = updateView(form);

  return (
    <div className="centered">
      <Dropdown overlay={menu}>
        <Button>
          Options <DownOutlined />
        </Button>
      </Dropdown>
      {updatedView}
    </div>
  );
};

export default Options;
