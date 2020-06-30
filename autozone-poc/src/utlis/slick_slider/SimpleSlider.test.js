import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import SimpleSlider from './SimpleSlider';

configure({ adapter: new Adapter() });

describe('SimpleSlider page testing', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<SimpleSlider />);
  })
    test('renders the span tag called', () => {
        const span = wrapper.find("span");
        expect(span).toHaveLength(11);
    });

    test('renders the a tag called', () => {
        const a = wrapper.find("a");
        expect(a).toHaveLength(18);
    });
});