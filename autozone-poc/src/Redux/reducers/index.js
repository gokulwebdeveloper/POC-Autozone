import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
import {productFilterReducer} from './productFilterReducer';
import {cartReducer} from './cartReducer';

import { productSortReducer } from './productSortReducer';
const rootReducer = combineReducers({
    productData: productReducer,
    productDetail:productDetailReducer,
    productFilterData: productFilterReducer,
    cartData: cartReducer,
    sortedProductData: productSortReducer
})

export default rootReducer;