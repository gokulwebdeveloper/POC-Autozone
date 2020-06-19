import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo/Demo";
import TestESLintConfig from "./examples/ESLint/TestESLintConfig";

// Un comment below line to run the sass-loader example
// import Demo from "./examples/sass-loader/components/Demo/Demo";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Demo />, wrapper) : false;

// Added to test ESLint
//wrapper ? ReactDOM.render(<TestESLintConfig />, wrapper) : false;