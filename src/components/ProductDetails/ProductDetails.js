import React from 'react';
import DetailsSection from './DetailsSection';
import ProductNotFound from './ProductNotFound';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getProductDetail} from '../../Redux/actions';

const ProductDetails = (props) => {
    const prodId = props.match?props.match.params.id:null;

    if(prodId){
        if(props.productDetail)
            return <DetailsSection currentProduct={props.productDetail.data[0]} />
        else
            return <ProductNotFound/>
    }
    else
       return <ProductNotFound/>
};

ProductDetails.propTypes = {
    props: PropTypes.object,
}

const mapStateToProps = ({productDetail}) =>{
    return {productDetail};
}

const mapDispatchToProps = {getProductDetail}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);