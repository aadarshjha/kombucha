/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Progress, Statistic } from "antd";
import "./options.css";
import {
  BookOutlined,
  SmileOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import axios from "axios";

const articleURL = "http://localhost:5000/learn/articles";
const authorsURL = "http://localhost:5000/learn/authors";
const topicsURL = "http://localhost:5000/learn/topics";
const eventsURL = "http://localhost:5000/events";

const SummaryStats: React.FC<Record<string, never>> = () => {
  const [numArticles, setNumArticles] = useState(0);
  const [numAuthors, setNumAuthors] = useState(0);
  const [numTopics, setNumTopics] = useState(0);
  const [numEvents, setNumEvents] = useState(0);

  axios
    .get(articleURL)
    .then((res) => {
      setNumArticles(res.data.length);
    })
    .catch((err) => {
      alert(err);
    });

  axios
    .get(authorsURL)
    .then((res) => {
      setNumAuthors(res.data.length);
    })
    .catch((err) => {
      alert(err);
    });

  axios
    .get(topicsURL)
    .then((res) => {
      setNumTopics(res.data.length);
    })
    .catch((err) => {
      alert(err);
    });

  axios
    .get(eventsURL)
    .then((res) => {
      setNumEvents(res.data.length);
    })
    .catch((err) => {
      alert(err);
    });

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
              value={numArticles}
              prefix={<BookOutlined />}
            />
          </div>
          <div>
            <Statistic
              title="Number Of Authors"
              value={numAuthors}
              prefix={<SmileOutlined />}
            />
          </div>

          <div>
            <Statistic
              title="Number Of Topics"
              value={numTopics}
              prefix={<HighlightOutlined />}
            />
          </div>
        </div>

        <div className={"right"}>
          <div>
            <Progress
              type="circle"
              percent={numEvents}
              format={(percent) => `${percent} Events`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
