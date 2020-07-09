import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import ProductNotFound from "./ProductNotFound";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe("renders component with images", () => {
  const wrapper = mount(<ProductNotFound />);
  it("SnapShot Match for Product Details screen", () => {
    const page = renderer.create(<ProductNotFound />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("has h1", () => {
    expect(wrapper.find("h1").at(0)).toBeTruthy();
  });

  it("has h2", () => {
    expect(wrapper.find("h2").at(0)).toBeTruthy();
  });

});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});