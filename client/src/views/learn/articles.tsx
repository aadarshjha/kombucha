import React from "react";
import "./articles.css";
import { Card } from "antd";

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
        {/* all of the articles */}
        {articles.map((element) => {
          <div key={element.header}>
            <Card
              title={element.header}
              bordered={false}
              style={{ width: "100%" }}
            ></Card>
          </div>;
        })}
      </div>
      <div className="right">
        <div>{/* header */}</div>
        <div>{/* body */}</div>
      </div>
    </div>
  );
};

export default Articles;
