import React, { Fragment } from "react";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import Heart from "../img/core-img/heart.svg";
import User from "../img/core-img/user.svg";
import Bag from "../img/core-img/bag.svg";

const Header = () => {

  function openNav() {
    var cartOverlayContent = document.getElementById("cartOverlayContent");
    if(cartOverlayContent==null) 
      return;
    cartOverlayContent.className = cartOverlayContent.className+" cart-on";

    var cartOverlay = document.getElementById("cartOverlay");
    if(cartOverlay==null) 
      return;
    cartOverlay.className = cartOverlay.className+" cart-bg-overlay-on";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    var cartOverlayContent = document.getElementById("cartOverlayContent");
    if(cartOverlayContent==null) 
      return;
    cartOverlayContent.className = cartOverlayContent.className.replace(" cart-on","");

    var cartOverlay = document.getElementById("cartOverlay");
    if(cartOverlay==null) 
      return;
    cartOverlay.className = cartOverlay.className.replace(" cart-bg-overlay-on","");
  }

  var stylehideOverflow = {
    overflow: "hidden",
    outline: "none",
  }

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
              <a href="#">
                <img src={User} alt="" />
              </a>
            </div>
            <div className="cart-area" onClick={openNav}>
              <a href="#" id="essenceCartBtn">
                <img src={Bag} alt="" /> <span>3</span>
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
            <a href="#"><img src={Bag} alt=""/> <span>3</span></a>
        </div>

        <div className="cart-content d-flex" style={stylehideOverflow}>

            {/* <!-- Cart List Area --> */}
            <div className="cart-list">
                {/* <!-- Single Cart Item --> */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="src/assets/img/product-img/product-1.jpg" className="cart-thumb" alt=""/>
                        {/* <!-- Cart Item Desc --> */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Cart Item --> */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="src/assets/img/product-img/product-2.jpg" className="cart-thumb" alt=""/>
                        {/* <!-- Cart Item Desc --> */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Cart Item --> */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src="src/assets/img/product-img/product-3.jpg" className="cart-thumb" alt=""/>
                        {/* <!-- Cart Item Desc --> */}
                        <div className="cart-item-desc">
                          <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* <!-- Cart Summary --> */}
            <div className="cart-amount-summary">

                <h2>Summary</h2>
                <ul className="summary-table">
                    <li><span>subtotal:</span> <span>$274.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>discount:</span> <span>-15%</span></li>
                    <li><span>total:</span> <span>$232.00</span></li>
                </ul>
                <div className="checkout-btn mt-100">
                    <a href="/checkout" className="btn essence-btn">check out</a>
                </div>
            </div>
        
        
        </div>
    </div>
    {/* <!-- ##### Right Side Cart End ##### --> */}
    </div>
    </Fragment>
  );
};

export default Header;
