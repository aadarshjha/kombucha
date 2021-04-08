/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import moment from "moment";

// // Defines a controller by which we update an article by ID.
// export const update: controller = async (req, res, next) => {
//   try {
//     const updatedArticle = await Article.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });
//     res.send(`Successfully updated article with ID: ${updatedArticle._id}\n`);
//   } catch (err) {
//     next(err);
//     res.send(
//       `Updating article failed. Maybe check that you got the ID and title fields right.\n${err}\n`
//     );
//   }
// };

// learnRouter.patch("/article/:id/update", articleController.update);

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

  // const fetchAuthor = () => {
  //   axios
  //     .get()
  // }

  // const fetchTopic = () => {
  //   axios
  //     .get()
  // }

  // // predicated off the idea that we have unique titles.
  // const onFinish = (values: any) => {
  //   axios
  //     .get("http://localhost:5000/learn/articles")
  //     .then((res) => {
  //       const name = values.title;
  //       const iteratedData = res.data;
  //       for (const element of iteratedData) {
  //         if (element.title == name) {
  //           article_id = element._id;
  //         }
  //       }
  //       if (article_id == null) {
  //         // throw error
  //         throw "No Article Found";
  //       }
  //     })
  //     .then(()=> {

  //       axios
  //         .patch("", {
  //           title: values.newTitle,
  //           // get the author id
  //           author: fetchAuthor(),
  //           // todays date.
  //           dateUpdated: moment().format("MM/DD/YYYY"),
  //           // get the topic id
  //           topic: fetchTopic(),
  //           content: values.newContent,
  //           difficulty: values.newDifficulty,
  //         })
  //         .then(()=> {

  //         })
  //         .catch((err) => {

  //         })
  //     })
  //     .catch((err) => {
  //       alert("Cannot find Article!")
  //     });

  return (
    <div className="centeredForm">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={() => {
          console.log(1);
        }}
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
          name="author"
          label="Author"
          rules={[
            {
              required: true,
              message: "Enter Article Author",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="topic"
          label="Topic"
          rules={[
            {
              required: true,
              message: "Topic",
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
          <Input />
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
