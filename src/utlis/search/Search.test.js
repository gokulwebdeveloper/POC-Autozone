import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../../Redux/store';

configure({ adapter: new Adapter() });

describe('Search testing', () => {
    let wrapper = shallow(<Provider store={store}><Search /></Provider>);

    it("SnapShot Match for Search component", () => {
        const page = renderer.create(<Provider store={store}><Search /></Provider>).toJSON();
        expect(page).toMatchSnapshot();
    })

    it("displays search bar", () => {
        const inputType = wrapper.find("input");
        expect(inputType).toBeTruthy();
    });

});