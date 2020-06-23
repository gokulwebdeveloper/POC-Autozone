import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
