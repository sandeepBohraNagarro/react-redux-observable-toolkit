import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from 'common/utils/history';
import store from './store';
import { APP_ROUTES } from 'common/constants';
import Home from 'home/components/Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path={APP_ROUTES.HOME} component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
