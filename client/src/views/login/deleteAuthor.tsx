/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Button, Select } from "antd";
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

const DeleteAuthor: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    (async () => {
      const result: any = await axios(authorsURL);
      const authorResult = result.data;
      setAuthors(authorResult.map((element: any) => element.name));
    })();
  }, []);

  let id: string;
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
        const URL = "learn/author/" + id + "/delete";
        const API = axios.create({ baseURL: "http://localhost:5000/" });

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
            alert("Author Deleted!");
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
        {/* <Form.Item
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
        </Form.Item> */}

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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Delete Author
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteAuthor;
