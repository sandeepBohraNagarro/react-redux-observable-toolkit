import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from 'common/utils/history';
import store from './store';
import { APP_ROUTES } from 'common/constants';
import Home from 'home/components/Home';
import EmployerLogin from 'home/components/EmployerLogin';
import EmployeeLogin from 'home/components/EmployeeLogin';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={APP_ROUTES.HOME} component={Home} />
          <Route
            exact
            path={APP_ROUTES.SEEKER_LOGIN}
            component={EmployeeLogin}
          />
          <Route
            exact
            path={APP_ROUTES.EMPLOYER_LOGIN}
            component={EmployerLogin}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
