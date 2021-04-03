import React, { useState } from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";
import "./articles.css";
import Articles from "./articles";
import { Button } from "antd";
import mockData from "./mockData.json";

type stateObject = {
  isLearning: boolean;
  setLearning: any;
  articleCategory: string;
  setarticleCategory: any;
  articleDifficulty: string;
  setarticleDifficulty: any;
};

type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

// Please disregard lines 25 - 398 from the total line count.
const dataFromBackend: Array<backendData> = mockData;

export const fetchCategories = () => {
  const easy: Array<backendData> = [];
  const medium: Array<backendData> = [];
  const hard: Array<backendData> = [];
  dataFromBackend.map((element) => {
    if (element.difficulty === "easy") {
      easy.push(element);
    } else if (element.difficulty === "medium") {
      medium.push(element);
    } else {
      hard.push(element);
    }
  });
  return {
    easy: easy,
    medium: medium,
    hard: hard,
  };
};

export const fetchArticles = (
  elementCategory: string,
  elementDifficulty: string
) => {
  const returnedArticles: Array<backendData> = [];
  dataFromBackend.map((element) => {
    if (
      element.category == elementCategory &&
      element.difficulty == elementDifficulty
    ) {
      returnedArticles.push(element);
    }
  });
  return returnedArticles;
};

const userView = (viewState: stateObject) => {
  const data = fetchCategories();
  if (viewState.isLearning) {
    console.log(
      fetchArticles(viewState.articleCategory, viewState.articleDifficulty)
    );
    return (
      <Articles
        articles={fetchArticles(
          viewState.articleCategory,
          viewState.articleDifficulty
        )}
        state={viewState}
      />
    );
  } else {
    return (
      <div className="test">
        <Logo page="Learn With VUMS" />
        <div className="categories">
          {/* spread the state when we click the button */}
          {/* easy */}
          <Category
            difficulty={"easy"}
            categories={data.easy}
            state={viewState}
          />
          {/* medium */}
          <Category
            difficulty={"medium"}
            categories={data.medium}
            state={viewState}
          />
          {/* hard */}
          <Category
            difficulty={"hard"}
            categories={data.hard}
            state={viewState}
          />
        </div>
        {/* <Button
          onClick={() => {
            viewState.setLearning(!viewState.isLearning);
          }}
        >
          Toggle View
        </Button> */}
      </div>
    );
  }
};

const Learn: React.FC<Record<string, never>> = () => {
  const [isLearning, setLearning] = useState(false);
  const [articleCategory, setarticleCategory] = useState("Bacteria");
  const [articleDifficulty, setarticleDifficulty] = useState("Easy");
  const viewState: stateObject = {
    isLearning: isLearning,
    setLearning: setLearning,
    articleCategory: articleCategory,
    setarticleCategory: setarticleCategory,
    articleDifficulty: articleDifficulty,
    setarticleDifficulty: setarticleDifficulty,
  };
  const returnedView = userView(viewState);
  return <div>{returnedView}</div>;
};

export default Learn;
