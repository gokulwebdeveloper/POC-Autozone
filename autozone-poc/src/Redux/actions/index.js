import {getproducts, setproducts, getproductdetail, setproductdetail} from '../../constants';

export const getProducts = () =>{
    return(
        {type: getproducts}
    )
}

export const setProducts = (data) =>{
    return(
        {type: setproducts, payload: data}
    )
}

export const getProductDetail = (productId) =>{
    return(
        {type: getproductdetail, payload: productId}
    )
}

export const setProductDetail = (data) =>{
    return(
        {type: setproductdetail, payload: data}
    )
}