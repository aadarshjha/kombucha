// Test the Options component
import ReactDOM from "react-dom";
import Options from "../views/login/options";
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
it("renders options.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Options />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// loads the menu
it("loads the menu optoins", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Options />, div);
  expect(div.querySelector(".ant-menu")).toBeTruthy();
});

it("loads the general states number (the upper level of stats)", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Options />, div);
  expect(div.querySelectorAll(".ant-statistic-title").length).toBe(3);
});

// checks if all menu options are present:
// it("loads the menu optoins", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Options />, div);
//   const elements = div.querySelectorAll(".ant-menu-item>a");
//   console.log(elements[0].innerText)
//   const elementsText = elements.forEach((element) => {
//       return element.innerHTML
//   })
// //   console.log(elements);
// });

// it("loads the menu opto", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Options />, div);
//   expect(div.querySelector(".ant-menu")).toBeTruthy();
// });

// checks if the current iteration of the page matches a recent
// UI snapshot.
it("matches options page snapshot", () => {
  const tree = renderer.create(<Options />).toJSON();
  expect(tree).toMatchSnapshot();
});
