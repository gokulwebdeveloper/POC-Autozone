import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './ListItem';
import store from '../../../Redux/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });


describe('Brand testing', () => {
    var categoryWithSubmenu = {
        "title": "Brakes and Traction Control",
        "items": [
            "All",
            "Brake Rotor",
            "Brake Power Booster",
            "Hoodies Sweats",
            "Brake Shoes Rear",
            "Wheel Cylinder Rear"
        ]
    };

    beforeEach(() => {

    });

    let wrapper = mount(<Provider store={store}><ListItem items={categoryWithSubmenu.items} title={categoryWithSubmenu.title} /></Provider>);

    it("SnapShot Match for ListItem component", () => {
        const page = renderer.create(<Provider store={store}><ListItem items={categoryWithSubmenu.items} title={categoryWithSubmenu.title} /></Provider>).toJSON();
        expect(page).toMatchSnapshot();
    });

    it("li value in ListItem", () => {
        expect(wrapper.find("li").first().text()).toBe("All");
        expect(wrapper.find("li").at(1).text()).toBe("Brake Rotor");
        expect(wrapper.find("li").at(2).text()).toBe("Brake Power Booster");
        expect(wrapper.find("li").at(3).text()).toBe("Hoodies Sweats")
            ;
        expect(wrapper.find("li").at(4).text()).toBe("Brake Shoes Rear");
    });

})