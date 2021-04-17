/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
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

const DeleteEvent: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // get and then delete:
    const title = values.header;
    let id: string;
    let data;
    axios.get("http://localhost:5000/events").then((res) => {
      let deleteID;
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

          API.delete(`http://localhost:5000/events/${element._id}/delete`)
            .then((res) => {
              alert("Deleted!");
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Delete Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteEvent;
