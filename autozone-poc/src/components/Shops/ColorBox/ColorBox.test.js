import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React, { Component } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import ColorBox from './ColorBox';

configure({ adapter: new Adapter() });


describe('Brand testing', () => {
    var colors = [
		"color1",
		"color2",
		"color3",
		"color4",
		"color5",
		"color6",
		"color7",
		"color8",
		"color9",
		"color10"
	];


    let wrapper;
    wrapper = shallow(<ColorBox colors={colors}/>);

    it("SnapShot Match for Brand component", () => {
        const page = renderer.create(<ColorBox colors={colors}/>).toJSON();
        expect(page).toMatchSnapshot();
      });

   

  })