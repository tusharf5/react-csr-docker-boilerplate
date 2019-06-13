import React from 'react';
import { render } from 'react-dom';

import Root from './Root';
import './styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(<Root history={history} />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(<NewRoot history={history} />, document.getElementById('app'));
  });
}
