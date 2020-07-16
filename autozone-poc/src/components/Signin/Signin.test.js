import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Signin from "./Signin";

let page;
//mount component for testing
beforeEach(() => {
  page = mount( <Signin />);
});

//Cleanup after test execution
afterEach(() => {
  page.unmount();
});

describe("test Signin Page", () => {
  //test if Signin component exists
  it("Signin page Exists", () => {
    expect(page.exists()).toBeTruthy();
  });

  //if it has title as "Sign in"
  it('has titles as "Sign In"', () => {
    expect(page.find("h2").first().text()).toBe("Sign In");
  });


  //if it has 1 Button componenent
  it("has 1 Button componenent", () => {
    expect(page.find("Button")).toHaveLength(1);
  });

  //if Button has text Signin
  it("Button has text Signin", () => {
    expect(page.find("Button").text()).toBe("Signin");
  });

  //if it has 1 form for Signin
  it("has 1 form for Signin", () => {
    expect(page.find("form")).toHaveLength(1);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const page = renderer.create(<Signin />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
