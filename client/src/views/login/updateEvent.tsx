/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button } from "antd";
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

const UpdateEvent: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // get and then delete:
    const title = values.header;
    axios.get(`${process.env.REACT_APP_SERVER_URL}/events`).then((res) => {
      const data = res.data;

      for (const element of data) {
        if (element.title === title) {
          const API = axios.create({ baseURL: "" });
          API.interceptors.request.use((req) => {
            if (localStorage.getItem("profile")) {
              req.headers.Authorization = `Bearer ${
                JSON.parse(localStorage.profile).token
              }`;
            }

            return req;
          });

          API.patch(
            `${process.env.REACT_APP_SERVER_URL}/events/${element._id}/update`,
            {
              body: values.body,
            }
          )
            .then((res) => {
              alert("Updated!");
              return;
            })
            .catch((err) => {
              alert("Something Went Wrong!");
              return;
            });
        }
      }
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
          name="header"
          label="Title"
          rules={[
            {
              required: true,
              message: "Enter Events Title",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="body"
          label="Body"
          rules={[
            {
              required: true,
              message: "Enter Events Body",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateEvent;
