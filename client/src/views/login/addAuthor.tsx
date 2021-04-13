/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Upload, message, Alert } from "antd";
import axios from "axios";

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

const AddAuthor: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const URL = "learn/author/create";
    const API = axios.create({ baseURL: "http://localhost:5000/" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.profile).token
        }`;
      }

      return req;
    });

    API.put(URL, {
      name: values.name,
      year: values.year,
      majors: values.majors.split(","),
    })
      .then((_response) => {
        alert("Author Saved!");
      })
      .catch((_err) => {
        alert("Something Went Wrong!");
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
          name="name"
          label="Author Name"
          rules={[
            {
              required: true,
              message: "Enter Author Name",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="year"
          label="Author Graduating Year"
          rules={[
            {
              required: true,
              message: "Enter Author Graduating Year",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="majors"
          label="Author Majors (Seperate Via Commas)"
          rules={[
            {
              required: true,
              message: "Enter Author Majors",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Author
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAuthor;
