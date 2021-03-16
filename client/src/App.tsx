import React from "react";
import LandingPage from "./views/landingpage/landingpage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import Login from './views/login/login';

const App: React.FC<Record<string, never>> = () => (
  <div>
    <Router>
      <NavBar />
      <div>
        <Switch>
        <Route path = "/learn">
            <Learn />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
