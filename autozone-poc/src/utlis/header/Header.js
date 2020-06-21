import React, { Fragment } from "react";
import Navigation from '../navigation/Navigation';
import Search from '../search/Search';

const Header = () => {
  return (
    <Fragment>
        <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                <Navigation />
            </div>           
        </header>
    </Fragment>
  );
};


export default Header;