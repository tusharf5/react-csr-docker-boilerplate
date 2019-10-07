import { hot } from 'react-hot-loader/root';
import React from 'react';
import importedComponent from 'react-imported-component';
import { Switch, Route } from 'react-router-dom';

import InProgress from '../components/in-progress';

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
    <Switch>
      <Route path="/" component={AsyncHome} />
      <Route component={AsyncNoMatch} />
    </Switch>
  );
};

export default hot(App);
