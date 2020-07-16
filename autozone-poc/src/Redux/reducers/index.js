import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
import {productFilterReducer} from './productFilterReducer';
import {priceRangeFilterReducer} from './priceRangeFilterReducer';
import {cartReducer} from './cartReducer';
import {searchReducer} from './searchReducer';
import { productSortReducer } from './productSortReducer';

const rootReducer = combineReducers({
    productData: productReducer,
    productDetail:productDetailReducer,
    productFilterData: productFilterReducer,
    cartData: cartReducer,
    sortedProductData: productSortReducer,
    productFilterByRangeData : priceRangeFilterReducer,
    searchResultsData: searchReducer
})

export default rootReducer;