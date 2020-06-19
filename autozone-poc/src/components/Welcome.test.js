import React from "react";
import { shallow } from "enzyme";
import "@babel/polyfill";
import Welcome from "./Welcome";

describe("Welcome component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toBeTruthy();
  });
});
