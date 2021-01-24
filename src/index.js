import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let initialState = {
    token: null
  };

  let store = configureStore(initialState);
  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});