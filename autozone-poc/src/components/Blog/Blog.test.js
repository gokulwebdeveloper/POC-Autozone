import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow } from "enzyme";
import Blog from "./Blog.js";
import renderer from "react-test-renderer";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("renders component with images", () => {
  const blog = shallow(<Blog />);

  it("renders an image", () => {
    expect(blog.find("img").at(0).prop("src")).toBeTruthy();
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<Blog />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it('has titles as "Fashion Blog"', () => {
    expect(blog.find("h2").first().text()).toBe("Fashion Blog");
  });
 
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
