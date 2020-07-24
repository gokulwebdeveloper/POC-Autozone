import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock'
import SimpleSlider from './SimpleSlider';
import { Provider } from 'react-redux';
import store from '../../Redux/store';

configure({ adapter: new Adapter() });

describe('SimpleSlider page testing', () => {
    //mount component for testing
    beforeEach(() => {
    });

    let wrapper = mount(<Provider store={store}><SimpleSlider /></Provider>);
    //test if simpleSlider component exists
    it("SimpleSlider Exists", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    // Render the a tag
    test('renders the SlickSlider tag', () => {
        const slickSlider = wrapper.find("SlickSlider");
        expect(slickSlider).toHaveLength(0);
    });

});