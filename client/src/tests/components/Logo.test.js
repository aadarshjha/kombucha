// Test the Options component
import ReactDOM from "react-dom";
import Logo from "../../components/Logo";
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

// // ensures that the events.tsx can itself render.
it("renders logo.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo page={"test"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the <Logo /> component's img works.
it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

// loads the menu
it("loads the title", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo page={"test"} />, div);
  expect(div.querySelector("h1").textContent).toEqual("test");
});

// it("loads the correct number of menu optoins", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Options />, div);
//   expect(div.querySelectorAll(".ant-menu-item").length).toBe(14);
// });

// checks if the current iteration of the page matches a recent
// UI snapshot.
it("matches options page snapshot", () => {
  const tree = renderer.create(<Logo page={"test"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
