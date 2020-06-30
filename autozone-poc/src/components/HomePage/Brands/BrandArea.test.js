import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../../matchMedia.mock' // Must be imported before the tested file
import BrandArea from './BrandArea';

configure({ adapter: new Adapter() });

describe('BrandArea page testing', () => {
  let wrapper;
  //mount component for testing
  beforeEach(() => {
    wrapper = mount(<BrandArea />);
  })
  //Cleanup after test execution
  afterEach(() => {
    wrapper.unmount();
  });
  test('renders the img tag called', () => {
    const imgTag = wrapper.find("img");
    expect(imgTag).toHaveLength(6);
  });
  //SnapShot Match test
  it("SnapShot Match", () => {
    const brandAreaComponent = renderer.create(<BrandArea />).toJSON();
    expect(brandAreaComponent).toMatchSnapshot();
  });
})