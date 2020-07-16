import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({ adapter: new Adapter() });

describe('Search testing', () => {
    let wrapper = mount(<Search />);

    it("SnapShot Match for Search component", () => {
        const page = renderer.create(<Search />).toJSON();
        expect(page).toMatchSnapshot();
    })

    it("displays search bar", () => {
        const inputType = wrapper.find("input");
        expect(inputType).toBeTruthy();
    });

});