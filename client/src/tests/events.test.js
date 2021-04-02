// Test the Events component
import ReactDOM from "react-dom";
import Events from "../views/events/events";
import renderer from "react-test-renderer";

it("renders events.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

it("renders the correct title of the page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector("h1").textContent).toBe("Events With VUMS");
});

it("loads a default card for testing pruposes", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card")).toBeTruthy();
});

it("loads the correct testing event title", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card-meta-title").textContent).toBe(
    "This is a Test Card That Will Be Removed From Production"
  );
});

it("loads the correct testing event description", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card-meta-description").textContent).toBe(
    "This is a simple test card for the purpose of demonstration for JEST testing in react. It will be removed!"
  );
});
it("matches events page snapshot", () => {
  const tree = renderer.create(<Events />).toJSON();
  expect(tree).toMatchSnapshot();
});
