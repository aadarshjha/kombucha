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

const DeleteTopic: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  let id: string;
  const onFinish = (values: any) => {
    // associate an ID:
    const name = values.name;
    console.log(name);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/learn/topics`)
      .then((res) => {
        const iteratedData = res.data;
        console.log(iteratedData);
        for (const element of iteratedData) {
          if (element.name == name) {
            console.log(element.name);
            console.log(name);
            id = element._id;
          }
        }
        if (id == null) {
          // throw error
          throw "No Topic Found";
        }
      })
      .then(() => {
        const URL = "learn/topic/" + id + "/delete";
        const API = axios.create({
          baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
        });

        API.interceptors.request.use((req) => {
          if (localStorage.getItem("profile")) {
            req.headers.Authorization = `Bearer ${
              JSON.parse(localStorage.profile).token
            }`;
          }

          return req;
        });

        API.delete(URL)
          .then((_response) => {
            alert("Topic Deleted!");
          })
          .catch((_err) => {
            console.log(_err);
            alert("Something Went Wrong!");
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
          name="name"
          label="Topic Name"
          rules={[
            {
              required: true,
              message: "Enter Topic Name",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Delete Topic
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteTopic;
