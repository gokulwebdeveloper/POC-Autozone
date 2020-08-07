import React, { Fragment, useEffect } from "react";
import Menu from "./menu/Menu";
import { Link } from "react-router-dom";
import $ from 'jquery';

function openMenu(){
  
  $(".classy-navbar-toggler").on("click", function () {
   $(".classy-menu").toggleClass("menu-on");
  });
  $(".classy-nav-container").removeClass("breakpoint-off").addClass("breakpoint-on").addClass("light").addClass("left");
  $(".classynav > ul > li").has(".dropdown").addClass("cn-dropdown-item");
  $(".classynav > ul > li").has(".megamenu").addClass("megamenu-item");
  $(".megamenu-item, .cn-dropdown-item").addClass("pr12");
}


const Navigation = () => {
   useEffect(() => {
      $(".classynav ul").find("li a").each(function () {
        if($(this).next().length > 0){
          $(this).parent("li").addClass("has-down").append('<span class="dd-trigger"></span>');
          $(this).parent("li").addClass("has-down").append('<span class="dd-arrow"></span>');
        }
      });

        $(".classynav ul").find("li .dd-trigger").on("click", function (n) {
          n.preventDefault();
          $(this).parent("li").children("ul").stop(!0, !0).slideToggle(300);
          $(this).parent("li").toggleClass("active")
        });

      $(".classycloseIcon").on("click", function () {
        $(".classy-menu").removeClass("menu-on").removeClass("active");
      });

    
     $(".classynav ul").find("li .dd-trigger").on("click", function () {
        $(this).parent("li").children(".megamenu").slideToggle(300);
        $(this).parent("li").toggleClass("active");
     });
   });
  return (
    <Fragment>
      <nav className="classy-navbar" id="essenceNav">
        <Link to="/" className="nav-brand">
          <img src="img/core-img/logo.png" alt="logo" />
        </Link>
        <div className="classy-navbar-toggler" onClick={openMenu}>
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
