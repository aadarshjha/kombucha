/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Progress } from "antd";
import { Button } from "antd";
import "./options.css";

import { Statistic, Row, Col } from "antd";
import {
  LikeOutlined,
  BookOutlined,
  SmileOutlined,
  HighlightOutlined,
} from "@ant-design/icons";

const fetchNumArticles = () => {
  return 1;
};

const fetchNumberAuthors = () => {
  return 2;
};

const fetchNumberTopics = () => {
  return 3;
};

const fetchNumberTopic = () => {
  return 4;
};
const SummaryStats: React.FC<Record<string, never>> = () => {
  return (
    // this will basically summarize the statistics present in the article page
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "enter",
      }}
    >
      <div className={"statisticsFlex"}>
        <div className={"left"}>
          <div>
            <Statistic
              title="Number Of Articles Written"
              value={fetchNumArticles()}
              prefix={<BookOutlined />}
            />
          </div>
          <div>
            <Statistic
              title="Number Of Authors"
              value={fetchNumberAuthors()}
              prefix={<SmileOutlined />}
            />
          </div>

          <div>
            <Statistic
              title="Number Of Topics"
              value={fetchNumberTopics()}
              prefix={<HighlightOutlined />}
            />
          </div>
        </div>

        <div className={"right"}>
          <div>
            <Progress
              type="circle"
              percent={fetchNumberTopics()}
              format={(percent) => `${percent} Events`}
            />
            {/* <Progress
              type="circle"
              percent={10}
              format={(percent) => `${percent} Events`}
            />
            <Progress
              type="circle"
              percent={10}
              format={(percent) => `${percent} Events`}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
