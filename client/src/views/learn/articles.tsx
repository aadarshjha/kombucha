import React, { useState } from "react";
import "./articles.css";
import { Menu } from "antd";
import { Button } from "antd";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const { SubMenu } = Menu;

type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

type stateObject = {
  isLearning: boolean;
  setLearning: any;
  articleCategory: string;
  setarticleCategory: any;
  articleDifficulty: string;
  setarticleDifficulty: any;
};

type catProps = {
  articles: any;
  state: stateObject;
};

const Articles: React.FC<catProps> = ({ articles, state }: catProps) => {
  console.log(articles)
  const [articleTitle, setArticleTitle] = useState(articles[0].title);
  const [articleText, setArticleText] = useState(articles[0].content);


  const handleClick = (e: any) => {
    setArticleTitle(articles[e.key].title);
    setArticleText(articles[e.key].content);
  };

  return (
    <div className="flex">
      <div className="left">
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["0"]}
          defaultOpenKeys={["sub4"]}
          mode="inline"
        >
          <SubMenu key="sub4" title="Articles">
            {articles.map((element: any, i: number) => {
              return <Menu.Item key={i}>{element.title}</Menu.Item>;
            })}
          </SubMenu>
        </Menu>
        <div
          style={{
            paddingTop: "5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              state.setLearning(!state.isLearning);
            }}
          >
            Back
          </Button>
        </div>
      </div>
      <div className="right">
        {/* This is dynamically loaded based on what is selected */}
        <div>
          <h1>{articleTitle}</h1>
        </div>
        <div>
          <span>{articleText}</span>
        </div>
      </div>
    </div>
  );
};

export default Articles;
