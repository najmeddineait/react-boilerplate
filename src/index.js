/*
  path: /index.js
  description: this is the entry point of the project
*/

//---------- required packages ----------//
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

//---------- required files ----------//
import App from "./App";

//specify a default URL for axios requestss
axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
