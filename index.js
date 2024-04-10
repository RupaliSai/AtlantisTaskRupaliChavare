// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

localStorage.setItem(
  "credentials",
  JSON.stringify({ username: "admin", password: "password" })
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);