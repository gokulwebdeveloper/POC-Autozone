import React, {Fragment} from "react";


const Navigation = () => {
  return (
    <Fragment>
        <nav className="classy-navbar" id="essenceNav">
            <a className="nav-brand" href="index.html">
                Logo Comes here
            </a>
            <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </nav>
      
    </Fragment>
  );
};


export default Navigation;        