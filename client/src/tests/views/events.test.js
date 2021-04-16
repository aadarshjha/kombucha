// Test the Events component
import ReactDOM from "react-dom";
import Events from "../../views/events/events";
import renderer from "react-test-renderer";

// ensures that the events.tsx can itself render.
it("renders events.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the <Logo /> component's img works.
it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

// checks if the <Logo /> component's h1 title page descriptor works.
it("renders the correct title of the page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector("h1").textContent).toBe("Events With VUMS");
});

// checks if the default event card can load. s
it("loads a default card for testing pruposes", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card")).toBeTruthy();
});

// checks if the correct event title is rendered for the default card.
it("loads the correct testing event title", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card-meta-title").textContent).toBe(
    "This is a Test Card That Will Be Removed From Production"
  );
});

// checks if the correct event description is rendered for the default card.
it("loads the correct testing event description", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Events />, div);
  expect(div.querySelector(".ant-card-meta-description").textContent).toBe(
    "This is a simple test card for the purpose of demonstration for JEST testing in react. It will be removed!"
  );
});

// checks if the current iteration of the page matches a recent
// UI snapshot.
it("matches events page snapshot", () => {
  const tree = renderer.create(<Events />).toJSON();
  expect(tree).toMatchSnapshot();
});
