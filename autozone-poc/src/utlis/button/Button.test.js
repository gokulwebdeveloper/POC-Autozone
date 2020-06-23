import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
//import {unmountComponentAtNode} from 'react-dom';
import Button from './Button';

let btn=null;

//mount component for testing
beforeEach(()=>{
    btn = mount(<Button btnText="button" />);
});

//Cleanup after test execution
afterEach(()=>{
    btn.unmount();
});


describe("test Button component", ()=>{
    //test if component render correctly
    it("component render correctly", ()=>{
        expect(btn.exists()).toBeTruthy();
    });

     //test if it should have one button for button text
     it("should have one button tag", ()=>{
        expect(btn.find('button')).toHaveLength(1);
    });

    //test if it have correct props
    it("should have btnText as props", ()=>{
        expect(btn.prop('btnText')).toEqual('button');
    });

    //SnapShot Match test
    it("SnapShot Match", ()=>{
        const btn = renderer.create(<Button />).toJSON();
        expect(btn).toMatchSnapshot()
    });
});