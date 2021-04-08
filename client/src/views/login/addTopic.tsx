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

const AddTopic: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    axios
      .put("http://localhost:5000/learn/topic/create", {
        name: values.name,
      })
      .then((_response) => {
        alert("Topic Saved!");
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
          label="Topic Name"
          rules={[
            {
              required: true,
              message: "Topic Name",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Topic
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTopic;