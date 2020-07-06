import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
const rootReducer = combineReducers({
    productData: productReducer,
    productDetail:productDetailReducer
})

export default rootReducer;