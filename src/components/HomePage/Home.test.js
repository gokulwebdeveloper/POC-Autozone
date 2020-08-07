import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock' // Must be imported before the tested file
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import ProductDetails from '../ProductDetails/ProductDetails';
import { BrowserRouter as Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
}); 

const mockData = {
    "id": 1,
    "product_image": [
        "../../../utlis/img/azo-product-img/product-1/1.jpg",
        "../../../utlis/img/azo-product-img/product-1/2.jpg",
        "../../../utlis/img/azo-product-img/product-1/3.jpg",
        "../../../utlis/img/azo-product-img/product-1/4.jpg"
    ],
    "product_name": "Duralast Brake Rotor 42251DL",
    "product_brand": "Duralast",
    "original_price": "75.00",
    "offer_price": "55.00",
    "offer_badge": "-30%",
    "category": "Brakes and Traction Control",
    "sub_category": "Brake Rotor",
    "product_desc": "Rotor only, *Coated on hat and edge for rust prevention *Replace in pairs for best performance",
    "product_instock": true,
    "orderByMessage": "Order Before 9:00 PM Jul 01 for Jul 02 delivery",
    "warrantyType": "AutoZone",
    "warranty": "2 Year Warranty",
    "rating": 4.5,
    "isFavourite": false
  };

describe('Home page testing', () => {
    const wrapper = mount(
        <Provider store={store}>
            <Route path="/single-product-details/:id" component={ProductDetails}>
            <Home productData={mockData} />
            </Route>
        </Provider>);
        it("Renders without crashing", ()=> {
            mount(<Provider store={store}>
                <Route path="/single-product-details/:id" component={ProductDetails}>
                <Home productData={mockData} />
                </Route>
            </Provider>);
        });
    
    //test if home component exists
    it("Home Exists", () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    // length of h2 tags
    test('renders the h2 tag called', () => {
        const h2 = wrapper.find("h2");
        expect(h2).toHaveLength(1);
    });

    it("render the SimpleSlider", () => {
        const simpleSliderTag =  wrapper.find('SimpleSlider');
        expect(simpleSliderTag).toHaveLength(1);
    });


    //if it has 1 Button componenent
    it("finding the Button componenent length", () => {
        expect(wrapper.find("Button")).toHaveLength(2);
    });
})