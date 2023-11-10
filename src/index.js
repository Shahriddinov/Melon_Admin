import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";
import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  </React.StrictMode>
);
