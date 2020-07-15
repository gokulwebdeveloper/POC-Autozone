import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import TopCatagoryArea from './TopCatagoryArea';
import { Provider } from 'react-redux';
import store from '../../Redux/store';

configure({ adapter: new Adapter() });

describe('TopCatagoryArea page testing', () => {
  let wrapper;
  //mount component for testing
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><TopCatagoryArea /></Provider>);
  })

  //test if TopCatagoryArea component exists
  it("TopCatagoryArea Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });


  //SnapShot Match test
  it("SnapShot Match", () => {
    const topCatagoryAreaComponent = renderer.create(<Provider store={store}><TopCatagoryArea /></Provider>).toJSON();
    expect(topCatagoryAreaComponent).toMatchSnapshot();
  });
})