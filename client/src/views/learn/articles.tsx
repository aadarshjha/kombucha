import React, { useState } from "react";
import "./articles.css";
import { Menu } from "antd";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.bubble.css';


const { SubMenu } = Menu;

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
  const [articleTitle, setArticleTitle] = useState(articles[0].title);
  const [articleText, setArticleText] = useState(articles[0].content);

  const handleClick = (e: any) => {
    setArticleTitle(articles[e.key].title);
    setArticleText(articles[e.key].content);
  };

  return (
    <div className="flex">
      <div className="leftArt">
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
              state.setLearning(false);
            }}
          >
            Back
          </Button>
        </div>
      </div>
      <div
        className="rightArt"
        style={{
          paddingLeft: "25px",
          paddingRight: "10px",
        }}
      >
        {/* This is dynamically loaded based on what is selected */}
        <div>
          <h1>{articleTitle}</h1>
        </div>
        <div>
        <ReactQuill
          value={articleText}
          readOnly={true}
          theme={"bubble"}
          />
          {/* <ReactMarkdown source={turndownService.turndown(String({articleText}))} /> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;
