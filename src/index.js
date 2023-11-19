import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";
import App from './App'
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./context/SearchContext/SearchContext";
import "./global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster position="top-right" />
      </Provider>
    </BrowserRouter>
  </SearchProvider>
);
