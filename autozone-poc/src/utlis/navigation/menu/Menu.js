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
              <NavLink  to="/shops">Shop</NavLink >
              <div className="megamenu">
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to="/shops">Women's Collection</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Dresses</NavLink ></li>
                  <li><NavLink  to="/shops">Blouses</NavLink ></li>                                        
                  <li><NavLink  to="/shops">T-shirts</NavLink ></li>
                  <li><NavLink  to="/shops">Rompers</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Bras &amp; Panties</NavLink ></li>
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to="/shops">Men's Collection</NavLink ></li>                                        
                  <li><NavLink  to="/shops">T-Shirts</NavLink ></li>
                  <li><NavLink  to="/shops">Polo</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Shirts</NavLink ></li>
                  <li><NavLink  to="/shops">Jackets</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Trench</NavLink ></li>
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to="/shops">Kid's Collection</NavLink ></li>
                  <li><NavLink  to="/shops">Dresses</NavLink ></li>
                  <li><NavLink  to="/shops">Shirts</NavLink ></li>
                  <li><NavLink  to="/shops">T-shirts</NavLink ></li>
                  <li><NavLink  to="/shops">Jackets</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Trench</NavLink ></li>
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
                  <NavLink to="/shops">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/single-product-details">Product Details</NavLink>
                </li>
                <li>
                  <NavLink to="/checkout">Checkout</NavLink>
                </li>
                <li>
                <NavLink  to="/blog">Blog</NavLink >
                </li>
                <li>
                <NavLink  to="/singleblog">SingleBlog</NavLink >
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
            <NavLink  to="/blog">Blog</NavLink >
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
