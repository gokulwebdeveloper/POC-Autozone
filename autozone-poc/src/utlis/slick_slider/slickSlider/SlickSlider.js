import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from "react-tooltip";
import { NavLink } from 'react-router-dom';
import Button from '../../button/Button';

const SlickSlider = props => {
    return (
        <div>
            <div className="single-product-wrapper">
                <div className="product-img">
                    {
                        props.slideData && props.slideData.product_image && props.slideData.product_image.length < 2 ? props.slideData.product_image.map((productImg) =>
                            <div>
                                <img src={productImg} alt="" />
                                <img className="hover-img" src={productImg} alt="" />
                            </div>
                        ) : <div>
                                <img src={props.slideData.product_image[0]} alt="" />
                                <img className="hover-img" src={props.slideData.product_image[1]} alt="" />
                            </div>
                    }

                    <div className="product-badge offer-badge">
                        <span>{props.slideData.offer_badge}</span>
                    </div>
                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>
                <div className="product-description">
                    <span>{props.slideData.product_brand}</span>
                    <NavLink to="/single-product-details">
                        <h6 data-tip={props.slideData.product_name} data-background-color="#989898">{props.slideData.product_name}</h6>
                        <ReactTooltip />
                    </NavLink>
                    <p className="product-price">${props.slideData.offer_price}</p>
                    <div className="hover-content">
                        <div className="add-to-cart-btn">
                        <Button btnText="Add to Cart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlickSlider;