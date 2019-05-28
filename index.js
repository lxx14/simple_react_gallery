import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/system/rootReducer';
import App from './App';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
