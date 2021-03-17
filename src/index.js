import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import store from "./redux/store";
import './stylesheets/main.css';
import './stylesheets/normalize.css';

ReactDOM.render(
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root'),
);