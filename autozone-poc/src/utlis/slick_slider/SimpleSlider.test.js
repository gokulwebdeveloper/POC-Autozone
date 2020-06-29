import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import SimpleSlider from './SimpleSlider';

configure({ adapter: new Adapter() });

describe('SimpleSlider page testing', () => {
    let wrapper;

    //mount component for testing
    beforeEach(() => {
        wrapper = mount(<SimpleSlider />);
    })

    //Cleanup after test execution
    afterEach(() => {
        wrapper.unmount();
    })

    //test if simpleSlider component exists
    it("SimpleSlider Exists", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    // Render the span tag 
    test('renders the span tag', () => {
        const span = wrapper.find("span");
        expect(span).toHaveLength(24);
    });
    // Render the a tag
    test('renders the a tag', () => {
        const a = wrapper.find("a");
        expect(a).toHaveLength(39);
    });

});