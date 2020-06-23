import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import CheckoutPage from './CheckoutPage';

let page;
//mount component for testing
beforeEach(()=>{
    page = mount(<CheckoutPage />);
});

//Cleanup after test execution
afterEach(()=>{
    page.unmount();
});

describe("test CheckoutPage", ()=>{
    //test if CheckoutPage component exists
    it('CheckoutPage Exists', ()=>{
        expect(page.exists()).toBeTruthy();
    });

    //if it has title as "Billing address" and "Your Order"
    it('has titles as "Billing Address" and "Your Order"', ()=>{
        expect(page.find('h5').first().text()).toBe("Billing Address");
        expect(page.find('h5').last().text()).toBe("Your Order");
    });

    //if it has BreadcrumbArea componenent
    it('has BreadcrumbArea componenent', ()=>{
        expect(page.find('BreadcrumbArea')).toHaveLength(1);
    });

    //if it has 1 Button componenent
    it('has 1 Button componenent', ()=>{
        expect(page.find('Button')).toHaveLength(1);
    });

    //if Button has text Place Order
    it('Button has text Place Order', ()=>{
        expect(page.find('Button').text()).toBe("Place Order");
    });

    //if it has 1 form for order info
    it('has 1 form for order info', ()=>{
        expect(page.find('form')).toHaveLength(1);
    });

     //SnapShot Match test
     it("SnapShot Match", ()=>{
        const page = renderer.create(<CheckoutPage />).toJSON();
        expect(page).toMatchSnapshot()
    });
});