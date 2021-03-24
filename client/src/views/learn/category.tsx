import React from "react";
import { Button } from "antd";
import Articles from "./articles";

// or import types. FIXME in a optimzation / re write.
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
  difficulty: string;
  categories: Array<backendData>;
  state: stateObject;
};

const fetchUniqueCategories = (list: Array<backendData>) => {
  const uniqueList: Array<string> = [];
  list.forEach((element) => {
    if (!uniqueList.includes(element.category)) {
      uniqueList.push(element.category);
    }
  });
  return uniqueList;
};

// const clickHandler = (e: any) => {
//   console.log(e);
// }

const Category: React.FC<catProps> = ({
  difficulty,
  categories,
  state,
}: catProps) => {
  const uniqueList = fetchUniqueCategories(categories);

  const fetchArticles = (list: Array<backendData>, elementCategory: string) => {
    const returnedArticles: Array<backendData> = [];
    list.map((element) => {
      if (element.category == elementCategory) {
        returnedArticles.push(element);
      }
    });
    return returnedArticles;
  };

  return (
    //   we can demonstrate all easy, medium, hard categories
    <div className="highLevel">
      <h1>{difficulty[0].toUpperCase() + difficulty.substr(1)}</h1>
      <div className="boxLevel">
        {uniqueList.map((element) => {
          return (
            <div key={element} className="box">
              <Button
                type="primary"
                className="buttonPadding"
                onClick={() => {
                  state.setarticleCategory(element);
                  state.setarticleDifficulty(difficulty);
                  state.setLearning(!state.isLearning);
                }}
              >
                {element}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
