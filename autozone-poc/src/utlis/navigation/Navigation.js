import React, {Fragment} from "react";
import Menu from './menu/Menu';
import Logo from '../img/core-img/logo.png';

const Navigation = () => {
  return (
    <Fragment>
        <nav className="classy-navbar" id="essenceNav">
            <a className="nav-brand" href="#">
                <img src={Logo} alt="logo" />
            </a>
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