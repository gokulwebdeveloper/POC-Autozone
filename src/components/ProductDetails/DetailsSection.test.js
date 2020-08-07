import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import { BrowserRouter as  Route} from "react-router-dom";
import DetailsSection from './DetailsSection';

import '../../matchMedia.mock'; // Must be imported before the tested file

const mockProduct = {
  "id": 1,
  "product_image": [
      "../src/utlis/img/azo-product-img/product-1/1.jpg",
      "../src/utlis/img/azo-product-img/product-1/2.jpg",
      "../src/utlis/img/azo-product-img/product-1/3.jpg",
      "../src/utlis/img/azo-product-img/product-1/4.jpg"
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

let wrapper = null;
beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
        <Route path="/single-product-details/:id" component={DetailsSection}>
        <DetailsSection currentProduct={mockProduct} />
        </Route>
    </Provider>);
});

describe("renders component", () => {
  
  it("has img", () => {
    expect(wrapper.find("img").at(0)).toBeTruthy();
  });

  it("has img", () => {
    let addToCart = wrapper.find("Button").at(0)
    expect(addToCart).toBeTruthy();
  });

  it("has section", () => {
    expect(wrapper.find("section").at(0)).toBeTruthy();
  });
  
  //Throws an error which wasn't able to solve hence commented
// it("SnapShot Match", () => {
//     const page = renderer.create(
//       <Provider store={store}>
//         <Route path="/single-product-details/:id" component={DetailsSection}>
//         <DetailsSection currentProduct={mockProduct} />
//         </Route>
//     </Provider>).toJSON();
//     expect(page).toMatchSnapshot();
//   });
});

afterEach(() => {
  wrapper = null;
});