import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import GoogleMap from "./GoogleMap";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<GoogleMap />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});

describe("test CheckoutPage", () => {
  //test if CheckoutPage component exists
  it("CheckoutPage Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  //SnapShot Match test
  it("SnapShot Match", () => {
    const wrapper = renderer.create(<GoogleMap />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
