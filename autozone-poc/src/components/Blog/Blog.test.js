import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow } from "enzyme";
import Blog from "./Blog.js";
import renderer from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InnerBgImg from "../../utlis/img/bg-img/breadcumb2.jpg";

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

  it("SnapShot Match for blog screen", () => {
    const page = renderer.create(<Blog />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it('has titles as "Fashion Blog"', () => {
    expect(blog.find("h2").first().text()).toBe("Fashion Blog");
  });
 
  it('has Id as background', () => {
    const blogPage = render(<Blog />);
    expect(blogPage.getByTestId('background')).toBeInTheDocument();
  });

  it("has backbground image with styles", () => {
    const blogPage = render(<Blog />);
    expect(blogPage.getByTestId('background')).toHaveStyle("backgroundImage:"+InnerBgImg);
  });
  
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
