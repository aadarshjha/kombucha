/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css"
import {
    Form,
    Input,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
  } from 'antd';

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


const NewArticle: React.FC<Record<string, never>> = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    // const prefixSelector = (
    //   <Form.Item name="prefix" noStyle>
    //     <Select style={{ width: 70 }}>
    //       <Option value="86">+86</Option>
    //       <Option value="87">+87</Option>
    //     </Select>
    //   </Form.Item>
    // );
  
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  
    const onWebsiteChange = (value: string) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map(website => ({
      label: website,
      value: website,
    }));
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >  
        <Form.Item
          name="article"
          label="Article"
          rules={[
            {
              required: true,
              message: 'Enter Article ID',
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="header"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Enter Article Title',
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="body"
          label="Body"
          rules={[
            {
              required: true,
              message: 'Enter Article Body',
            },
          ]}
          hasFeedback
        >
          <TextArea rows={4} />
        </Form.Item>
   
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    )};

export default NewArticle;
