import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./global.scss";
import store from "./redux-toolkit/store";
import { BrowserRouter } from "react-router-dom";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
