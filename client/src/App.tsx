import React from "react";
import LandingPage from "./views/landingpage/landingpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./views/login/login";
import Events from "./views/events/events";
import Learn from "./views/learn/learn";
import Play from "./views/play/play";
import NotFound from "./views/notfound/notfound";

const App: React.FC<Record<string, never>> = () => (
  <div>
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/learn">
            <Learn />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/play">
            <Play />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
