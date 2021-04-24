/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import moment from "moment";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const { Option } = Select;
import { BACKEND_URL } from "../../api";

const { TextArea } = Input;

const authorsURL = `${BACKEND_URL}/learn/authors`;
const topicsURL = `${BACKEND_URL}/learn/topics`;

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

const NewArticle: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();

  let author_id: string;
  let topic_id: string;

  const [authors, setAuthors] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const result: any = await axios(authorsURL);
      const authorResult = result.data;
      setAuthors(authorResult.map((element: any) => element.name));

      const resultTopics: any = await axios(topicsURL);
      const topicsResult = resultTopics.data;
      setTopics(topicsResult.map((element: any) => element.name));
    })();
  }, []);

  const onFinish = (values: any) => {
    axios
      .get(`${BACKEND_URL}/learn/authors`)
      .then((res) => {
        const name = values.name;
        const iteratedData = res.data;
        for (const element of iteratedData) {
          if (element.name == name) {
            author_id = element._id;
          }
        }
        if (author_id == null) {
          // throw error
          throw "No User Found";
        }
      })
      .then(() => {
        axios
          .get(`${BACKEND_URL}/learn/topics`)
          .then((res) => {
            const name = values.topic;
            const iteratedData = res.data;
            for (const element of iteratedData) {
              if (element.name == name) {
                topic_id = element._id;
              }
            }
            if (topic_id == null) {
              // throw error
              throw "No Topic Found";
            }
          })
          .then(() => {
            const URL = "learn/article/create";
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
              title: values.title,
              author: author_id,
              dateUpdated: moment().format("MM/DD/YYYY"),
              topic: topic_id,
              content: values.content,
              difficulty: values.difficulty,
            })
              .then((_response) => {
                alert("Article Saved!");
              })
              .catch((_err) => {
                alert("Something Went Wrong!");
              });
          })
          .catch((err) => {
            alert("Cannot Find Topic");
          });
      })
      .catch((err) => {
        alert("Cannot Find Author!");
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
          <Input />
        </Form.Item>
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
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            {authors.map((element) => (
              <Option key={element} value={element}>
                {element}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="topic"
          label="Topic Name"
          rules={[
            {
              required: true,
              message: "Enter Topic Name",
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
            {topics.map((element) => (
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
              message: "Please enter content",
            },
          ]}
          hasFeedback
        >
          <ReactQuill theme="snow" />
        </Form.Item>

        <Form.Item
          name="difficulty"
          label="Difficulty"
          rules={[
            {
              required: true,
              message: "Difficulty",
            },
          ]}
          hasFeedback
        >
          {/* <Input /> */}

          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="easy">
              Easy
            </Option>
            <Option value="medium">
              Medium
            </Option>
            <Option value="hard">
              Hard
            </Option>
          </Select>
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

export default NewArticle;
