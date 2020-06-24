import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Demo from "./components/Demo/Demo";
import TestESLintConfig from "./examples/ESLint/TestESLintConfig";
import RegularPage from "./components/RegularPage/RegularPage";

// Un comment below line to run the sass-loader example
// import Demo from "./examples/sass-loader/components/Demo/Demo";

// Added to test ESLint
//wrapper ? ReactDOM.render(<TestESLintConfig />, wrapper) : false;
import App from "./components/App";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
