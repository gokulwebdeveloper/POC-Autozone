import {getproducts, getproductdetail, setproducts, setproductdetail, addtocart, emptycart, filterproducts, sortproducts} from '../../constants';
import {getProducts, setProducts, getProductDetail, setProductDetail, addToCart, emptyCartData, filterProducts, sortProducts} from '../actions';
import productFromJson from '../../../data/products.json';


describe('actions',()=>{

    it('should return the action to get products list',()=>{
        const expectedGetProductsAction= {
            type:getproducts
        }

        expect(getProducts()).toEqual(expectedGetProductsAction);
    })

    it('should return the action to Set Products',()=>{
        const expectedSetProductsAction= {
            type:setproducts,
            payload:[]
        }

        expect(setProducts([])).toEqual(expectedSetProductsAction);
    })

    it('should return the action to set Product Detail',()=>{
        const expectedGetProductDetailAction= {
            type:getproductdetail,
            payload:null
        }

        expect(getProductDetail(null)).toEqual(expectedGetProductDetailAction);
    })

    it('should return the action to set Product Detail',()=>{
        const expectedSetProductDetailAction= {
            type:setproductdetail,
            payload:[]
        }

        expect(setProductDetail([])).toEqual(expectedSetProductDetailAction);
    })

    //Tested
    it('should return the action for empty cart',()=>{
        const expectedEmptyCartAction= {
            type:emptycart
        }

        expect(emptyCartData()).toEqual(expectedEmptyCartAction);
    })

    it('should return the action for empty cart',()=>{
        const expectedEmptyCartAction= {
            type:emptycart
        }

        expect(emptyCartData()).toEqual(expectedEmptyCartAction);
    })

    it("filterProducts test", () => {
        let param = { data: productFromJson }
        let expected = {
            payload: [],
            type: filterproducts
        }

        expect(filterProducts(param, 'Brakeware123', 'Brands')).toEqual(expected);
    });

    it('should return the action for sort products', () => {
        let param = { data: productFromJson }
        const expectedSortProductAction = {
            payload: {sortType: "sort", sortedProductData: undefined},
            type: sortproducts
        }
        expect(sortProducts(param, 'sort')).toEqual(expectedSortProductAction);
    })
})