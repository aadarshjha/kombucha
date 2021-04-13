/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Upload, message, Alert } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

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

const AddEvent: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    const URL = "events/create";
    const API =  axios.create({ baseURL: 'http://localhost:5000/'});

    API.interceptors.request.use((req) => {
      if (localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.profile).token}`;
      }

      return req;
    });

    API
      .put(URL, {
        title: values.header,
        imageString: "testFile",
        body: values.body,
      })
      .then((_response) => {
        alert("Reponse Saved!");
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

        {/* an image upload will go here */}
        <Form.Item label="Dragger">
          <Form.Item
            name="file"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
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
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEvent;
