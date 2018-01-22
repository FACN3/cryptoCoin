import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Learn from './Learn';
import Markets from './Markets';
import Buy from './Buy';
import PublicChat from './PublicChat';
import { addUser } from './actionCreators';

store.dispatch(addUser('Me'));

const App = () => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/learn" component={Learn} />
        <Route path="/markets" component={Markets} />
        <Route path="/buy" component={Buy} />
        <Route path="/publicchat" component={PublicChat} />
      </Switch>
    </div>
  </Provider>
);

export default App;
