import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import InputWithLabel from './InputWithLabel';

describe("test InputWithLabel component", ()=>{
    //test if component render correctly
    it("component render correctly", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="text" isRequired={true} />);
        expect(input.exists()).toBeTruthy();
        input.unmount();
    });

     //test if it should have 1 input and 1 label
     it("should have 1 input and 1 label", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="text" isRequired={true} />);
        expect(input.find('input')).toHaveLength(1);
        expect(input.find('label')).toHaveLength(1);
        input.unmount();
    });

    //test if isRequired true span is added for asterik
    it("isRequired true then span is added for asterik", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="text" isRequired={true} />);
        expect(input.find('span')).toHaveLength(1);
        input.unmount();
    });

    //test if label text set propely
    it("label text set propely", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="text" isRequired={true} />);
        expect(input.find('label').text()).toBe('name *');
        input.unmount();
    });

    //test if props set propely in case of text input type
    it("props set propely in case of text input type", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="text" isRequired={true} />);
        expect(input.prop('labelText')).toEqual('name');
        expect(input.prop('inputId')).toEqual('idtext');
        expect(input.prop('inputType')).toEqual('text');
        expect(input.prop('isRequired')).toBeTruthy();
        input.unmount();
    });

    //test if props set propely in case of email
    it("props set propely in case of email", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="email" isRequired={false} />);
        expect(input.prop('labelText')).toEqual('name');
        expect(input.prop('inputId')).toEqual('idtext');
        expect(input.prop('inputType')).toEqual('email');
        expect(input.prop('isRequired')).toBe(false);
        input.unmount();
    });

    //test if props and additional props set propely in case of checkbox
    it("props set propely in case of email", ()=>{
        const input = mount(<InputWithLabel labelText="name" inputId="idtext" inputType="checkbox" isRequired={false} name="checkboxName" />);
        expect(input.prop('labelText')).toEqual('name');
        expect(input.prop('inputId')).toEqual('idtext');
        expect(input.prop('inputType')).toEqual('checkbox');
        expect(input.prop('isRequired')).toBe(false);
        
        //test for additional prop added
        expect(input.prop('name')).toBe('checkboxName');
        input.unmount();
    });

    //SnapShot Match test
    it("SnapShot Match", ()=>{
        const input = renderer.create(<InputWithLabel />).toJSON();
        expect(input).toMatchSnapshot()
    });
});