import React, { useState } from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";
import Articles from "./articles";
import { Button } from "antd";

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

const dataFromBackend: Array<backendData> = [
  {
    header: "Bacteria Easy 1",
    body:
      "Bacteria Easy 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Bacteria",
  },
  {
    header: "Bacteria Easy 2",
    body:
      "Bacteria Easy 2 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Bacteria",
  },
  {
    header: "Virus Easy 1 -- This is the title of the article",
    body:
      "Virus Easy 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Viruses",
  },
  {
    header: "Fungi Easy 1 -- This is the title of the article",
    body:
      "Fungi 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "Fungi",
  },
  {
    header: "HM Medium 1 -- This is the title of the article",
    body:
      "HM 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Human Microbiome",
  },
  {
    header: "Dybiosis Medium 1 -- This is the title of the article",
    body:
      "Dybiosis 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Dybiosis",
  },
  {
    header: "DAWM Medium 1 -- This is the title of the article",
    body:
      "DAWM 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "Diseases Associated With The Microbiome",
  },
  {
    header: "CR Hard 1 -- This is the title of the article",
    body:
      "CR Hard 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Current Research",
  },
  {
    header: "Metagenomics Hard 1 -- This is the title of the article",
    body:
      "Metagenomics Hard 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Metagenomics",
  },
  {
    header: "Bacteria Hard 1 -- This is the title of the article",
    body:
      "Bacteria Hard 1 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "Bacteria Hard 2 -- This is the title of the article",
    body:
      "Bacteria Hard 2 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "Bacteria Hard 3 -- This is the title of the article",
    body:
      "Bacteria Hard 3 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "Bacteria Hard 4 -- This is the title of the article",
    body:
      "Bacteria Hard 4 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "Bacteria Hard 5 -- This is the title of the article",
    body:
      "Bacteria Hard 5 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "Bacteria",
  },
  {
    header: "Bacteria Hard 6 -- This is the title of the article",
    body:
      "Bacteria Hard 6 -- yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
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

const fetchArticles = (elementCategory: string, elementDifficulty: string) => {
  const returnedArticles: Array<backendData> = [];
  dataFromBackend.map((element) => {
    if (element.category == elementCategory && element.difficulty == elementDifficulty) {
      returnedArticles.push(element);
    }
  });
  return returnedArticles;
};

const userView = (viewState: stateObject) => {
  const data = fetchCategories();
  //const articles = fetchArticles("Bacteria");
  if (viewState.isLearning) {
    return (
      <div>
        <div>
          <Articles articles={fetchArticles(viewState.articleCategory, viewState.articleDifficulty)} />
          {/* <ArticleDisplay /> */}
        </div>
        <Button
          onClick={() => {
            viewState.setLearning(!viewState.isLearning);
          }}
        >
          Back
        </Button>
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
    setarticleDifficulty: setarticleDifficulty
  };
  const returnedView = userView(viewState);
  return <div>{returnedView}</div>;
};

export default Learn;
