import React from "react";
import Logo from "../../components/Logo";
import Category from "./category";

const Learn: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Logo page="Learn With VUMS" />
      <div>
        <Category />
      </div>
    </div>    
  )
};

export default Learn;
