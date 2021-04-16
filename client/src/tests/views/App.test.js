// Tests App.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

// renders App.tsx entry without crashing.
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders")
