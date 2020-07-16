import React, { Fragment } from "react";
import Menu from "./menu/Menu";
import Logo from "../img/azo-product-img/homePageImages/logo-autozone.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="classy-navbar" id="essenceNav">
        <NavLink className="nav-brand" to="/">
        <img src={Logo} alt="logo" />
        </NavLink>
        <div className="classy-navbar-toggler">
          <span className="navbarToggler">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <Menu />
      </nav>
    </Fragment>
  );
};

export default Navigation;
