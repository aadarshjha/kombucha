/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Form, Button, Select } from "antd";
import axios from "axios";

const { Option } = Select;

const eventsURL = "http://localhost:5000/events";

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

const DeleteEvent: React.FC<Record<string, never>> = () => {
  const [form] = Form.useForm();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const result: any = await axios(eventsURL);
      const eventsResult = result.data;
      setEvents(eventsResult.map((element: any) => element.title));
    })();
  }, []);

  const onFinish = (values: any) => {
    const title = values.header;
    let id: string;
    let data;
    axios.get(`${process.env.REACT_APP_SERVER_URL}/events`).then((res) => {
      let deleteID;
      const data = res.data;

      for (const element of data) {
        if (element.title === title) {
          const API = axios.create({ baseURL: "" });

          API.interceptors.request.use((req) => {
            if (localStorage.getItem("profile")) {
              req.headers.Authorization = `Bearer ${
                JSON.parse(localStorage.profile).token
              }`;
            }

            return req;
          });

          API.delete(
            `${process.env.REACT_APP_SERVER_URL}/events/${element._id}/delete`
          )
            .then((res) => {
              alert("Deleted!");
              return;
            })
            .catch((err) => {
              alert("Something Went Wrong!");
              return;
            });
        }
      }
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
          {/* <Input /> */}
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            {/* GET for all authors */}
            {events.map((element: any) => (
              <Option key={element} value={element}>
                {element}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Delete Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteEvent;
