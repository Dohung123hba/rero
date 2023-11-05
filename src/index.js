import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from  "react-router-dom"
import { createStore } from 'redux';
import allReducer from './reducer';
import {Provider} from "react-redux"

const store = createStore(allReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </Provider>
);
reportWebVitals();
