import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'

function SimpleSlider(props) { 
    let settings = props.settings;
    return (
        <div>
            <Slider {...settings}>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-1.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-2.jpg" alt="" />
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>topshop</span>
                        <a href="single-product-details.html">
                            <h6>Knot Front Mini Dress</h6>
                        </a>
                        <p className="product-price">$80.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-2.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-3.jpg" alt="" />
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>topshop</span>
                        <a href="single-product-details.html">
                            <h6>Poplin Displaced Wrap Dress</h6>
                        </a>
                        <p className="product-price">$80.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-3.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-4.jpg" alt="" />
                        <div className="product-badge offer-badge">
                            <span>-30%</span>
                        </div>
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>mango</span>
                        <a href="single-product-details.html">
                            <h6>PETITE Crepe Wrap Mini Dress</h6>
                        </a>
                        <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-4.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-5.jpg" alt="" />
                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>mango</span>
                        <a href="single-product-details.html">
                            <h6>PETITE Belted Jumper Dress</h6>
                        </a>
                        <p className="product-price">$80.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-4.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-5.jpg" alt="" />
                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>mango</span>
                        <a href="single-product-details.html">
                            <h6>PETITE Belted Jumper Dress</h6>
                        </a>
                        <p className="product-price">$80.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src="src/utlis/img/product-img/product-4.jpg" alt="" />
                        <img className="hover-img" src="src/utlis/img/product-img/product-5.jpg" alt="" />
                        <div className="product-badge new-badge">
                            <span>New</span>
                        </div>
                        <div className="product-favourite">
                            <a href="#" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    <div className="product-description">
                        <span>mango</span>
                        <a href="single-product-details.html">
                            <h6>PETITE Belted Jumper Dress</h6>
                        </a>
                        <p className="product-price">$80.00</p>
                        <div className="hover-content">
                            <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
} 

export default SimpleSlider;