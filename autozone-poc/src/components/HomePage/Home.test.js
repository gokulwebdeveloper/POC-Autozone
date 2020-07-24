import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock' // Must be imported before the tested file
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../Redux/store';

configure({ adapter: new Adapter() });
let wrapper;
describe('Home page testing', () => {
    //mount component for testing
    beforeEach(() => {
    })

    let wrapper = mount(<Provider store={store}><Home /></Provider>);
    //test if home component exists
    it("Home Exists", () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    // length of h2 tags
    test('renders the h2 tag called', () => {
        const h2 = wrapper.find("h2");
        expect(h2).toHaveLength(3);
    });
    // length of h6 tags
    test('renders the h6 tag called', () => {
        const h6 = wrapper.find("h6");
        expect(h6).toHaveLength(18);
    });

    //if it has TopCatagoryArea componenent
    it("render the TopCatagoryArea componenent", () => {
        expect(wrapper.find("TopCatagoryArea")).toHaveLength(3);
    });

    //if it has SimpleSlider componenent
    it("render the SimpleSlider componenent", () => {
        expect(wrapper.find("SimpleSlider")).toHaveLength(1);
    });


    //if it has 1 Button componenent
    it("finding the Button componenent length", () => {
        expect(wrapper.find("Button")).toHaveLength(2);
    });

    //test if it have correct props
    it("should have topCatagoryAreaText as props", () => {
        expect(wrapper.prop("topCatagoryAreaText")).toEqual("Clothing");
    });

    //SnapShot Match test
    it("SnapShot Match", () => {
        const homePage = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
        expect(homePage).toMatchSnapshot();
    });
})