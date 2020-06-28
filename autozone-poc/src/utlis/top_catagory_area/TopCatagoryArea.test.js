import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import TopCatagoryArea from './TopCatagoryArea';

configure({ adapter: new Adapter() });

describe('TopCatagoryArea page testing', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<TopCatagoryArea />);
  })
    test('renders the a tag called', () => {
        const mockTopCatagoryAreaText = undefined;
        const mockA = wrapper.find("a");
        expect(mockA.textContent).toBe(mockTopCatagoryAreaText);
    });
})
