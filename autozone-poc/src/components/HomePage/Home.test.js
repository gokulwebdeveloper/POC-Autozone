import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock' // Must be imported before the tested file
import Home from './Home';

configure({ adapter: new Adapter() });

describe('Home page testing', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<Home />);
  })
    test('renders the h2 tag called', () => {
        const h2 = wrapper.find("h2");
        expect(h2).toHaveLength(3);
    });

    test('renders the h6 tag called', () => {
        const h6 = wrapper.find("h6");
        expect(h6).toHaveLength(18);
    });
    
})
