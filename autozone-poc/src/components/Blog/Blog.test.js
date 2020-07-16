import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow, mount } from "enzyme";
import Blog from "./Blog.js";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import blog1 from "../../utlis/img/bg-img/blog1.jpg";
import background from '../../utlis/img/azo-blog-img/background_image.jpg';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("renders component with images", () => {
  const blog = shallow(<Blog />);

  it("renders an image", () => {
    //expect(blog.find("img").at(0).prop("src")).toBeTruthy();
    expect(blog.find("single-blog-area mb-50")).toBeTruthy();
  });

  it("SnapShot Match for blog screen", () => {
    const page = renderer.create(<Blog />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("has Id as background", () => {
    const blogPage = render(<Blog />);
    expect(blogPage.getByTestId("background")).toBeInTheDocument();
  });

  it("has backbground image with styles", () => {
    const blogPage = render(<Blog />);
    expect(blogPage.getByTestId("background")).toHaveStyle(
      "backgroundImage:"+background );
  });
});

describe("renders component with data", () => {
  const wrapper = shallow(<Blog />);

  const data = [
    {
      id: "1",
      image: blog1,
      content: "some data",
      description: "details",
      recent_date: "09/02/2020",
      blogStatus: true,
    },
    {
      id: "2",
      image: blog1,
      content: "some data",
      description: "details",
      recent_date: "19/05/2020",
      blogStatus: false,
    },
  ];
  it("renders without exploding", () => {
    mount(<Blog list={data} />);
  });

  it("renders with list title", () => {
    expect(wrapper.find("post-title")).toBeTruthy();
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
