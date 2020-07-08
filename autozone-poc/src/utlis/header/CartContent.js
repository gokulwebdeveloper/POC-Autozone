import React from "react";
import CartContentItem from "./CartContentItem";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {closeNav} from '../../utlis/header/Header';

const CartContent = (props) => {
    const cartData = props.cartData;
    
const stylehideOverflow = {
    overflow: "hidden",
    outline: "none",
  }

    if(cartData)
    {
        const total = cartData.reduce(function (sum, prc) {
            return parseFloat(sum) + parseFloat(prc.price);
        }, 0);

        return (
            <div className="cart-content d-flex" style={stylehideOverflow}>
                <div className="cart-list">
                {cartData.map((data, index) => {
                    return <CartContentItem key={index} data={data}/>
                })
                }
                </div>

                {/* Cart Summary */}
                <div className="cart-amount-summary">
                    <h2>Summary</h2>
                    <ul className="summary-table">
                        <li><span>delivery:</span> <span>Free</span></li>
                        <li><span>total:</span> <span>$ {total}</span></li>
                    </ul>
                    <div className="checkout-btn mt-100">
                        <Link to="/checkout" className="btn essence-btn" onClick={closeNav}>check out</Link>
                    </div>
                </div>
            </div>

        );
    }
    else
    {
        return (<h1>Go to shapping</h1>);
    }
};

CartContent.propTypes = {
    props: PropTypes.array,
}

const mapStateToProps = cartData => {
    return cartData;
  }
  
  export default connect(mapStateToProps,null)(CartContent);