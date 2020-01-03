import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create a method for the default store
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : store => store 
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// set up hot module reloading for JS
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;