import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo/Demo";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Demo />, wrapper) : false;