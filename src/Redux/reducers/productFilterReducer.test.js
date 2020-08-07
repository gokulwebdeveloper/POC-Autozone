import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productFromJson from '../../../data/products.json'
import {productFilterReducer} from '../../Redux/reducers/productFilterReducer'
import {filterproducts} from '../../constants';

configure({ adapter: new Adapter() });


describe('productFilterReducer testing', () => {

  
  it("productFilterReducer call", () => {
    let action = {
      type:filterproducts, 
      payload:productFromJson
    }

    let expected = {data : productFromJson}
    expect(productFilterReducer({}, action)).toEqual(expected);
  });

})