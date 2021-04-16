// Test the Events component
import ReactDOM from "react-dom";
import DeleteEvent from "../../views/login/deleteEvent";
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
it("renders DeleteEvent.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DeleteEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the form is rendered
it("renders the DeleteEvent form", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DeleteEvent />, div);
  expect(div.querySelector(".centeredForm")).toBeTruthy();
});

it("renders three form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DeleteEvent />, div);
  expect(div.querySelectorAll(".ant-form-item-label").length).toEqual(1);
});

it("renders the correct form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DeleteEvent />, div);
  expect(
    [...div.querySelectorAll(".ant-form-item-label>label")].map(
      (element) => element.textContent
    )
  ).toEqual(["Title"]);
});

it("renders the submit button", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DeleteEvent />, div);
  expect(div.querySelectorAll(".ant-btn-primary")).toBeTruthy();
});

it("matches learn page snapshot", () => {
  const tree = renderer.create(<DeleteEvent />).toJSON();
  expect(tree).toMatchSnapshot();
});
