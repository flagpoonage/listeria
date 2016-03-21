'use strict';

require('./shared/reset.pcss');
require('./shared/base.pcss');
require('./shared/fa.pcss');

import React from 'react'; // eslint-disable-line
import { Root, TabPages } from 'layout';
import { PageTreeView } from 'pages';
import { render } from 'react-dom';
import { RootReducer } from './reducers';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(Object.assign({}, { app: RootReducer }, { routing: routerReducer })),
  applyMiddleware(routerMiddleware(hashHistory), thunk)
);

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="/trees/1" />
      <Route component={Root}>
        <Route path="trees">
          <Route path=":id" component={PageTreeView} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
