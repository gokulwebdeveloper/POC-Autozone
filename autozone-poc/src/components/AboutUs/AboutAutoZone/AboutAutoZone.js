import React from "react";
import "./AboutAutoZone.css";
import Data from "../MockData/Mock.json";

export default function About(props) {
  const FilterData = () => {
    let data;
    Data.map((item, i) => {
      if (Object.keys(item) == "aboutAutoZone") data = item.aboutAutoZone;
    });
    return data;
  };

  const FilteredData =FilterData();

  return (
    <div className="container-fluid">
      <div
        className="row row-1"
        style={{ backgroundImage: `url(${FilteredData[0].backgroundImage})` }}
      >
        <h1 className="align-self-center mx-auto text-white shadow-lg header-1">
          {FilteredData[0].title}
        </h1>
      </div>
      <div className="row row-2 m-5">
        <p>{FilteredData[1].para1}</p>
        <p>{FilteredData[1].para2}</p>
      </div>
      <div className="row row-3 bg-danger">
        <div className="col-sm-6 col-md-6">
          <div>
            <img className="about-man-image" src={FilteredData[2].image} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 align-self-center">
          <p className="text-white">{FilteredData[2].para1}</p>
        </div>
      </div>
      <div className="row row-4">
        <div className="col-sm-6 col-md-6 align-self-center">
          <p>{FilteredData[3].para1}</p>
          <p>{FilteredData[3].para2}</p>
          <p>{FilteredData[3].para3}</p>
        </div>
        <div className="col-sm-6 col-md-6">
          <img
            className="w-100 min-vh-100 car-man-image"
            src={FilteredData[3].image}
          />
        </div>
      </div>
    </div>
  );
}
