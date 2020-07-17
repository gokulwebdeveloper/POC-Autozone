import React, { Fragment } from "react";
import Menu from "./menu/Menu";
import Logo from "../img/core-img/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="classy-navbar" id="essenceNav">
        <Link to="/" className="nav-brand">
          <img src={Logo} alt="logo" />
        </Link>
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
