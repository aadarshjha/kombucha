// Test the Events component
import ReactDOM from "react-dom";
import Learn, { fetchCategories } from "../views/learn/learn";
import renderer from "react-test-renderer";
import categoryData from "../views/learn/categories.json";
import mockData from "../views/learn/mockData.json";

// ensures that the events.tsx can itself render.
it("renders category.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Learn />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the <Logo /> component's img works.
it("renders the VUMS logo", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Learn />, div);
  expect(div.querySelector(".vumslogo")).toBeTruthy();
});

// checks if the <Logo /> component's h1 title page descriptor works.
it("renders the correct title of the page", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Learn />, div);
  expect(div.querySelector("h1").textContent).toBe("Learn With VUMS");
});

it("renders ensures that fetch unique categories functions for a mock data", () => {
  const returnedData = fetchCategories(mockData);
  expect(returnedData).toStrictEqual(categoryData);
});

it("matches learn page snapshot", () => {
  const tree = renderer.create(<Learn />).toJSON();
  expect(tree).toMatchSnapshot();
});
