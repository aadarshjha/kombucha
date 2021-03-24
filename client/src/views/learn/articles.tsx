import React from "react";
import "./articles.css";
import { Card, List } from "antd";

type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

type catProps = {
  articles: Array<backendData>;
};

const Articles: React.FC<catProps> = ({ articles }: catProps) => {
  return (
    <div className="flex">
      <div className="left">
        {/* all of the articles
        {articles.map((element, i) => {
          return (
          );
        })} */}
        <List
          bordered
          dataSource={articles}
          renderItem={(item) => (
            <List.Item>
              <h4>{item.header}</h4>
            </List.Item>
          )}
        />
      </div>
      <div className="right">
        {/* This is dynamically loaded based on what is selected */}
        <div>{/* header */}</div>
        <div>{/* body */}</div>
      </div>
    </div>
  );
};

export default Articles;
