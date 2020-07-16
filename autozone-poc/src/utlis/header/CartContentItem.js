import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {removeFromCart} from '../../Redux/actions';

const CartContentItem = (props) =>{
    const detailsPath = "/single-product-details/"+props.data.id;
    const imagePath = props.data.product_image[0];

function removeProduct()
{
    const index = props.cartData.findIndex(obj => obj.id === props.data.id);
    //TODO:
    //props.dispatchRemoveFromCart(index);
}

    return(
<div className="single-cart-item">
                    <Link to={detailsPath} className="product-image" >
                        <img src={imagePath} className="cart-thumb" alt=""/>
                        {/* <!-- Cart Item Desc --> */}
                        <div className="cart-item-desc">
                            <span className="product-remove" onClick={removeProduct}>
                              <i className="fa fa-close" aria-hidden="true"></i>
                            </span>
                            <span className="badge">{props.data.product_brand}</span>
                            <h6>{props.data.product_name}</h6>
                            <p className="price">Product Price: $ {props.data.original_price}</p>
                            <p className="quantity">Quantity: {props.data.quantity}</p>
                            {(props.data.offer_badge!='New')?<p className="quantity">Discount: {props.data.offer_badge}</p>:<p className="quantity">New Item</p>}
                            <p className="price">Product Price: $ {props.data.offer_price}</p>
                            <p className="cartprice">$ {props.data.price}</p>
                        </div>
                    </Link>
                </div>
    );
};

CartContentItem.propTypes = {
    props: PropTypes.object,
}

const mapStateToProps = cartData => {
    return cartData;
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
        dispatchRemoveFromCart: index => dispatch(removeFromCart(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContentItem);