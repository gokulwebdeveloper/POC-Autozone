import React from 'react';
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import '../../matchMedia.mock';
import SimpleSlider from './SimpleSlider';


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

describe("Render simple slider Component", () => {
    const wrapper = mount(
    <Provider store={store}>
        <SimpleSlider currentProduct={mockData} />
    </Provider>);
    it("Renders without crashing", ()=> {
        mount(<Provider store={store}>
            <SimpleSlider currentProduct={mockData} />
        </Provider>);
    });
  
});

afterEach(() => {
    container.remove();
    container = null;
  });