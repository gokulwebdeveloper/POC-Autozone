import React, { useState, useEffect, Fragment } from "react";
import "../Blog/Blog.css";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import UseInfiniteScroll from "../../utlis/infiniteScroll/UseInfiniteScroll";
import RetrieveJson from "../../utlis/RetrieveAPI/RetrieveJson";
import ScrollUpArrowBtn from "../../utlis/button/ScrollUpArrowBtn";
import { Helmet } from "react-helmet";

const Blog = (props) => {
  const [list, setList] = RetrieveJson("data/blog.json");

  const [listItems, setListItems] = useState(
    Array.from(Array(5).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = UseInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(5).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  let sortedList = list.sort(
    (a, b) =>
      new Date(...a.recent_date.split("/").reverse()) -
      new Date(...b.recent_date.split("/").reverse())
  );
  let regularBlogList = sortedList.filter((item) => item.blogStatus);

  const bloglist = listItems.map((item) => {
    if (regularBlogList.length > item) {
        const pathwithId = "/singleblog/"+regularBlogList[item].id;
      return (
        <div key={item}>
          <div className="col-12 col-lg-6">
            <div className="single-blog-area mb-50">
              <NavLink to={pathwithId} >
                <img src={regularBlogList[item].image} alt="" />
                <div className="post-title">
                  <p>{regularBlogList[item].title}</p>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <p>{regularBlogList[item].title}</p>
                  </div>
                  <p>{regularBlogList[item].content}</p>
                  <div className="reading">
                  <p>
                    Continue reading <i className="fa fa-angle-right"></i>
                  </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <title>Autozone Blog</title>
        <meta name="description" content="This is Autozone blog page information"/>
      </Helmet>
      <ScrollUpArrowBtn />
      <div
        data-testid="background"
        className="blog-background-image"
        style={{ backgroundImage: "url(img/azo-blog-img/background_image.jpg)" }}
      ></div>
      <div className="blog-wrapper section-padding-80">
        <div className="container-blog">
          <div className="row-blog">{bloglist}</div>
          {isFetching && "Loading..."}
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
