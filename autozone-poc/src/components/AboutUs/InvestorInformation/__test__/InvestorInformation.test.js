import React from "react";
import "@babel/polyfill";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import InvestorInformation from "../InvestorInformation";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<InvestorInformation />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});
describe("tests for AboutAutoZone.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have div with header and paragraph", () => {
    const rowDiv = wrapper.find("div").at(5);
    const hText = rowDiv.find("h3");
    const p = rowDiv.find("p");
    expect(hText.text()).toBe("AutoZone, Inc.");
    expect(p).toBeTruthy();
  });

  it("should have a div with table", () => {
    const rowDiv = wrapper.find("div").at(6);
    const hText = rowDiv.find("h3");
    const table = rowDiv.find("table");
    expect(hText.text()).toBe("Recent News");
    expect(table).toBeTruthy();
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<InvestorInformation />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
