/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { BACKEND_URL } from "../../api";

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

const UpdateToken: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const URL = "user/updateToken";
    const API = axios.create({
      baseURL: `${BACKEND_URL}/`,
    });
    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.profile).token
        }`;
      }

      return req;
    });

    API.patch(URL, {
      body: values,
    })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        return;
      })
      .catch((err) => {
        alert(err.response.data.message);
        return;
      });
  };

  return (
    <div className="centeredForm">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="oldToken"
          label="Old Token Value"
          rules={[
            {
              required: true,
              message: "Enter token value",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="newToken"
          label="New Token Value"
          rules={[
            {
              required: true,
              message: "Enter token value",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update Token
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateToken;
