import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../matchMedia.mock';
import SimpleSlider from './SimpleSlider';
import store from '../../Redux/store';
import { Provider } from 'react-redux';


configure({ adapter: new Adapter() });


describe('SimpleSlider testing', () => {
    let productList = {
        id: 1,
        product_image: [
            "../src/utlis/img/azo-product-img/product-1/1.jpg",
            "../src/utlis/img/azo-product-img/product-1/2.jpg",
            "../src/utlis/img/azo-product-img/product-1/3.jpg",
            "../src/utlis/img/azo-product-img/product-1/4.jpg"
        ],
        product_name: "Duralast Brake Rotor 42251DL",
        product_brand: "Duralast",
        original_price: "75.00",
        offer_price: "55.00",
        offer_badge: "-35%",
        category: "Brakes and Traction Control",
        sub_category: "Brake Rotor",
        product_desc: "Rotor only, *Coated on hat and edge for rust prevention *Replace in pairs for best performance",
        product_instock: true,
        orderByMessage: "Order Before 9:00 PM Jul 01 for Jul 02 delivery",
        warrantyType: "AutoZone",
        warranty: "2 Year Warranty",
        rating: 4.2,
        isFavourite: false
      }
    beforeEach(() => {
      
    });

  let wrapper = mount(<Provider store={store}><SimpleSlider productList={productList}/></Provider>);

  it("SnapShot Match for SimpleSlider component", () => {
    const page = renderer.create(<Provider store={store}><SimpleSlider productList={productList} /></Provider>).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("displays brand title", () => {
    expect(wrapper.find("p").first().text()).toBe("Brands");

  });


})