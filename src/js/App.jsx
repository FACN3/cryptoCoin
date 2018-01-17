import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Learn from "./Learn";
import Markets from "./Markets";
import Buy from "./Buy";
import Sell from "./Sell";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/learn" component={Learn} />
        <Route path="/markets" component={Markets} />
        <Route path="/buy" component={Buy} />
        <Route path="/sell" component={Sell} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
