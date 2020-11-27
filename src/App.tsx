import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NoMatch } from "./routes/NoMatch";
import { NavBar } from "./components/Navbar";
import { Home } from "./routes/Home";
import { Issue } from "./routes/Issue";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/issue/:number" exact>
            <Issue />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}