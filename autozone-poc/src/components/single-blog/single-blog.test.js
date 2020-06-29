import React from "react";
import Singleblog from "./single-blog";
import { unmountComponentAtNode } from "react-dom";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Comments from "./Comments";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("SingleBlog exists", () => {
  const wrapper = shallow(<Singleblog />);
  it("SingleBlog Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  const singleBlog = shallow(<Singleblog />);
  it("renders an image", () => {
    expect(singleBlog.find("img").at(1).prop("src")).toBeTruthy;
  });

  test("SingleBlog renders a <Comments/>", () => {
    const sb = shallow(<Comments />);
    expect(sb.exists()).toBeTruthy;
  });
  const wrappersnap = shallow(<Singleblog />);
  it("SnapShot Match", () => {
    expect(wrappersnap).toMatchSnapshot();
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
