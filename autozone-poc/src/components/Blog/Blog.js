
import React, { Component, useState } from "react";
import blog1 from "../../utlis/img/bg-img/blog1.jpg";
import blog2 from "../../utlis/img/bg-img/blog2.jpg";
import blog3 from "../../utlis/img/bg-img/blog3.jpg";
import blog4 from "../../utlis/img/bg-img/blog4.jpg";
import blog5 from "../../utlis/img/bg-img/blog5.jpg";
import blog6 from "../../utlis/img/bg-img/blog6.jpg";
import InnerBgImg from "../../utlis/img/bg-img/breadcumb2.jpg";
import "../Blog/Blog.css";
import { BrowserRouter as Router,NavLink } from 'react-router-dom';

const Blog = props => {
  
    return (
    <div>
      <div data-testid="background"
        className="breadcumb_area breadcumb-style-two bg-img"
        style={{ backgroundImage: "url(" + InnerBgImg + ")" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Fashion Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-wrapper section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog1} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink 
                  to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog1
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                    </NavLink>
                    </Router>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog2} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog2
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </NavLink>
                  </Router>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog3} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog3
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </NavLink>
                  </Router>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog4} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog4
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </NavLink>
                  </Router>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog5} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog5
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </NavLink>
                  </Router>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src={blog6} alt="" />
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <Router>
                  <NavLink to= {{
                    pathname:"/singleblog",
                    propsFor: {
                      imgpath: blog6
                    }
                    }}>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </NavLink>
                  </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Blog;
