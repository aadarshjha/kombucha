import React from "react";

type catProps = {
  difficulty: string;
  categories: Array<string>;
};

const Category: React.FC<catProps> = ({ difficulty, categories }: catProps) => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Category;
