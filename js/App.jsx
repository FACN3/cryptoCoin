import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './Landing';
import Learn from './Learn';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/learn' component={Learn} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
