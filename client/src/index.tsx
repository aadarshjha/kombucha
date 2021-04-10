import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from "./App";
import { reducers } from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
import thunk from 'redux-thunk';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
