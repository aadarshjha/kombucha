import React, { MouseEventHandler } from "react";
import { Button } from "antd";

// or import types. FIXME in a optimzation / re write.
type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

type catProps = {
  difficulty: string;
  categories: Array<backendData>;
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
  categories
}: catProps) => {
  const uniqueList = fetchUniqueCategories(categories);
  console.log(uniqueList);
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
                // onClick={() => {viewState.setLearning(true)}}
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
