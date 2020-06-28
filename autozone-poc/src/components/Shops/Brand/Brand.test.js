import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React, { Component } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Brand from './Brand';

configure({ adapter: new Adapter() });


describe('Brand testing', () => {
  var brandList = ["Asos",
    "Mango",
    "River Island",
    "Topshop",
    "Zara"];


  let wrapper;
  wrapper = mount(<Brand brandList={brandList} />);

  it("SnapShot Match for Brand component", () => {
    const page = renderer.create(<Brand brandList={brandList} />).toJSON();
    expect(page).toMatchSnapshot();
  });

})