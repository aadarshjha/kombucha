/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import Logo from "../../components/Logo";
import { Form, Input, Button, Checkbox } from "antd";
import Options from "./options";
import "antd/dist/antd.css";

// minimal styling.
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const middleLayout = {
  wrapperCol: { offset: 14, span: 16 },
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const renderView = (signedIn: boolean, setSignIn: any, signUp: boolean, setSignUp: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  //create function for submit
  const handleSubmit = (e: any) => {
    console.log("success", e);
    //fetches authentication data from the backend
    dispatch(signin(signedIn, history));
  };

  if (signedIn) {
    return (
      <div>
        <Logo page="Admin Update Page"></Logo>
        <Options />
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
            onFinish={handleSubmit}
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

            <Form.Item {...middleLayout}>
              <Button type="primary" htmlType="submit">
                Sign-in
              </Button>
            </Form.Item>
          </Form>

          <Button type="link"
            onClick={() => {
              setSignUp(!signUp);
            }}
          >
            Don&apos;t have an account? Sign-up!
          </Button>

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

const signUpView = (signUp: boolean, setSignUp: any) => {
  //create function for submit
  const handleSubmit = (e: any) => {
    console.log("success", e);
    //dispatch(signin(e, history));
  };

  return (
    <div>
      <Logo page="Sign-up To VUMS"></Logo>
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
            onFinish={handleSubmit}
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

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item  
              label="Token"
              name="Token"
              rules={[
                { required: true, message: "Enter Token!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...middleLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>

          <Button
            onClick={() => {
              setSignUp(!signUp);
            }}
          >
            Toggle View
          </Button>
        </div>
      </div>
  )
};

const Login: React.FC<Record<string, never>> = () => {
  const [signedIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const curView = signUp ? signUpView(signUp, setSignUp) : renderView(signedIn, setSignIn, signUp, setSignUp);
  const history = useHistory();

  return <div>{curView}</div>;
};

export default Login;
