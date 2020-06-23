import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import BreadcrumbArea from "./BreadcrumbArea";

let container = null;

//mount component for testing
beforeEach(() => {
  container = mount(<BreadcrumbArea title="checkout" />);
});

//Cleanup after test execution
afterEach(() => {
  container.unmount();
});

describe("test BreadCrumbArea component", () => {
  //test if component render correctly
  it("component render correctly", () => {
    expect(container.exists()).toBeTruthy();
  });

  //test if it have correct props
  it("should have title as props", () => {
    expect(container.prop("title")).toEqual("checkout");
  });

  //test if it should have one h2 for title
  it("should have one h2 for title", () => {
    expect(container.find("h2")).toHaveLength(1);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const container = renderer.create(<BreadcrumbArea />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
