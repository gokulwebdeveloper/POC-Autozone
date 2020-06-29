import React, { Fragment } from "react";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import Heart from "../img/core-img/heart.svg";
import User from "../img/core-img/user.svg";
import Bag from "../img/core-img/bag.svg";

const Header = () => {
  return (
    <Fragment>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <Navigation />

          <div className="header-meta d-flex clearfix justify-content-end">
            <Search />

            <div className="favourite-area">
              <a href="#">
                <img src={Heart} alt="" />
              </a>
            </div>

            <div className="user-login-info">
              <a href="/signin">
                <img src={User} alt="" />
              </a>
            </div>
            <div className="cart-area">
              <a href="#" id="essenceCartBtn">
                <img src={Bag} alt="" /> <span>3</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
