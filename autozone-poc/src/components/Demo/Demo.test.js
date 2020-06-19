import React from "react";
import { unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Demo from "./Demo.js";
import Welcome from "../Welcome";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("renders component", () => {

  it("renders without crashing", () => {
    shallow(<Demo />);
  });

  it("renders child component with props value", () => {
    const wrapper = shallow(<Demo />);
    wrapper.name("Autozone");
    wrapper.update();
    var welcomeComponent = wrapper.find(Welcome);
    expect(welcomeComponent.props().name).toEqual("Autozone");
  });

  it("renders correctly with title", () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
