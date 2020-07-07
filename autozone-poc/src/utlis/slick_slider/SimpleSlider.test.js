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

    // Render the slider tag 
    test('renders the SlickSlider ', () => {
        const slickSlider = wrapper.find("SlickSlider");
        expect(slickSlider).toHaveLength(1);
    });

});