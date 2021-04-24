/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import { BACKEND_URL } from "../../api";

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
  const [file, setFile] = useState("");
  const onFinish = (values: any) => {
    console.log(values);
    const URL = "events/create";
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

    API.put(URL, {
      title: values.header,
      image: file,
      body: values.body,
    })
      .then((_response) => {
        alert("Reponse Saved!");
      })
      .catch((_err) => {
        alert("Something Went Wrong!");
      });
  };
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleCancel = () => setPreviewVisible(false);

  // const handlePreview = (file) => {
  //   setPreviewImage(file.thumbUrl);
  //   setPreviewVisible(true);
  // };

  const handleUpload = (info) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const res = fileReader.result;
      console.log("file", res);
      setFile(res as string);
    };
    // `originFileObj`, most important.
    if (info.fileList[0]) {
      fileReader.readAsDataURL(info.fileList[0].originFileObj);
    }
    // const file = fileReader.result;
    // console.log("fileList", info.fileList[0].originFileObj);
    // setFileList(fileList);
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
            <Upload.Dragger
              name="files"
              action="/upload.do"
              onChange={handleUpload}
              beforeUpload={() => false}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Please upload one image!</p>
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
