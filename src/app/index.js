import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import InProgress from '../components/in-progress';

// Aync Components should always be exported as hot loaded
const AsyncHome = importedComponent(
  () => import(/* webpackChunkName:'Home' */ '../components/home'),
  {
    LoadingComponent: InProgress,
  },
);

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ '../components/no-match'),
  {
    LoadingComponent: InProgress,
  },
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
