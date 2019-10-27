import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import ProptTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import InProgress from '../in-progress';
import styles from './styles.module.scss';

const AsyncAbout = importedComponent(
  () => import(/* webpackChunkName:'About' */ '../about'),
  {
    LoadingComponent: InProgress,
  },
);

function Home() {
  return (
    <Fragment>
      <div className={styles.home}>Hello World Page</div>
      <Link to="/about">Go to About</Link>
      <Switch>
        <Route path="/about" component={AsyncAbout} />
      </Switch>
    </Fragment>
  );
}

Home.propTypes = {
  children: ProptTypes.any,
};

// exporting this with hot hoc as this component contains route declarations
export default hot(Home);
