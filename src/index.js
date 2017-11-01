import React from 'react';
import 'aframe';
import './aframeComponents/gridHelper';
import './aframeComponents/cubeCreator';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      root
    );
  });
}
