import React from 'react';
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Product from './Product';
import { Provider } from 'react-redux';
import store from '../../../Redux/store';
import { BrowserRouter as  Route} from "react-router-dom";
import ProductDetails from '../../ProductDetails/ProductDetails';

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

describe("Render Product Component", () => {
    const wrapper = mount(
    <Provider store={store}>
        <Route path="/single-product-details/:id" component={ProductDetails}>
        <Product productData={mockData} />
        </Route>
    </Provider>);
    it("Renders without crashing", ()=> {
        mount(<Provider store={store}>
            <Route path="/single-product-details/:id" component={ProductDetails}>
            <Product productData={mockData} />
            </Route>
        </Provider>);
    });

    it("set product image with source", () => {
        expect(wrapper.find("img").at(0)).toBeTruthy();
    });

    it("SnapShot Match", () => {
        const page = renderer.create(<Provider store={store}>
        <Route path="/single-product-details/:id" component={ProductDetails}>
            <Product productData={mockData} />
        </Route>
    </Provider>).toJSON();
        expect(page).toMatchSnapshot();
    });

    it("check offer badge", () => {
        expect(wrapper.find("span").first().text()).toBe("-30%");
    });

    it("check favorite product", () => {
        expect(wrapper.find("a").at(0)).toBeTruthy();
        
    });

    it("check product description", () => {
        expect(wrapper.find("span").at(1).text()).toBe("Duralast");
        
    });

    it("check product price", () => {
        expect(wrapper.find("span").at(2).text()).toBe("");
    });

    it("Add to cart click action", () => {
        wrapper.find("Button").first().simulate('click');
        console.log("store data : " + JSON.stringify(store.getState()) ) 
    });

    
});

afterEach(() => {
    container.remove();
    container = null;
  });