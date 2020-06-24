import React, { Fragment } from "react";
import Bgsix from "../../img/bg-img/bg-6.jpg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <div className="classy-menu">
        <div className="classycloseIcon">
          <div className="cross-wrap">
            <span className="top"></span>
            <span className="bottom"></span>
          </div>
        </div>

        <div className="classynav">
          <ul>
            <li className="megamenu-item">
              <a href="#">Shop</a>
              <div className="megamenu">
                <ul className="single-mega cn-col-4">
                  <li className="title">Women's Collection</li>
                  <li>
                    <a href="shop.html">Dresses</a>
                  </li>
                  <li>
                    <a href="shop.html">Blouses &amp; Shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">T-shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">Rompers</a>
                  </li>
                  <li>
                    <a href="shop.html">Bras &amp; Panties</a>
                  </li>
                </ul>
                <ul className="single-mega cn-col-4">
                  <li className="title">Men's Collection</li>
                  <li>
                    <a href="shop.html">T-Shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">Polo</a>
                  </li>
                  <li>
                    <a href="shop.html">Shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">Jackets</a>
                  </li>
                  <li>
                    <a href="shop.html">Trench</a>
                  </li>
                </ul>
                <ul className="single-mega cn-col-4">
                  <li className="title">Kid's Collection</li>
                  <li>
                    <a href="shop.html">Dresses</a>
                  </li>
                  <li>
                    <a href="shop.html">Shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">T-shirts</a>
                  </li>
                  <li>
                    <a href="shop.html">Jackets</a>
                  </li>
                  <li>
                    <a href="shop.html">Trench</a>
                  </li>
                </ul>
                <div className="single-mega cn-col-4">
                  <img src={Bgsix} alt="" />
                </div>
              </div>
              <span className="dd-trigger"></span>
              <span className="dd-arrow"></span>
            </li>
            <li className="cn-dropdown-item has-down pr12">
              <a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <a href="shop.html">Shop</a>
                </li>
                <li>
                  <a href="single-product-details.html">Product Details</a>
                </li>
                <li>
                  <NavLink to="/checkout">Checkout</NavLink>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="single-blog.html">Single Blog</a>
                </li>
                <li>
                  <NavLink to="/regularPage">Regular Page</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
              <span className="dd-trigger"></span>
              <span className="dd-arrow"></span>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
