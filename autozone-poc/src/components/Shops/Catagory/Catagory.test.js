import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catagory from './Catagory';
import store from '../../../Redux/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });


describe('Catagory testing', () => {
	var categoryList = [{
		"title": "clothing",
		"items": [
			"All",
			"Bodysuits",
			"Dresses",
			"Hoodies Sweats",
			"Jackets Coats",
			"Jeans",
			"Pants Leggings",
			"Rompers Jumpsuits",
			"Shirts Blouses",
			"Shirts",
			"Sweaters &amp; Knits"
		]
	}
	];


	let wrapper;
	wrapper = mount(<Provider store={store}><Catagory data={categoryList[0]}  id="clothing" /></Provider>);

	it("SnapShot Match for Catagory component", () => {
		const page = renderer.create(<Provider store={store}><Catagory data={categoryList[0]}
			 id="clothing" /></Provider>).toJSON();
		expect(page).toMatchSnapshot();
	});

	test('renders ', () => {
		expect(wrapper.find('li').at(2).text()).toBe('Bodysuits');
	});

	test('renders ListItem ', () => {
		expect(wrapper.find("ListItem").prop('title')).toBe('clothing');
		expect(wrapper.find("ListItem").prop('items')).toBe(categoryList[0].items);
	});

})