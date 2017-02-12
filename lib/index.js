require('./styles/index.scss');
const React = require('react');
const { render } = require('react-dom');
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import App from './components/app/App';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/* <IndexRoute component={Header}/> */}
        <Route path='/resume' component={Resume}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/contact' component={Contact}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('application'));
