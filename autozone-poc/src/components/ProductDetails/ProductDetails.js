import React from 'react';
import DetailsSection from './DetailsSection';
import DummyDetails from './DummyDetails';
import jsonData from '../../../data/products.json';
import action from '../../Redux/actions/index';
import getproductdetail from '../../constants';
import store from '../../Redux/store/index';
import {connect, Dispatch} from "react-redux";

const queryString = require('query-string');

const ProductDetails = (props) => {
    var parsed = queryString.parse(location.search);
    //console.log(parsed.id); // replace param with your own 

    if(jsonData && parsed)
    {
        const prodId = parsed.id;
        var currentProduct;// = store.dispatch(getproductdetail(prodId));
        //console.log(currentProduct);

        // var test = props.getproductdetail(prodId);
        // console.log(test);
        
        var element =  jsonData.filter((w)=>w.id == prodId);
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