import React from "react";
import { shallow } from "enzyme";
import "@babel/polyfill";
import Welcome from "./Welcome";

let container;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("Welcome component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toBeTruthy();
  });
});
