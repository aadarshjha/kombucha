import React from "react";

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

const Category: React.FC<catProps> = ({ difficulty, categories }: catProps) => {
  const uniqueList = fetchUniqueCategories(categories);
  console.log(uniqueList)
  return (
    //   we can demonstrate all easy, medium, hard categories
    <div>
      <h1>{difficulty[0].toUpperCase() + difficulty.substr(1)}</h1>
      {/* {
          uniqueList.map((element) => {
              return (
                  <p>{element}</p>
              )
          })
      } */}
      {/* {
          uniqueList.map(element => {
              return (
                  <li key={element.toString()}>
                      {element}
                  </li>
              )
          })
      } */}
    </div>
  );
};

export default Category;
