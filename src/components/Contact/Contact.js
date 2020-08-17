import React, { Fragment } from "react";
import GoogleMap from "./Map/GoogleMap";
import Data from "./MockData/Mock.json";
import { Helmet } from "react-helmet";

export default function Contact(props) {
  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8"/>
        <title>Autozone Contact</title>
        <meta name="description" content="This is Autozone contact page information"/>
      </Helmet>
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7 col-md-7 px-0 common-col common-col-1">
          <div className="min-vh-100 common-col-1-contents">
            <GoogleMap />
          </div>
        </div>
        <div className="align-items-center justify-content-center d-flex col-sm-5 col-md-5 px-0 common-col common-col-2">
          <div className="justify-content-center m-5 p-0 common-col-1-contents">
            <h2>{Data.headerText}</h2>
            <p>{Data.para1}</p>
            <div className="address">
              <p>
                <span className="font-weight-bold">{Data.spanBoldText1}</span>
                {Data.para2}
              </p>
              <p>
                <span className="font-weight-bold">{Data.spanBoldText2}</span>
                {Data.para3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
