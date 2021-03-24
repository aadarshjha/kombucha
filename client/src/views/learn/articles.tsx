import React, {useState} from "react";
import "./articles.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

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
  const [articleTitle, setArticleTitle] = useState(articles[0].header);
  const [articleText, setArticleText] = useState(articles[0].body);

  const handleClick = (e: any) => {
    console.log("click", e);
    setArticleTitle(articles[e.key].header);
    setArticleText(articles[e.key].body);
  };

  return (
    <div className="flex">
      <div className="left">
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub4"]}
          mode="inline"
        >
          <SubMenu
            key="sub4"
            // icon={<SettingOutlined />}
            title="Articles"
          >
            {articles.map((element, i) => {
              return <Menu.Item key={i}>{element.header}</Menu.Item>;
            })}
          </SubMenu>
        </Menu>
        {/* <List
          bordered
          dataSource={articles}
          renderItem={(item) => (
            <List.Item>
              <h4>{item.header}</h4>
            </List.Item>
          )}
        /> */}
      </div>
      <div className="right">
        {/* This is dynamically loaded based on what is selected */}
        <div>
          <h1>
            {articleTitle}
          </h1>
        </div>
        <div>
          <span>
            {articleText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Articles;
