import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../single-blog/single-blog.css";
import Comments from "./Comments";
import ScrollUpArrowBtn from "../../utlis/button/ScrollUpArrowBtn";
import RetrieveJson from "../../utlis/RetrieveAPI/RetrieveJson";

//Component structure
const Singleblog = (props) => {
  const [list, setList] = RetrieveJson("data/blog.json");

  const bloglist = list.map((item) => {
    if (!item.blogStatus) {
      return (
        <div key={item.id}>
          <div className="single-related-blog-post">
            <img src={item.image} alt=""></img>
            <a href="#">
              <h5>{item.title}</h5>
            </a>
          </div>
        </div>
      );
    }
  });
  const videoPlayer = list.map((item) => {
    if (props != undefined && props.location != undefined) {
      if (props.location.propsFor.img_id == item.id) {
        if (item.video) {
          return (
            <iframe
              style={{ width: "700px", height: "350px" }}
              src={item.video}
            ></iframe>
          );
        }
      }
    }
  });

  const sblist = list.map((item) => {
    if (props != undefined && props.location != undefined) {
      if (props.location.propsFor.img_id == item.id) {
        return (
          <div key={item.id}>
            <div className="single-blog-post-thumb">
              <img className="bgimg" src={item.image} alt=""></img>
            </div>
            <div className="single-blog-content-wrapper d-flex">
              <div className="single-blog--text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div id="singleblogvideo">{videoPlayer}</div>
              </div>
              <div className="related-blog-post">{bloglist}</div>
            </div>
          </div>
        );
      }
    }
  });

  return (
    <Fragment>
      <ScrollUpArrowBtn />
      <div className="single-blog-wrapper">{sblist}</div>
      <div className="blog-comment">
        <Comments />
      </div>
    </Fragment>
  );
};

export default Singleblog;
