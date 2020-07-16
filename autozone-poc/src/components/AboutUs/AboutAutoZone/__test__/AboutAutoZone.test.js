import React from "react";
import "@babel/polyfill";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AboutAutoZone from "../AboutAutoZOne.js";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<AboutAutoZone />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});
describe("tests for AboutAutoZone.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should have a header tag", () => {
    const header = wrapper.find(".header-1");
    const headerText = header.text();
    expect(headerText).toHaveLength(14);
    expect(headerText).toBe("About AutoZone");
  });
  it("should have 2 paragraphs inside row-2 div", () => {
    const findRow2Div = wrapper.find(".row-2");
    const p = findRow2Div.find("p");
    expect(p).toHaveLength(2);
  });
  it("should have a div tag with a paragraph", () => {
    const rowDiv = wrapper.find(".row-3");
    const rowDivSecondChild = rowDiv.find(".align-self-center");
    const rowDivSecondChildP = rowDivSecondChild.find("p");
    expect(rowDivSecondChildP).toBeTruthy();
  });

  it("should have a div tag with a paragraph", () => {
    const rowDiv = wrapper.find(".row-4");
    const rowDivFirstChild = rowDiv.find("div").at(1).children();
    expect(rowDivFirstChild).toHaveLength(3);
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<AboutAutoZone />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
