import React, { Fragment } from "react";
import Bgsix from "../../img/azo-product-img/background/bg4.jpg";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import "./Menu.css";
import { connect } from 'react-redux';
import { shopMenuClicked } from '../../../Redux/actions/index';


const Menu = (props) => {
 
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
              <Link onClick={() => {
                props.shopMenuClicked();
              }
            } 
            to={{pathname:'/shops'}}>Shop</Link >

              <div className="megamenu">
              <ul className="single-mega cn-col-4">
                  <li><Link  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Brakes and Traction Control',
                      filter: 'All'
                    }
                    }}>Brakes and Traction Control</Link ></li>                                        
                  <li><NavLink  to="/shops" to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Brakes and Traction Control',
                      filter: 'Brake Rotor'
                    }
                    }}>Brake Rotor</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Brakes and Traction Control',
                      filter: 'Brake Power Booster'
                    }
                    }}>Brake Power Booster</NavLink ></li>                                        
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Brakes and Traction Control',
                      filter: 'Brake shoes Rear'
                    }
                    }}>Brake shoes Rear</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Brakes and Traction Control',
                      filter: 'Brake shoes Front'
                    }
                    }}>Brake shoes Front</NavLink ></li>                                        
                
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Cooling, Heating and Climate Control',
                      filter: 'All'
                    }
                    }}>Cooling Heating and Climate Control</NavLink ></li>                                        
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Cooling, Heating and Climate Control',
                      filter: 'Radiator'
                    }
                    }}>Radiator</NavLink ></li>                                        
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Cooling Heating and Climatic Control',
                      filter: 'AC Compressor'
                    }
                    }}>AC Compressor</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Cooling Heating and Climatic Control',
                      filter: 'Water Pump'
                    }
                    }}>Water Pump</NavLink ></li>                                        
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Cooling Heating and Climatic Control',
                      filter: 'Trench'
                    }
                    }}>Trench</NavLink ></li>
              </ul>
              <ul className="single-mega cn-col-4">
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Interior',
                      filter: 'All'
                    }
                    }}>Interior &amp; Hardwares</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Collision Body Parts and Hardware',
                      filter: 'Headlight'
                    }
                    }}>Headlight</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Interior',
                      filter: 'Universal Seat belt'
                    }
                    }}>Universal Seat belt</NavLink ></li>
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Interior',
                      filter: 'Seat Cover'
                    }
                    }}>Seat Cover</NavLink ></li>                                        
                  <li><NavLink  to={{
                    pathname:'/shops',
                    filter: {
                      filterType: 'Interior',
                      filter: 'Latch'
                    }
                    }}>Latch</NavLink ></li>
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
            <li className="cn-dropdown-item has-down pr12">
              <a href="#">About Us</a>
              <ul className="dropdown aboutUs-dropdown">
                <li>
                  <NavLink to="/aboutAutozone">About AutoZone</NavLink>
                </li>
                <li>
                  <NavLink to="/investorInformation">Investor Information</NavLink>
                </li>
                <li>
                  <NavLink to="/affliateProgram">Affliate Program</NavLink>
                </li>
              </ul>
              <span className="dd-trigger"></span>
              <span className="dd-arrow"></span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { shopMenuClicked })(Menu);
