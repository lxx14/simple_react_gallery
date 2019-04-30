import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './src/system/rootReducer';
import App from './App';


const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
