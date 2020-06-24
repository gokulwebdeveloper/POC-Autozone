import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../matchMedia.mock' // Must be imported before the tested file
import BrandArea from './BrandArea';

configure({ adapter: new Adapter() });

describe('BrandArea page testing', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<BrandArea />);
  })
    test('renders the img tag called', () => {
        const imgTag = wrapper.find("img");
        expect(imgTag).toHaveLength(6);
    });
})
