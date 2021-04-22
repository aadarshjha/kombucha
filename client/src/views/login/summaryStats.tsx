/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./options.css";
import { Progress, Statistic, List } from "antd";
import "./options.css";
import {
  BookOutlined,
  SmileOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { BACKEND_URL } from "../../api";

const articleURL = `${BACKEND_URL}/learn/articles`;
const authorsURL = `${BACKEND_URL}/learn/authors`;
const topicsURL = `${BACKEND_URL}/learn/topics`;
const eventsURL = `${BACKEND_URL}/events`;

const SummaryStats: React.FC<Record<string, never>> = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [numDiff, setNumDiff] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [authorsList, setAuthorsList] = useState([]);
  const [topicsList, setTopicsList] = useState([]);
  const [numArticles, setNumArticles] = useState(0);
  const [numAuthors, setNumAuthors] = useState(0);
  const [numTopics, setNumTopics] = useState(0);
  const [numEvents, setNumEvents] = useState(0);

  useEffect(() => {
    (async () => {
      let result: any = await axios(articleURL);
      let authorResult: any = await axios(authorsURL);
      let topicsResult: any = await axios(topicsURL);
      topicsResult = topicsResult.data;
      result = result.data;
      authorResult = authorResult.data;
      const newDataList = result.map((element: any) => {
        return element.title;
      });

      // console.log(authors)
      const newAuthorList = authorResult.map((element: any) => {
        return element.name;
      });

      const newTopicList = topicsResult.map((element: any) => {
        return element.name;
      });

      setArticlesList(newDataList);
      setAuthorsList(newAuthorList);
      setTopicsList(newTopicList);

      const difficultyObj: any = {
        easy: 0,
        medium: 0,
        hard: 0,
      };

      result.forEach((element: any) => {
        difficultyObj[element.difficulty]++;
      });
      setNumDiff({ ...difficultyObj });
    })();
  }, []);

  axios
    .get(articleURL)
    .then((res) => {
      const dataList = res.data;
      setNumArticles(dataList.length);
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
    <div>
      <div className={"statisticsFlex"}>
        <div className={"left"}>
          <Statistic
            title="Number Of Articles Written"
            value={numArticles}
            prefix={<BookOutlined />}
          />

          <Statistic
            title="Number Of Authors"
            value={numAuthors}
            prefix={<SmileOutlined />}
          />

          <Statistic
            title="Number Of Topics"
            value={numTopics}
            prefix={<HighlightOutlined />}
          />
        </div>
        <br />

        <div className={"progressBars"}>
          <Progress
            type="circle"
            percent={numEvents}
            format={(percent) => `${percent} Events`}
          />

          <Progress
            type="circle"
            percent={numDiff.easy}
            format={(percent) => `${percent} Easy`}
          />

          <Progress
            type="circle"
            percent={numDiff.medium}
            format={(percent) => `${percent} Medium`}
          />

          <Progress
            type="circle"
            percent={numDiff.hard}
            format={(percent) => `${percent} Difficult`}
          />
        </div>
      </div>
      <br />

      <div>
        <h2>Current Articles</h2>
        <div>
          <List
            bordered
            dataSource={articlesList}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>

      <br />

      <div>
        <h2>Current Authors</h2>
        <div>
          <List
            bordered
            dataSource={authorsList}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>

      <br />

      <div>
        <h2>Current Topics</h2>
        <div>
          <List
            bordered
            dataSource={topicsList}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
