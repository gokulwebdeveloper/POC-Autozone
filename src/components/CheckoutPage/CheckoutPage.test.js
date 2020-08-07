import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import CheckoutPage from "./CheckoutPage";
import { Provider } from 'react-redux';
import store from '../../Redux/store';
import { BrowserRouter as  Route} from "react-router-dom";

const mockCart = {
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
  "quantity": 1,
  "isFavourite": false
};

let page;
//mount component for testing
beforeEach(() => {
  // page = mount(<CheckoutPage />);
  page = mount(
    <Provider store={store}>
        <Route path="/checkout" component={CheckoutPage}>
        <CheckoutPage cartData={mockCart} />
        </Route>
    </Provider>);
});

//Cleanup after test execution
afterEach(() => {
  page.unmount();
});

describe("test CheckoutPage", () => {
  //test if CheckoutPage component exists
  it("CheckoutPage Exists", () => {
    expect(page.exists()).toBeTruthy();
  });

  //if it has title as "Billing address" and "Your Order"
  it('has titles as "Billing Address" and "Your Order"', () => {
    expect(page.find("h5").first().text()).toBe("Billing Address");
    expect(page.find("h5").last().text()).toBe("Your Order");
  });

  //if it has BreadcrumbArea componenent
  it("has BreadcrumbArea componenent", () => {
    expect(page.find("BreadcrumbArea")).toHaveLength(1);
  });

  //if it has 1 Button componenent
  it("has 1 Button componenent", () => {
    expect(page.find("Button")).toHaveLength(1);
  });

  //if Button has text Place Order
  it("Button has text Place Order", () => {
    expect(page.find("Button").text()).toBe("Place Order");
  });

  //if it has 1 form for order info
  it("has 1 form for order info", () => {
    expect(page.find("form")).toHaveLength(1);
  });

  //SnapShot Match test
  it("SnapShot Match", () => {
    const page = renderer.create(<Provider store={store}>
      <Route path="/checkout" component={CheckoutPage}>
      <CheckoutPage cartData={mockCart} />
      </Route>
  </Provider>).toJSON();
    expect(page).toMatchSnapshot();
  });
});
