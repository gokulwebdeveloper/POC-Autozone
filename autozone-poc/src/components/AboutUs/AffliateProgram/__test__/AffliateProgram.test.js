import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "@babel/polyfill";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AffliateProgram from "../AffliateProgram.js";

let wrapper;
//mount component for testing
beforeEach(() => {
  wrapper = shallow(<AffliateProgram />);
});

//Cleanup after test execution
afterEach(() => {
  wrapper.unmount();
});
describe("tests for AboutAutoZone.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });

  it("has a div containing header image", () => {
    const imageDiv = wrapper.find("div").at(1).children();
    const imageUrl =
      "https://www.autozone.com/images/MEDIA_ProductCatalog/m1120006_affiliate-header.jpg";
    expect(imageDiv.prop("src")).toBe(imageUrl);
  });
  it("has a div containing man's image, header and paragraphs", () => {
    const imageDiv = wrapper.find("div").at(2).children();
    const imageTag = imageDiv.find("img");
    const imageUrl =
      "https://www.autozone.com/images/MEDIA_ProductCatalog/m1120007_autozoner.jpg";
    const hyperlink =
      "https://www.pepperjamnetwork.com/affiliate/registration.php?refid=143064";
    const aRefText = "Join the AutoZone.com Affiliate Program Now";
    const header = imageDiv.find("h2");
    const p = imageDiv.find("p");
    const aRef = imageDiv.find("a");
    expect(imageTag.prop("src")).toBe(imageUrl);
    expect(header.text()).toBe(
      "Earn Commissions By Promoting The Top Brands In Auto Parts And Accessories"
    );
    expect(p.length).toBe(2);
    expect(aRef.prop("href")).toBe(hyperlink);
    expect(aRef.find("h4").text()).toBe(aRefText);
  });
  it("has a div with header and ul", () => {
    const imageDiv = wrapper.find("div").at(5).children();
    const h3 = imageDiv.find("h3");
    const ul = imageDiv.find("li");
    expect(h3.text()).toBe("Why Join the AutoZone.com Affiliate Program?");
    expect(ul.length).toBe(5);
  });

  it("should have div with header, paragraph and ul", () => {
    const imageDiv = wrapper.find("div").at(6).children();
    const h3 = imageDiv.find("h3");
    const p = imageDiv.find("p");
    const li = imageDiv.find("li");
    expect(h3.text()).toBe(
      "Get Started Today - Sign Up as an AutoZone.com Affiliate!"
    );
    expect(p).toBeTruthy();
    expect(li.length).toBe(4);
  });

  it("SnapShot Match", () => {
    const page = renderer.create(<AffliateProgram />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
