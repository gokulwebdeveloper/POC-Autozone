import React, { useEffect, Fragment, useState } from "react";
import parse from "html-react-parser";
import "./AboutAutoZone.css";
import RetrieveJson from "../../../utlis/RetrieveAPI/RetrieveJson";

export default function AboutAutoZone(props) {
  const [list, setList] = RetrieveJson(
    "./src/components/AboutUs/MockData/Mock2.json"
  );


  const displayData = list.map((item, i) => {
    if (Object.keys(item) == "aboutAutoZone") {
      // console.log("Printing data", item.aboutAutoZone);
      return (
        <Fragment key={i}>
          <div className="row row-1">
            <h1 className="align-self-center mx-auto text-white shadow-lg header-1">
              {item.aboutAutoZone[0].title}
            </h1>
          </div>
          <div className="row row-2 m-5">
            <p>{item.aboutAutoZone[1].para1}</p>
            <p>{item.aboutAutoZone[1].para2}</p>
          </div>
          <div className="row row-3 bg-danger">
            <div className="col-sm-6 col-md-6">
              <div>
                <img className="about-man-image" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 align-self-center">
              <p className="text-white">{item.aboutAutoZone[2].para1}</p>
            </div>
          </div>
          <div className="row row-4">
            <div className="col-sm-6 col-md-6 align-self-center">
              <p>{item.aboutAutoZone[3].para1}</p>
              <p>{item.aboutAutoZone[3].para2}</p>
              <p>{item.aboutAutoZone[3].para3}</p>
            </div>
            <div className="col-sm-6 col-md-6">
              <img className="w-100 min-vh-100 car-man-image" />
            </div>
          </div>
        </Fragment>
      );
    }
  });

  console.log("Printing data", displayData);

  return <div className="container-fluid">{displayData}</div>;
}
