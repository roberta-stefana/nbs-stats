import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware, ConnectedRouter } from 'connected-react-router';

import { apiConfig } from './config';
import sagas from './sagas';
import createRootReducer from './redux';
import App from './App';

const history = createBrowserHistory();
const reducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

const routerMiddleware = createRouterMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(  
    routerMiddleware,
    sagaMiddleware
  )
));

sagaMiddleware.run(sagas);
apiConfig.configureAxios(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
