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

const Category: React.FC<catProps> = ({ difficulty, categories }: catProps) => {
  return (
    //   we can demonstrate all easy, medium, hard categories
    <div>
        <h1>
            {difficulty[0].toUpperCase() + difficulty.substr(1)}
        </h1>
        {
            // categories.map(element => {
            //     return (
            //         <div>
            //             <p>
            //                 element.catego
            //             </p>
            //         </div>
            //     )
            // })
        }
    </div>
  );
};

export default Category;
