import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Docs from '../imports/collections/docs';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
