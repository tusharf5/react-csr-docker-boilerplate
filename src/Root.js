import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './app';

class Root extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default hot(Root);
