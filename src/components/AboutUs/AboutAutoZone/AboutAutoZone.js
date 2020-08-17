import React, { Fragment } from "react";
import "./AboutAutoZone.css";
import Data from "../MockData/Mock.json";
import { Helmet } from "react-helmet";

export default function About(props) {
  const FilterData = () => {
    let data;
    Data.map((item, i) => {
      if (Object.keys(item) == "aboutAutoZone") data = item.aboutAutoZone;
    });
    return data;
  };

  const FilteredData = FilterData();

  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <title>Autozone About</title>
        <meta name="description" content="This is Autozone About us page information"/>
      </Helmet>
      <div className="container-fluid">
      <div
        className="row row-top-background-header"
        style={{ backgroundImage: `url(${FilteredData[0].backgroundImage})` }}
      >
        <div className="align-self-center col-sm-12 col-md-12">
          <h1 className="text-white text-center shadow-lg first-header-text">
            {FilteredData[0].title}
          </h1>
        </div>
      </div>
      <div className="row m-5 row-para-1">
        <div className="col-sm-12 col-md-12">
          <p>{FilteredData[1].para1}</p>
          <p>{FilteredData[1].para2}</p>
        </div>
      </div>
      <div className="row bg-danger">
        <div className="col-sm-6 col-md-6">
          <div>
            <img
              alt={FilteredData[2].imageAlt}
              className="about-man-image"
              src={FilteredData[2].image}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 align-self-center">
          <p className="text-white">{FilteredData[2].para1}</p>
        </div>
      </div>
      <div className="row row-para-2">
        <div className="col-sm-6 col-md-6 align-self-center">
          <p>{FilteredData[3].para1}</p>
          <p>{FilteredData[3].para2}</p>
          <p>{FilteredData[3].para3}</p>
        </div>
        <div className="col-sm-6 col-md-6">
          <img
            alt={FilteredData[3].imageAlt}
            className="w-100 min-vh-100 car-man-image"
            src={FilteredData[3].image}
          />
        </div>
      </div>
    </div>
    </Fragment>
  );
}
