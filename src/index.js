import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";

import { App } from "App";

import "@vetixy/circular-std";
import "styles/index.scss";

if (window.location.hostname !== "gregorjosh.github.io") {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter basename="/startupz">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
