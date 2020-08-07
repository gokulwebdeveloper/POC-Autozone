import {getproducts, getproductdetail, addtocart} from '../../constants';
import {productReducer} from './productReducer';
import {productDetailReducer} from './productDetailReducer';
import {cartReducer} from './cartReducer';

describe('reducers',()=>{

    it('Product Reducer',()=>{
        expect(
            productReducer([],{
                type: getproducts,
                payload:[]
            })
            ).toEqual([])
    })

    it('Product Detail',()=>{
        expect(
            productDetailReducer(null,{
                type: getproductdetail,
                payload:null
            })
            ).toEqual(null)
    })
})