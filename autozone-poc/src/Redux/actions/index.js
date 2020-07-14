import {
    getproducts, setproducts, getproductdetail, setproductdetail, addtocart, removefromcart,
    emptycart, filterproducts, sortproducts, filterByRange, searchproducts
} from '../../constants';

export const getProducts = () => {
    return (
        { type: getproducts }
    )
}

export const setProducts = (data) => {
    return (
        { type: setproducts, payload: data }
    )
}

export const getProductDetail = (productId) => {
    return (
        { type: getproductdetail, payload: productId }
    )
}

export const setProductDetail = (data) => {

    return (
        { type: setproductdetail, payload: data }
    )
}


export const setFilterProducts = (productData) => {
    return (
        { type: filterproducts, payload: productData }
    )
}

export const filterProducts = (productData, filter, filterType) => {
    if (productData == undefined || productData.data == undefined) {
        return (
            { type: filterproducts, payload: {} }

        )
    } else {
        const filterProductData = productData.data.filter((item) => {
            if (filterType == 'Brands') {
                if (item.product_brand.toLowerCase().includes(filter.toLowerCase())) {
                    return item
                }
            } else if (filter == 'All') {
                if (item.category.toLowerCase().includes(filterType.toLowerCase())) {
                    return item
                }
            } else {
                if (item.sub_category.toLowerCase().includes(filter.toLowerCase())) {
                    return item
                }
            }

        })
        
        return (
            { type: filterproducts, payload: filterProductData }

        )
    }

}

export const filterProductsByRange = (productData, minimum, maximum) => {
    const filterProductByRange = productData.data.filter((item) => {
        if (item.offer_price >= minimum && item.offer_price <= maximum)
            return item;
    })
    return (
        {
            type: filterByRange, payload: {
                data: filterProductByRange,
                min: minimum,
                max: maximum
            }
        }
    )
}

export const addToCart = (data) => {
    return (
        { type: addtocart, payload: data }
    )
}

export const removeFromCart = (index) => {
    
    return (
        { type: removefromcart, payload: index }
    )
}

export const emptyCartData = () => {
    return (
        { type: emptycart }
    )
}

export const sortProducts = (productData, sortType) => {
    if(productData == undefined || productData.data == undefined) {
        return ({
            type: sortproducts, payload: { sortType, undefined }
        })
    }

    let sortedProductData;
    switch (sortType) {
        case 'highest-rated':
            sortedProductData = [].concat(productData.data).sort((a, b) => b.rating - a.rating);
            break;
        case 'hightolow':
            sortedProductData = [].concat(productData.data).sort((a, b) => b.offer_price - a.offer_price);
            break;
        case 'lowtohigh':
            sortedProductData = [].concat(productData.data).sort((a, b) => a.offer_price - b.offer_price);
            break;
    }

    return ({
        type: sortproducts, payload: { sortType, sortedProductData }
    })
}

export const searchProduct = (productData, searchValue) => {
    if (productData == undefined || productData.data == undefined) {
        return (
            { type: searchproducts, payload: {} }

        )
    } else { 
        const searchResultsData = productData.data.filter((item) => {
            if(item.product_name.toLowerCase().includes(searchValue) 
                || item.product_brand.toLowerCase().includes(searchValue)
                || item.category.toLowerCase().includes(searchValue)
                || item.sub_category.toLowerCase().includes(searchValue) ){
                   return item; 
            }
        })
        return ({
            type: searchproducts, payload: searchResultsData
        })
    }
    
} 

