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
                  <li><NavLink  to="/shops">Brakes and Traction Control</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Brake Rotor</NavLink ></li>
                  <li><NavLink  to="/shops">Brake Power Booster</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Brake shoes Rear</NavLink ></li>
                  <li><NavLink  to="/shops">Brake shoes Front</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Wheel Cylinder Rear</NavLink ></li>
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to="/shops">Cooling Heating and Climatic Control</NavLink ></li>                                        
                  <li><NavLink  to="/shops">All</NavLink ></li>
                  <li><NavLink  to="/shops">Radiator</NavLink ></li>                                        
                  <li><NavLink  to="/shops">AC Compressor</NavLink ></li>
                  <li><NavLink  to="/shops">Water Pump</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Trench</NavLink ></li>
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to="/shops">Interior &amp; Hardwares</NavLink ></li>
                  <li><NavLink  to="/shops">All</NavLink ></li>
                  <li><NavLink  to="/shops">Headlight</NavLink ></li>
                  <li><NavLink  to="/shops">Universal Seat belt</NavLink ></li>
                  <li><NavLink  to="/shops">Seat Cover</NavLink ></li>                                        
                  <li><NavLink  to="/shops">Latch</NavLink ></li>
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
                {/* <li>
                  <NavLink to="/single-product-details">Product Details</NavLink>
                </li> */}
                <li>
                  <NavLink to="/checkout">Checkout</NavLink>
                </li>
                <li>
                <NavLink  to="/blog">Blog</NavLink >
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
