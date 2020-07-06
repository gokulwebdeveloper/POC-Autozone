import React from "react";
import { unmountComponentAtNode } from "react-dom";
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
  it("has a div with background", () => {
    const backgroundDiv = wrapper.find(".row-1");
    const backgroundDivStyle = backgroundDiv.prop("style").backgroundImage;
    const backgroundUrl =
      "url('https://cms.jibecdn.com/prod/autozone-about/assets/LP-A1-BG-IMG-en-us-1546452533686.png')";
    expect(backgroundDivStyle).toEqual(backgroundUrl);
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
  it("should have a div tag with an image and a paragraph", () => {
    const rowDiv = wrapper.find(".row-3");
    const rowDivFirstChild = rowDiv.find("div").first().children();
    const rowDivSecondChild = rowDiv.find(".align-self-center");
    const rowDivSecondChildP = rowDivSecondChild.find("p");
    const childFirstDiv = rowDivFirstChild.find("div > img");
    const imgUrl = childFirstDiv.prop("src");
    const imageUrl =
      "https://cms.jibecdn.com/prod/autozone-about/assets/LP-SKU-D6-BANNER_1-en-us-1546455094813.png";
    expect(imgUrl).toBe(imageUrl);
    expect(rowDivSecondChildP).toBeTruthy();
  });

  it("should have a div tag with an image and a paragraph", () => {
    const rowDiv = wrapper.find(".row-4");
    const rowDivFirstChild = rowDiv.find("div").at(1).children();
    expect(rowDivFirstChild).toHaveLength(3);
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<AboutAutoZone />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
