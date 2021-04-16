// Test the Options component
import ReactDOM from "react-dom";
import Intro from "../../views/landingpage/Intro";
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

// ensures that the events.tsx can itself render.
it("renders intro.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Intro />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the <About /> component's img works.
it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Intro />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

// checks the titles of page
it("the titles of the page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Intro />, div);
  const allHeaders = [];
  [...div.querySelectorAll("h1")].forEach((element) =>
    allHeaders.push(element.textContent)
  );
  expect(allHeaders).toEqual(["Welcome To VUMS"]);
});

it("renders the introductory paragraph", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Intro />, div);
  expect(div.querySelector(".descriptionText").textContent).toEqual(
    "The Vanderbilt Undergraduate Microbiome Society aims to educate the local community about the microbiome and the field’s latest developments, to promote social and microbial diversity, and to help facilitate the distribution of fresh produce to underprivileged persons in Davidson County."
  );
});

// checks if the current iteration of the page matches a recent
// UI snapshot.
it("matches options page snapshot", () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
