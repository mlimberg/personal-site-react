require('./styles/index.scss');
const React = require('react');
const { render } = require('react-dom');
import { Router, Route, browserhistory, hashHistory, IndexRoute } from 'react-router';

import Main from './components/Main';

const router = (
  <Router history={history}>
    <Route path='/' component={Main}>
      <IndexRoute></IndexRoute>
        <Route></Route>
        <Route></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('application'));
