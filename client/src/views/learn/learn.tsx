import React from "react";
import Logo from "../../components/Logo";
import Category from "./category";

// FETCHING THE DATA WILL GO HERE! 
// we can simple filter here

const dataFromBackend = [
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "easy",
    "category": "research"
  },
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "medium",
    "category": "test1"
  },
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "hard",
    "category": "test2"
  },
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "easy",
    "category": "test3"
  },
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "medium",
    "category": "test4"
  },
  {
    "header": "This is the title of the article", 
    "body": "yeet this is some smart text from VUMS that is really smart idk what to write becuase i do not know anything about micribiologyyeetet here i ssomemore text i like some text etc etc yuh this is even more text lets go herere more text yeet.",
    "difficulty": "hard",
    "category": "test5"
  }
]

const Learn: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Logo page="Learn With VUMS" />
      <div>
        {/* easy */}
        <Category />
        {/* medium */}
        <Category />
        {/* hard */}
        <Category />
      </div>
    </div>
  );
};

export default Learn;
