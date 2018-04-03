import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/root/root';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/root';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  (
    <Provider store={store}>
      <Root />
    </Provider>
  ),
  document.getElementById('app')
);