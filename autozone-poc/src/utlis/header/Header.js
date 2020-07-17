import React, { Fragment } from "react";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import Heart from "../img/core-img/heart.svg";
import User from "../img/core-img/user.svg";
import Bag from "../img/core-img/bag.svg";
import CartContent from "./CartContent";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

function openNav() {
  let  cartOverlayContent = document.getElementById("cartOverlayContent");
  if(cartOverlayContent==null) 
    return;
  cartOverlayContent.className = cartOverlayContent.className+" cart-on";

  let  cartOverlay = document.getElementById("cartOverlay");
  if(cartOverlay==null) 
    return;
  cartOverlay.className = cartOverlay.className+" cart-bg-overlay-on";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
export function closeNav() {
  let  cartOverlayContent = document.getElementById("cartOverlayContent");
  if(cartOverlayContent==null) 
    return;
  cartOverlayContent.className = cartOverlayContent.className.replace(" cart-on","");

  let  cartOverlay = document.getElementById("cartOverlay");
  if(cartOverlay==null) 
    return;
  cartOverlay.className = cartOverlay.className.replace(" cart-bg-overlay-on","");
}

const Header = (props) => {
  return (
    <Fragment>
      <div>
      <header className="header_area">
        <div className="classNamey-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <Navigation />
          <div className="header-meta d-flex clearfix justify-content-end">
            <Search />

            <div className="favourite-area">
              <a href="#">
                <img src={Heart} alt="" />
              </a>
            </div>

            <div className="user-login-info">
            <NavLink
                to="/signin"
                to={{
                  pathname: "/signin",
               
                }}
              ><img src={User} alt="" />

              </NavLink>
                
             
            </div>
            <div className="cart-area" onClick={openNav}>
              <a href="#" id="essenceCartBtn">
                <img src={Bag} alt="" /> <span>{props.cartData.length}</span>
              </a>
            </div>
          </div>
        </div>
    </header>

      {/* <!-- ##### Right Side Cart Area ##### --> */}
    <div id="cartOverlay" className="cart-bg-overlay" onClick={closeNav}></div>

    <div id="cartOverlayContent" className="right-side-cart-area" >

        {/* <!-- Cart Button --> */}
        <div className="cart-button" onClick={closeNav}>
            <a href="#"><img src={Bag} alt=""/> <span>{props.cartData.length}</span></a>
        </div>

        <CartContent/>
       
    </div>
    {/* <!-- ##### Right Side Cart End ##### --> */}
    </div>
    </Fragment>
  );
};


const mapStateToProps = cartData => {
  return cartData;
}

export default connect(mapStateToProps,null)(Header);
