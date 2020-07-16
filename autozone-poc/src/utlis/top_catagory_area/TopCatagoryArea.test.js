import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import TopCatagoryArea from './TopCatagoryArea';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import { BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('TopCatagoryArea page testing', () => {
  //mount component for testing
  beforeEach(() => {
    
  });
  let wrapper = mount(<Provider store={store}><TopCatagoryArea /></Provider>);

  //SnapShot Match test
  it("SnapShot Match", () => {
    const topCatagoryAreaComponent = renderer.create(<Provider store={store}><BrowserRouter><TopCatagoryArea /></BrowserRouter></Provider>).toJSON();
    expect(topCatagoryAreaComponent).toMatchSnapshot();
  });
})