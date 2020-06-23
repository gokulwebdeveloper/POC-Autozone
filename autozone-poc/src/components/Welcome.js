import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./Demo/Demo.css";

const Welcome = (props) => {
  return (
    <Fragment>
      <h1>Welcome To {props.name}</h1>
    </Fragment>
  );
};

export default Welcome;
