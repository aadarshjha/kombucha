/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BACKEND_URL } from "../../api";

const { Option } = Select;
const authorsURL = "http://localhost:5000/learn/articles";
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

const UpdateArticle: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();

  let article_id: string;

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    (async () => {
      const result: any = await axios(authorsURL);
      const authorResult = result.data;
      console.log(authorResult);
      setAuthors(authorResult.map((element: any) => element.title));
    })();
  }, []);

  const onFinish = (values: any) => {
    console.log(values);
    axios
      .get(`${BACKEND_URL}/learn/articles`)
      .then((res) => {
        const name = values.title;
        const iteratedData = res.data;
        for (const element of iteratedData) {
          if (element.title == name) {
            article_id = element._id;
          }
        }
        if (article_id == null) {
          // throw error
          throw "No Article Found";
        }
      })
      .then(() => {
        // const URL = learnRouter.patch("/article/:id/update", articleController.update);
        const URL = "learn/article/" + article_id + "/update";
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
          dateUpdated: moment().format("MM/DD/YYYY"),
          content: values.content,
        })
          .then((res) => {
            alert("Article Updated!");
          })
          .catch((err) => {
            console.log(err);
            alert("Could not update article!");
          });
      })
      .catch((err) => {
        alert("Cannot find Article!");
      });
  };

  // predicated off the idea that we have unique titles.

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
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Enter Article Title",
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
          name="content"
          label="Content"
          initialValue=""
          rules={[
            {
              required: true,
              message: "Content",
            },
          ]}
          hasFeedback
        >
          <ReactQuill theme="snow" />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Article
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateArticle;
