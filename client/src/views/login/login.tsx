/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Form, Input, Button, Checkbox, Row } from "antd";
import Options from "./options";
import "antd/dist/antd.css";
import axios from "axios";
import { BACKEND_URL } from "../../api";

// minimal styling.
const layout = {
<<<<<<< HEAD
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
=======
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },

>>>>>>> df5f9f04e48cfb09cebdda26aca32077783ead63
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

const renderView = (
    signedIn: boolean,
    setSignIn: any,
    signUp: boolean,
    setSignUp: any
) => {
<<<<<<< HEAD
    //check to see if user authenticated
    if (signedIn == false && localStorage.getItem("profile")) {
        const URL = "user/userAuth";
        const API = axios.create({ baseURL: "http://localhost:5000/" });
        API.interceptors.request.use((req) => {
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.profile).token
                }`;
            return req;
        });
=======
  //check to see if user authenticated
  if (signedIn == false && localStorage.getItem("profile")) {
    const URL = "user/userAuth";
    const API = axios.create({ baseURL: BACKEND_URL });
    API.interceptors.request.use((req) => {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.profile).token
      }`;
      return req;
    });
>>>>>>> df5f9f04e48cfb09cebdda26aca32077783ead63

        API.post(URL)
            .then(function (response) {
                console.log(response.data.message);
                setSignIn(true);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    }

<<<<<<< HEAD
    //create function for submit
    const handleSubmit = (formData: any) => {
        //console.log(e);
        //fetches authentication data from the backend
        axios({
            method: "post",
            url: `${BACKEND_URL}/user/signin`,
            data: formData,
        })
            .then(function (response) {
                if (response.data != null) {
                    setSignIn(true);
                    localStorage.setItem("profile", JSON.stringify({ ...response.data }));
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
        //console.log(JSON.parse(localStorage.profile).token);
    };

    if (signedIn) {
        return (
            <div>
                <Logo page="Admin Update Page"></Logo>
                <Options />
                {/* <Button
          onClick={() => {
            setSignIn(true);
          }}
        >
          Toggle View
        </Button> */}
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
                        minWidth: "600px",
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
=======
  //create function for submit
  const handleSubmit = (formData: any) => {
    //console.log(e);
    //fetches authentication data from the backend
    axios({
      method: "post",
      url: `${BACKEND_URL}/user/signin`,
      data: formData,
    })
      .then(function (response) {
        if (response.data != null) {
          setSignIn(true);
          localStorage.setItem("profile", JSON.stringify({ ...response.data }));
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  if (signedIn) {
    return (
      <div>
        <Logo page="Admin Update Page"></Logo>
        <Options />
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
>>>>>>> df5f9f04e48cfb09cebdda26aca32077783ead63

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "relative",
                            paddingTop: "10px",
                            left: "60px",
                        }}
                    >
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Sign-in
                            </Button>
                        </Form.Item>
                        <Button
                            type="link"
                            onClick={() => {
                                setSignUp(!signUp);
                            }}
                        >
                            Don&apos;t have an account? Sign-up!
                     </Button>
                    </div>
                </div >
            </div >
        );
    }
};

const signUpView = (signUp: boolean, setSignUp: any) => {
    //create function for submit
    const handleSubmit = (formData: any) => {
        //console.log("success", e);
        //dispatch(signin(e, history));
        axios({
            method: "post",
            url: `${BACKEND_URL}/user/signup`,
            data: formData,
        })
            .then(function (response) {
                if (response.data != null) {
                    setSignUp(false);
                    console.log(response.data);
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    return (
        <div>
            <Logo page="Sign-Up To VUMS"></Logo>
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
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Token"
                        name="Token"
                        rules={[{ required: true, message: "Enter Token!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...middleLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                </Button>
                    </Form.Item>
                </Form>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                        left: "5%",
                        paddingTop: "10px",
                    }}
                >
                    <Button
                        onClick={() => {
                            setSignUp(!signUp);
                        }}
                    >
                        Back to Sign In
          </Button>
                </div>
            </div>
        </div >
    );
};

const Login: React.FC<Record<string, never>> = () => {
    const [signedIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const curView = signUp
        ? signUpView(signUp, setSignUp)
        : renderView(signedIn, setSignIn, signUp, setSignUp);

    return <div>{curView}</div>;
};

export default Login;
