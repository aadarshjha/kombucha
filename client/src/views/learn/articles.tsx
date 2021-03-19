import React from "react";
import './articles.css';

const Articles: React.FC<Record<string, never>> = () => {
  return (
      <div className="flex">
          <div className="left">
              {/* displays the potential articles */}
              a
          </div>
          <div className="right">
              {/* displays the article */}
              b
          </div>
      </div>
  );
};

export default Articles;
