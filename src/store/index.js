import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

function configureStore(initialState = {}) {
  const middlewares = [];
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  // Hot reloadable!
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}

const store = configureStore();

export default store;
