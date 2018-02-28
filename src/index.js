import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const initialCount = window.__INITIAL_STATE__;
const initialCount = 0;

ReactDOM.hydrate(
  <App initialCount={initialCount} />,
  document.getElementById("app")
);