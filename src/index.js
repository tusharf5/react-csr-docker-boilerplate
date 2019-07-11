import React from 'react';
import { render } from 'react-dom';

import Root from './Root';
import './styles/main.scss';
require('./favicon.ico');

const history = {};

render(<Root history={history} />, document.getElementById('app'));
