import React from "react";
import "./RegularPage.css";
import Data from "./MockData/Mock.json";

export default function RegularPage() {
  return (
    <div className="container-fluid main-container">
      <div className="row header-row">
        <img className="img-fluid w-100 header-image" src={Data[0].imgSrc} />
      </div>
      <div className="container justify-content-center my-5 content-container">
        <div className="row content-row">
          <h2 className="mb-5">{Data[1].h2Para}</h2>
          <p className="mb-5">{Data[1].para1}</p>
          <blockquote className="mb-5 quote-blockquote">
            <h6 className="d-flex quote-header">
              <i
                className="fa fa-quote-left mr-4 quote-icon"
                aria-hidden="true"
              ></i>
              {Data[1].h6Para}
            </h6>
            <span className="ml-5">{Data[1].spanText}</span>
          </blockquote>
          <p>{Data[1].para2}</p>
        </div>
      </div>
    </div>
  );
}
