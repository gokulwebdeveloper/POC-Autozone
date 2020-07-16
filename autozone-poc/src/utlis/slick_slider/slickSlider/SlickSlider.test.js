import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../../matchMedia.mock' // Must be imported before the tested file
import SlickSlider from './SlickSlider';
import { Provider } from 'react-redux';
import store from '../../../Redux/store';

configure({ adapter: new Adapter() });

describe(' page testing', () => {
  //mount component for testing
  beforeEach(() => {
    
  });
  let wrapper = mount(<Provider store={store}><SlickSlider /></Provider>);
  
  test('renders the img tag called', () => {
    const imgTag = wrapper.find("img");
    expect(imgTag).toHaveLength(6);
  });
  //SnapShot Match test
  it("SnapShot Match", () => {
    const SlickSliderComponent = renderer.create(<Provider store={store}><SlickSlider /></Provider>).toJSON();
    expect(SlickSliderComponent).toMatchSnapshot();
  });
})