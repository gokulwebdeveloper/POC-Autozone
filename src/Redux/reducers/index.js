import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
import {productFilterReducer} from './productFilterReducer';
import {priceRangeFilterReducer} from './priceRangeFilterReducer';
import {cartReducer} from './cartReducer';
import {searchReducer} from './searchReducer';
import { productSortReducer } from './productSortReducer';
import {shopMenuClickReducer} from './shopMenuClickReducer'

const rootReducer = combineReducers({
    productData: productReducer,
    productDetail:productDetailReducer,
    productFilterData: productFilterReducer,
    cartData: cartReducer,
    sortedProductData: productSortReducer,
    productFilterByRangeData : priceRangeFilterReducer,
    searchResultsData: searchReducer,
    shopMenuClickStatus: shopMenuClickReducer
})

export default rootReducer;