//Test the about component
import ReactDOM from "react-dom";
import About  from "../views/about/about";
import renderer from "react-test-renderer";

it("matches about page snapshot", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

// checks if the <Logo /> component's img works.
it("renders the VUMS logo", () => {
    const div = document.createElement("div");
    ReactDOM.render(<About />, div);
    expect(div.querySelector(".vumslogo")).toBeTruthy();
  });

  