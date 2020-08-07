import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "@babel/polyfill";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Contact from "../Contact";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<Contact />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});
describe("tests for Contact.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });
  it("has h2 tag title", () => {
    const h2 = wrapper.find("h2");
    const h2Text = h2.text();
    expect(h2Text).toBe("How to Find Us");
  });
  it("should have 3 paragraph tags", () => {
    const p = wrapper.find("p");
    expect(p).toHaveLength(3);
  });
  it("should have 2 span tags", () => {
    const span = wrapper.find("span");
    expect(span).toHaveLength(2);
  });
  it("should load googleMaps correctly", () => {
    const googleMap = wrapper.find("GoogleMap");
    expect(googleMap).toBeTruthy();
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<Contact />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
