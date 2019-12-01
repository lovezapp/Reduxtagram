import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components 
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:photoId" component={Single}></Route>
    </Route>
  </Router>
)

render(
  router,
  document.getElementById('root')
);