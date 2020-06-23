import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow } from "enzyme";
import Blog from "./Blog.js";
import {toBeInTheDocument, toHaveStyle } from "@testing-library/jest-dom/extend-expect";
import { getByTestId } from '@testing-library/react';
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

  it("renders an image", () => {

    expect(blog).toBeTruthy();
    expect(blog.find("img").at(1).prop("src").length).toEqual(9);
  });

  it("renders an image", () => {
    expect(blog.find("img").at(2).prop("src")).toBeTruthy();
  });

  it("renders an image", () => {

    expect(blog.find("img").at(3).prop("src")).toBeTruthy();
  });

  it("renders an image", () => {

    expect(blog.find("img").at(4).prop("src")).toBeTruthy();
  });

  it("renders an image", () => {

    expect(blog.find("img").at(5).prop("src")).toBeTruthy();
  });

    it("renders background image",()=> {
        const loadingElem = getByTestId("background");

        expect(loadingElem).toHaveStyle("backgroundImage: ../../utlis/img/bg-img/breadcumb2.jpg");
    });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
