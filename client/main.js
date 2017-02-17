import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import DocsMain from './components/docs/docs_main';
import DocsList from './components/docs/docs_list';
import { Docs } from '../imports/collections/docs';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DocsList} />
      <Route path="docs" component={DocsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
