/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Form, Input, Button, Checkbox } from "antd";

// minimal styling.
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const renderView = (signedIn: boolean, setSignIn: any) => {
  if (signedIn) {
    return (
      <div>
        <Logo page="Admin Update Page"></Logo>
        <Button
          onClick={() => {
            setSignIn(!signedIn);
          }}
        >
          Toggle View
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Logo page="Login To VUMS"></Logo>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            left: "-60px",
            paddingTop: "40px",
          }}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "400px" }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Button
            onClick={() => {
              setSignIn(!signedIn);
            }}
          >
            Toggle View
          </Button>
        </div>
      </div>
    );
  }
};

const Login: React.FC<Record<string, never>> = () => {
  const [signedIn, setSignIn] = useState(false);
  const curView = renderView(signedIn, setSignIn);

  return <div>{curView}</div>;
};

export default Login;
