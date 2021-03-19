import React from "react";
import Logo from "../../components/Logo";
import Category from "./category";
import "./learn.css";

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

const Learn: React.FC<Record<string, never>> = () => {
  const data = fetchCategories();
  return (
    <div className="test">
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
