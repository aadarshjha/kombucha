/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
const { Option } = Select;

const authorsURL = "http://localhost:5000/learn/authors";

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

const UpdateAuthor: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  let id: string;
  const [authors, setAuthors] = useState([]);
  const [formVal, setFormVal] = useState({
    name: "",
    year: "",
    majors: "",
  });

  useEffect(() => {
    (async () => {
      const result: any = await axios(authorsURL);
      const authorResult = result.data;
      setAuthors(authorResult.map((element: any) => element.name));
    })();
  }, []);

  const onFinish = (values: any) => {
    // associate an ID:
    const name = values.name;
    axios
      .get("http://localhost:5000/learn/authors")
      .then((res) => {
        const iteratedData = res.data;
        for (const element of iteratedData) {
          if (element.name == name) {
            id = element._id;
          }
        }
        if (id == null) {
          // throw error
          throw "No User Found";
        }
      })
      .then(() => {
        const URL = "learn/author/" + id + "/update";
        const API = axios.create({ baseURL: "http://localhost:5000/" });

        API.interceptors.request.use((req) => {
          if (localStorage.getItem("profile")) {
            req.headers.Authorization = `Bearer ${
              JSON.parse(localStorage.profile).token
            }`;
          }

          return req;
        });

        API.patch(URL, {
          name: values.updateName,
          year: values.updateYear,
          majors: values.updateMajors.split(","),
        })
          .then((_response) => {
            alert("Author Updated!");
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
          {/* <Input /> */}
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            {/* GET for all authors */}
            {authors.map((element) => (
              <Option key={element} value={element}>
                {element}
              </Option>
            ))}
            {/* <Option value={"asdf"}>{"asdf"}</Option>s */}
          </Select>
        </Form.Item>
        <Form.Item
          name="updateName"
          label="Update Author Name"
          rules={[
            {
              required: true,
              message: "Update Author Name",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="updateYear"
          label="Update Author Graduating Year"
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
          name="updateMajors"
          label="Update Author Majors (Seperate Via Commas)"
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
            Update Author
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateAuthor;
