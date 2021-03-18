import React from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import './learn.css'

// FETCHING THE DATA WILL GO HERE!
// we can simple filter here

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
    category: "research",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "test1",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "test2",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "easy",
    category: "test3",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "medium",
    category: "test4",
  },
  {
    header: "This is the title of the article",
    body:
      "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    difficulty: "hard",
    category: "test5",
  },
];

const fetchCategories = () => {
  const easy: Array<backendData> = [];
  const medium: Array<backendData> = [];
  const hard: Array<backendData> = [];
  dataFromBackend.map((element) => {
    if (element.category === "easy") {
      easy.push(element);
    } else if (element.category === "medium") {
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

const Learn: React.FC<Record<string, never>> = () => {
  const data = fetchCategories()
  return (
    <div>
      <Logo page="Learn With VUMS" />
      <div className="categories">
        {/* easy */}
        <Category difficulty={"easy"} categories={data.easy} />
        {/* medium */}
        <Category difficulty={"medium"} categories={data.medium} />
        {/* hard */}
        <Category difficulty={"hard"} categories={data.hard} />
      </div>
    </div>
  );
};

export default Learn;
