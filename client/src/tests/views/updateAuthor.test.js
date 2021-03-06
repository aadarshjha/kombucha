// Test the Events component
import ReactDOM from "react-dom";
import UpdateAuthor from "../../views/login/updateAuthor";
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
it("renders updateAuthor.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateAuthor />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the form is rendered
it("renders the add author form", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateAuthor />, div);
  expect(div.querySelector(".centeredForm")).toBeTruthy();
});

it("renders three form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateAuthor />, div);
  expect(div.querySelectorAll(".ant-form-item-label").length).toEqual(4);
});

it("renders the correct form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateAuthor />, div);
  expect(
    [...div.querySelectorAll(".ant-form-item-label>label")].map(
      (element) => element.textContent
    )
  ).toEqual([
    "Author Name",
    "Update Author Name",
    "Update Author Graduating Year",
    "Update Author Majors (Seperate Via Commas)",
  ]);
});

it("renders the submit button", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateAuthor />, div);
  expect(div.querySelectorAll(".ant-btn-primary")).toBeTruthy();
});

it("matches learn page snapshot", () => {
  const tree = renderer.create(<UpdateAuthor />).toJSON();
  expect(tree).toMatchSnapshot();
});
