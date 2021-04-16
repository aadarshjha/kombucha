// Test the Options component
import ReactDOM from "react-dom";
import NotFound from "../../views/notfound/notfound";
import renderer from "react-test-renderer";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// ensures that the notfound.tsx can itself render.
it("renders notfound.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the <notfound /> component's img works.
it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NotFound />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

// loads the menu
it("displays the right not found text", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NotFound />, div);
  expect(div.querySelector("h1").textContent).toEqual(
    "This Page Doesn't Exist! Use The Nav Bar To Get Back :)"
  );
});

// checks if the current iteration of the page matches a recent
// UI snapshot.
it("matches options page snapshot", () => {
  const tree = renderer.create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
