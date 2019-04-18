import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
//import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { searched } from './models'

//const rootReducer = combineReducers({ searchedProducts, suggestedProducts });

const store = createStore(searched, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
   <Provider store={ store }>
    <App />,
   </Provider>,
  document.getElementById('root')
);
