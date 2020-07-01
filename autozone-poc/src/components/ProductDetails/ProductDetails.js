import React from 'react';
import jsonData from '../Shops/data/products.json';
import DetailsSection from './DetailsSection';
import DummyDetails from './DummyDetails';

const queryString = require('query-string');

const ProductDetails = () => {
    var parsed = queryString.parse(location.search);
    //console.log(parsed.id); // replace param with your own 

    if(jsonData && parsed)
    {
        const prodId = parsed.id;
        var currentProduct;

        var element = jsonData.filter((w)=>w.id == prodId);
        if(element)
            currentProduct = element[0];
        else
            return <DummyDetails/>

        if(currentProduct)
            return <DetailsSection currentProduct={currentProduct} />
        else
            return <DummyDetails/>
    }
    else
       return <DummyDetails/>
};

export default ProductDetails;