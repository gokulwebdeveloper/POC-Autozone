import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure, mount, shallow } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import ProductList from './ProductList';
import { Provider } from 'react-redux';
import store from '../../../Redux/store'; 

configure({ adapter: new Adapter() });

describe('Product List page testing', () => {
    let wrapper = null;
    beforeAll(() => {
        
        wrapper = shallow(<Provider store={store}><ProductList /></Provider>);
    })

   

    it('should render a proper product data', done => {
        const mockData = {
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
        
        const component = mount(<Provider store={store}><ProductList mockData={mockData} /></Provider>);
        setImmediate(() => {
          component.update();
          done();
        });
      });

    //SnapShot Match test
  it("SnapShot Match", () => {
    const productListComponent = renderer.create(<Provider store={store}><ProductList /></Provider>).toJSON();
    expect(productListComponent).toMatchSnapshot();
  });

})