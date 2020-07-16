import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Brand from './Brand';
import store from '../../../Redux/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });


describe('Brand testing', () => {
  var brandList = ["Asos",
    "Mango",
    "River Island",
    "Topshop",
    "Zara"];

    beforeEach(() => {
      
    });

  let wrapper = mount(<Provider store={store}><Brand brandList={brandList} /></Provider>);

  it("SnapShot Match for Brand component", () => {
    const page = renderer.create(<Provider store={store}><Brand brandList={brandList} /></Provider>).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("displays brand list", () => {
    expect(wrapper.find("BrandItem").first().text()).toBe("Asos ");
    expect(wrapper.find("BrandItem").at(1).text()).toBe("Mango ");
    expect(wrapper.find("BrandItem").at(2).text()).toBe("River Island ");
    expect(wrapper.find("BrandItem").at(3).text()).toBe("Topshop ");
    expect(wrapper.find("BrandItem").at(4).text()).toBe("Zara ");
  });

  it("displays brand title", () => {
    expect(wrapper.find("p").first().text()).toBe("Brands");

  });

  it("li value in BrandItem", () => {
    expect(wrapper.find("li").first().text()).toBe("Asos ");
    expect(wrapper.find("li").at(1).text()).toBe("Mango ");
    expect(wrapper.find("li").at(2).text()).toBe("River Island ");
    expect(wrapper.find("li").at(3).text()).toBe("Topshop ");
    expect(wrapper.find("li").at(4).text()).toBe("Zara ");
  });

  it("BrandItem click action", () => {
    wrapper.find("li").first().simulate('click');
    console.log("store data : " + JSON.stringify(store.getState()) ) 
  });

})