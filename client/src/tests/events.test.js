// Test the Events component 
import { getByTestId } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Events from '../views/events/events';
import Logo from '../components/Logo';
import renderer from 'react-test-renderer';

it("renders events.tsx without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Events />, div); 
    ReactDOM.unmountComponentAtNode(div);
});

it("renders the VUMS logo", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Events />, div); 
    expect(div.querySelector(".vumslogo")).toBeTruthy();
})

it("renders the correct title of the page", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Events />, div); 
    expect(div.querySelector('h1').textContent).toBe("Events With VUMS")
});

it("matches events page snapshot", () => {
    const tree = renderer.create(<Events />).toJSON();
    expect(tree).toMatchSnapshot(); 
})

it("loads a default card for testing pruposes", () => {
    
})


// it("renders the VUMS logo correctly", () => {
//     const {getLogo} = render(<Logo page="Events With VUMS"/>);
//     console.log(getLogo)
//     // expect(getLogo('h1')).toHaveTextContent("Events With VUMS");
// });

// it("renders an example card properly", () => {
//     const {getCardById} = 
// });
// it("renders")