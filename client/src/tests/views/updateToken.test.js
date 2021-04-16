// Test the Events component
import ReactDOM from "react-dom";
import UpdateToken from "../../views/login/updateToken";
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
it("renders UpdateToken.tsx without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateToken />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// checks if the form is rendered
it("renders the UpdateToken form", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateToken />, div);
  expect(div.querySelector(".centeredForm")).toBeTruthy();
});

it("renders three form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateToken />, div);
  expect(div.querySelectorAll(".ant-form-item-label").length).toEqual(2);
});

it("renders the correct form fields", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateToken />, div);
  expect(
    [...div.querySelectorAll(".ant-form-item-label>label")].map(
      (element) => element.textContent
    )
  ).toEqual(["Old Token Value", "New Token Value"]);
});

it("renders the submit button", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateToken />, div);
  expect(div.querySelectorAll(".ant-btn-primary")).toBeTruthy();
});

it("matches learn page snapshot", () => {
  const tree = renderer.create(<UpdateToken />).toJSON();
  expect(tree).toMatchSnapshot();
});
