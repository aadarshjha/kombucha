/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import { Menu, Dropdown, Button } from "antd";
import "antd/dist/antd.css";
import "./options.css";
import { Progress } from "antd";

const fetchNumArticles = () => {
  return 1;
};

const SummaryStats: React.FC<Record<string, never>> = () => {
  return (
    // this will basically summarize the statistics present in the article page
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />
      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />

      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />

      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />

      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />

      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />

      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />
    </div>
  );
};

export default SummaryStats;
