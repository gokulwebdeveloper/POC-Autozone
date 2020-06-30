import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import TopCatagoryArea from './TopCatagoryArea';

configure({ adapter: new Adapter() });

describe('TopCatagoryArea page testing', () => {
  let wrapper;
  //mount component for testing
  beforeEach(() => {
    wrapper = mount(<TopCatagoryArea />);
  })

  //Cleanup after test execution
  afterEach(() => {
    wrapper.unmount();
  })
  //test if TopCatagoryArea component exists
  it("TopCatagoryArea Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  // Render the a tag
  test('renders the a tag', () => {
    const a = wrapper.find("a");
    expect(a).toHaveLength(1);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const topCatagoryAreaComponent = renderer.create(<TopCatagoryArea />).toJSON();
    expect(topCatagoryAreaComponent).toMatchSnapshot();
  });
})