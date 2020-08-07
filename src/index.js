import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from './Redux/store';
import {Provider} from 'react-redux';

// Un comment below line to run the sass-loader example
// import Demo from "./examples/sass-loader/components/Demo/Demo";

// Added to test ESLint
//wrapper ? ReactDOM.render(<TestESLintConfig />, wrapper) : false;
import App from "./components/App";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : ReactDOM.render(<h1>Some error occured, please check console</h1>);
