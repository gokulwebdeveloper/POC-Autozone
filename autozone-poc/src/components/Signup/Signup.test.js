import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Signup from "./Signup";

let page;
//mount component for testing
beforeEach(() => {
  page = mount( <Signup />);
});

//Cleanup after test execution
afterEach(() => {
  page.unmount();
});

describe("test Signup Page", () => {
  //test if Signup component exists
  it("Signup page Exists", () => {
    expect(page.exists()).toBeTruthy();
  });

  //if it has title as "Sign in"
  it('has titles as "Sign Up"', () => {
    expect(page.find("h2").first().text()).toBe("Sign Up");
  });


  //if it has 1 Button componenent
  it("has 1 Button componenent", () => {
    expect(page.find("Button")).toHaveLength(1);
  });

  //if Button has text Signup
  it("Button has text Signup", () => {
    expect(page.find("Button").text()).toBe("Signup");
  });

  //if it has 1 form for Signup
  it("has 1 form for Signup", () => {
    expect(page.find("form")).toHaveLength(1);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const page = renderer.create(<Signup />);
    expect(page).toMatchSnapshot();
  });
});
