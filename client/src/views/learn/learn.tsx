import React, { useState } from "react";
import { isLiteralExpression } from "typescript";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";

// FETCHING THE DATA WILL GO HERE!
// we can simple filter here

// global view that we are in:

// const isLearning = false; 

// type stateObject = {
//   isLearning: boolean;
//   setLearning: any;
// };

// const viewState: stateObject = {
//   isLearning: isLearning,
//   setLearning: setLearning,
// };

type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

const dataFromBackend: Array<backendData> = [
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Bacteria",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Viruses",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Fungi",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Human Microbiome",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Dybiosis",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Diseases Associated With The Microbiome",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Current Research",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Metagenomics",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Research Methods For The Microbiome",
  },
];

const fetchCategories = () => {
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

const userView = (isLearning: boolean) => {
  const data = fetchCategories();
  if (isLearning) {
    return <h1>Test</h1>;
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
          />
          {/* medium */}
          <Category
            difficulty={"medium"}
            categories={data.medium}
          />
          {/* hard */}
          <Category
            difficulty={"hard"}
            categories={data.hard}
          />
        </div>
      </div>
    );
  }
};

const Learn: React.FC<Record<string, never>> = () => {
  const [isLearning, setLearning] = useState(false);
  const returnedView = userView(isLearning);
  return <div>{returnedView}</div>;
};

export default Learn;
