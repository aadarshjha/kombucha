import React from "react";
import { Button } from "antd";

// defines the backend data that is
// recieved on the front end.
type backendData = {
  author: any;
  content: string;
  dateUpdated: string;
  difficulty: string;
  title: string;
  topic: any;
  id: string;
};

// defines all the states that are used in the UI
// using react useState()
type stateObject = {
  isLearning: boolean;
  setLearning: any;
  articleCategory: string;
  setarticleCategory: any;
  articleDifficulty: string;
  setarticleDifficulty: any;
};

// defines the type for categories.
type catProps = {
  difficulty: string;
  categories: any;
  state: stateObject;
};

// a function that fetches unique categories given data of
// type backendData.
export const fetchUniqueCategories = (list: Array<backendData>) => {
  const uniqueList: Array<string> = [];

  list.forEach((element) => {
    if (!uniqueList.includes(element.topic.name)) {
      uniqueList.push(element.topic.name);
    }
  });
  return uniqueList;
};

const Category: React.FC<catProps> = ({
  difficulty,
  categories,
  state,
}: catProps) => {
  // console.log(categories)
  const uniqueList = fetchUniqueCategories(categories);

  return (
    // general html code that dynamically computes articles
    // across easy, medium, and hard given a source of data.
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
