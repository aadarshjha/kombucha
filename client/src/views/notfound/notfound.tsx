import React from "react";
import Logo from "../../components/Logo";

const NotFound: React.FC<Record<string, never>> = () => {
  return (
    <Logo page="This Page Doesn't Exist! Use The Nav Bar To Get Back :)"></Logo>
  );
};

export default NotFound;
