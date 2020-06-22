import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React, { Component } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Catagory from './Catagory';

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
    wrapper = mount( <Catagory data={categoryList[0]} datatarget="#clothing" id="clothing"/>);

    it("SnapShot Match for Catagory component", () => {
        const page = renderer.create( <Catagory data={categoryList[0]} datatarget="#clothing" id="clothing"/>).toJSON();
        expect(page).toMatchSnapshot();
      });

	  test('renders ', () => {
        expect(wrapper.find('li').at(2).text()).toBe('Bodysuits');
    });

  })