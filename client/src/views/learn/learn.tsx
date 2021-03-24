import React, { useState } from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";
import "./articles.css"
import Articles from "./articles";
import { Button } from "antd";

type stateObject = {
  isLearning: boolean;
  setLearning: any;
};

type backendData = {
  header: string;
  body: string;
  difficulty: string;
  category: string;
};

const dataFromBackend: Array<backendData> = [
  {
    header: "Biology Yeet",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Bacteria",
  },
  {
    header: "This is some smart text",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Bacteria",
  },
  {
    header: "Spongebob",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Viruses",
  },
  {
    header: "Yo This is cool",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Fungi",
  },
  {
    header: "What happens when",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Human Microbiome",
  },
  {
    header: "Good day - sza",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Dybiosis",
  },
  {
    header: "im listening to music",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Diseases Associated With The Microbiome",
  },
  {
    header: "i need to clean my room",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Current Research",
  },
  {
    header: "nice state cool",
    body:
      "yeet this is some smart tPROGRAMMINGase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Metagenomics",
  },
  {
    header: "very very cool",
    body:
      "yeet thCOOOL what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "cool, cool, cool",
    body:
      "yeet this is sBRUHHHHHH i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "communicty",
    body:
      "yeet this is some smart te ASDF;KLDS FASD FK not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "bruh moment",
    body:
      "YEEETT.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "yeet yeet yeet",
    body:
      "Jha",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "am i cool yet",
    body:
      "aadarsh ",
    difficulty: "hard",
    category: "Bacteria",
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

const fetchArticles = () => {
  const returnedArticles: Array<backendData> = [];
  dataFromBackend.map((element) => {
    if (element.category == "Bacteria") {
      returnedArticles.push(element);
    }
  });
  return returnedArticles;
};

const userView = (viewState: stateObject) => {
  const data = fetchCategories();
  const articles = fetchArticles();
  if (viewState.isLearning) {
    return (
      <div>
          <Articles articles={articles} state={viewState} /> 
      </div>
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
        <Button
          onClick={() => {
            viewState.setLearning(!viewState.isLearning);
          }}
        >
          Toggle View
        </Button>
      </div>
    );
  }
};

const Learn: React.FC<Record<string, never>> = () => {
  const [isLearning, setLearning] = useState(false);
  const viewState: stateObject = {
    isLearning: isLearning,
    setLearning: setLearning,
  };
  const returnedView = userView(viewState);
  return <div>{returnedView}</div>;
};

export default Learn;
