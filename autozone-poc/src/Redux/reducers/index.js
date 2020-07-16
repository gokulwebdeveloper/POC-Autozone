import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({
    productData: productReducer,
    productDetail:productDetailReducer,
    cartData: cartReducer
})

export default rootReducer;