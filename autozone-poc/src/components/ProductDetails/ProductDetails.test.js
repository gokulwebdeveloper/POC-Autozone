import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from "./ProductDetails";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("section");
  document.body.appendChild(container);
});

describe("renders component with images", () => {
  const details = shallow(<ProductDetails />);
  it("SnapShot Match for Product Details screen", () => {
    const page = renderer.create(<ProductDetails />).toJSON();
    expect(page).toMatchSnapshot();
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});