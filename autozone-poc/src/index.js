import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo/Demo";
import TestESLintConfig from "./examples/ESLint/TestESLintConfig";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Demo />, wrapper) : false;

// Added to test ESLint
//wrapper ? ReactDOM.render(<TestESLintConfig />, wrapper) : false;