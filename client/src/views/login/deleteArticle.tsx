/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./options.css";

import { Form, Input, Button } from "antd";
import axios from "axios";

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const DeleteArticle: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // first we fetch the article ID based on title
    let article_id: string;
    axios
      .get("http://localhost:5000/learn/articles")
      .then((res) => {
        const iteratedData = res.data;
        const title = values.title;
        console.log(iteratedData);
        for (const element of iteratedData) {
          console.log(element);
          if (element.title == title) {
            article_id = element._id;
          }
        }
        if (article_id == null) {
          // throw error
          throw "No Article Found";
        }
      })
      .then(() => {
        const URL =
          "http://localhost:5000/learn/article/" + article_id + "/delete";
        console.log(URL);
        // now we delete
        axios
          .delete(URL)
          .then((_res) => {
            console.log(_res);
            alert(_res.data);
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="centeredForm">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          label="Article Name"
          rules={[
            {
              required: true,
              message: "Enter Article Title",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Delete Article
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteArticle;
