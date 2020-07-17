import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import RegularPage from "../RegularPage";
import HeaderImage from "../../../assets/img/bg-img/bg-8.jpg";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<RegularPage />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});

describe("test RegularPage", () => {
  //test if RegularPage component exists
  it("RegularPage Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should check for the h2 tag", () => {
    const h2Tag = wrapper.find("h2");
    expect(h2Tag.text()).not.toBe("");
  });

  it("should have 2 paragraph tags", () => {
    const p = wrapper.find("p");
    expect(p).toHaveLength(2);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const page = renderer.create(<RegularPage />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
