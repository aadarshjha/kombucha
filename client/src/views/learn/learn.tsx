import React, { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";
import "./articles.css";
import Articles from "./articles";
import { Button } from "antd";
import mockData from "./mockData.json";
import axios from "axios";

let fetchedData: Array<backendData>;
let byCategory: any;
let seperatedArticles: any;
let returnedView: JSX.Element;

type stateObject = {
  isLearning: boolean;
  setLearning: any;
  articleCategory: string;
  setarticleCategory: any;
  articleDifficulty: string;
  setarticleDifficulty: any;
};

type backendData = {
  author: any;
  content: string;
  dateUpdated: string;
  difficulty: string;
  title: string;
  topic: any;
  id: string;
};

export const fetchCategories = (dataFromBackend: Array<backendData>) => {
  // we fetch article data:
  // const articles = await axios.get('localhost:5000/learn/articles')
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
  elementDifficulty: string,
  dataFromBackend: Array<backendData>
) => {
  const returnedArticles: Array<backendData> = [];
  dataFromBackend.map((element) => {
    console.log(element.topic.name)
    if (
      element.topic.name == elementCategory &&
      element.difficulty == elementDifficulty
    ) {
      returnedArticles.push(element);
    }
  });
  return returnedArticles;
};

const userView = (fetchedData: any, viewState: stateObject) => {
  const data = fetchCategories(fetchedData);
  console.log(data.easy)
  if (viewState.isLearning) {
    return (
      <Articles
        articles={fetchArticles(
          viewState.articleCategory,
          viewState.articleDifficulty,
          fetchedData
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
      </div>
    );
  }
};

const renderScreen = (stateCur: any) => {

  if (stateCur.isLoading) {
    return (
      <div className="test">
        <Logo page="Learn With VUMS" />
      </div>
    )
  } else {
    return returnedView;
  }
}

const Learn: React.FC<Record<string, never>> = () => {

  // isLoading state for fetching data
  const [isLoading, setLoading] = useState(true); 

  // is learning will see if the user clicks on the category
  const [isLearning, setLearning] = useState(false);

  // article category will be the current category that the user clicks.
  const [articleCategory, setarticleCategory] = useState("Bacteria");

  // article difficulty will be the difficulty that the user clicks on.
  const [articleDifficulty, setarticleDifficulty] = useState("Easy");

  // complex state dictates the users actions.
  const viewState: stateObject = {
    isLearning: isLearning,
    setLearning: setLearning,
    articleCategory: articleCategory,
    setarticleCategory: setarticleCategory,
    articleDifficulty: articleDifficulty,
    setarticleDifficulty: setarticleDifficulty,
  };

  axios
    .get("http://localhost:5000/learn/articles")
    .then((response) => {
      // call all the functions to filter the data.
      fetchedData = response.data;
      byCategory = fetchCategories(fetchedData);
      seperatedArticles = fetchArticles("Bacteria", "easy", fetchedData);
      returnedView = userView(fetchedData, viewState);

      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {renderScreen({isLoading, setLoading})}
    </>
  )
};

export default Learn;
