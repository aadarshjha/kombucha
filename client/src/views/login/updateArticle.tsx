/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import moment from "moment";

// we just get the title of the article
// and the updated content
// we also update the date of the article.

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

  const onFinish = (values: any) => {
    axios
      .get("http://localhost:5000/learn/articles")
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
        const URL =
          "http://localhost:5000/learn/article/" + article_id + "/update";
        console.log(URL);
        axios
          .patch(URL, {
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
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[
            {
              required: true,
              message: "Content",
            },
          ]}
          hasFeedback
        >
          <TextArea rows={4} />
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
