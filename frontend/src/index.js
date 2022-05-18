import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import configStore from "./store/storeConfig"; 

//Poderiamos criar varios estados ao criar novos store, com isso fariamos um estado futuro e/ou passado
const store = configStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

// Digitar no console do browser: $r.props.store.getState()