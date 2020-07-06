import {getproducts, setproducts, getproductdetail, setproductdetail, addtocart, removefromcart, emptycart} from '../../constants';

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

export const addToCart = (data) =>{
    return(
        {type: addtocart, payload: data}
    )
}

export const removeFromCart = (index) =>{
    console.log(index);
    
    return(
        {type: removefromcart, payload: index}
    )
}

export const emptyCartData = () =>{
    return(
        {type: emptycart}
    )
}