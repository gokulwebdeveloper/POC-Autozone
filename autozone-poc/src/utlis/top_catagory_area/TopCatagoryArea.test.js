import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount, shallow } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import TopCatagoryArea from './TopCatagoryArea';
import store from '../../Redux/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('TopCatagoryArea page testing', () => {
  //mount component for testing
  beforeEach(() => {
  });

  let wrapper = mount(<Provider store={store}><TopCatagoryArea /></Provider>);

  //test if TopCatagoryArea component exists
  it("TopCatagoryArea Exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  // Render the a tag
  test('renders the a tag', () => {
    const link = wrapper.find("NavLink");
    expect(link).toHaveLength(0);
  });

  const wrappersnap = shallow(<Singleblog />);
  it("SnapShot Match", () => {
    expect(wrappersnap).toMatchSnapshot();
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const topCatagoryAreaComponent = renderer.create(<TopCatagoryArea />).toJSON();
    expect(topCatagoryAreaComponent).toMatchSnapshot();
  });
})