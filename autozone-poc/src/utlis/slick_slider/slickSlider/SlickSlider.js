import React from 'react';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import { connect } from 'react-redux';
import { addToCart, getProductDetail } from '../../../Redux/actions';

const SlickSlider = props => {
    const detailsPath = "/single-product-details/"+props.currentProduct.id;
    function addToCart()
    {
        let qty = 1;
        let price = parseFloat(props.currentProduct.offer_price);
        let total = parseFloat(qty * price);
        addKeyValue(props.currentProduct,"quantity", qty);
        addKeyValue(props.currentProduct,"price", total);
        props.dispatchAddToCart(props.currentProduct);
    }

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
    
    return (
        <div>
            <div className="single-product-wrapper">
                <div className="product-img">
                    {
                        props.currentProduct && props.currentProduct.product_image && props.currentProduct.product_image.length > 2 ? 
                        <div>
                           <img src={props.currentProduct.product_image[0]} alt="" />
                           <img className="hover-img" src={props.currentProduct.product_image[1]} alt="" />
                        </div>
                         : 
                        <div>
                            <img src={props.currentProduct.product_image[0]} alt="" />
                            <img className="hover-img" src={props.currentProduct.product_image[0]} alt="" />
                         </div>
                    }

                    <div className="product-badge offer-badge">
                        <span>{props.currentProduct.offer_badge}</span>
                    </div>
                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>
                <div className="product-description">
                    <span>{props.currentProduct.product_brand}</span>
                    <Link to={detailsPath} onClick={()=>props.getProductDetail(props.currentProduct.id)}>
                        <h6 data-tip={props.currentProduct.product_name} data-background-color="#989898">
                            {props.currentProduct.product_name}</h6>
                        <ReactTooltip />
                    </Link>
                    <p className="product-price">${props.currentProduct.offer_price}</p>
                    <div className="hover-content">
                        <div className="add-to-cart-btn">
                        <Button btnText="Add to Cart" onClick={addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatchAddToCart: product => dispatch(addToCart(product)),
        getProductDetail: id => dispatch(getProductDetail(id))

    }
} 

export default connect(null, mapDispatchToProps)(SlickSlider);