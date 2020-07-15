import React, { useState, useEffect } from "react";
import "../Blog/Blog.css";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import UseInfiniteScroll from "../../utlis/infiniteScroll/UseInfiniteScroll";
import background from "../../utlis/img/azo-blog-img/background_image.jpg";
import RetrieveJson from "../../utlis/RetrieveAPI/RetrieveJson";
import ScrollUpArrowBtn from "../../utlis/button/ScrollUpArrowBtn";

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
      return (
        <div key={item}>
          <div className="col-12 col-lg-6">
            <div className="single-blog-area mb-50">
              <NavLink
                to="/singleblog"
                to={{
                  pathname: "/singleblog",
                  propsFor: {
                    img_id: regularBlogList[item].id,
                  },
                }}
              >
                <img src={regularBlogList[item].image} alt="" />
                <div className="post-title">
                  <a href="#">{regularBlogList[item].title}</a>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <a href="#">{regularBlogList[item].title}</a>
                  </div>
                  <p>{regularBlogList[item].content}</p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <ScrollUpArrowBtn />
      <div
        data-testid="background"
        className="blog-background-image"
        style={{ backgroundImage: "url(" + background + ")" }}
      ></div>
      <div className="blog-wrapper section-padding-80">
        <div className="container">
          <div className="row">{bloglist}</div>
          {isFetching && "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Blog;
