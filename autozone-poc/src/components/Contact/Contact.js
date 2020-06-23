import React from "react";
import GoogleMap from "./Map/GoogleMap";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7 col-md-7 px-0 common-col common-col-1">
          <div className="min-vh-100 common-col-1-contents">
            <GoogleMap />
          </div>
        </div>
        <div className="align-items-center justify-content-center d-flex col-sm-5 col-md-5 px-0 common-col common-col-2">
          <div className="justify-content-center m-5 p-0 common-col-1-contents">
            <h2>How to Find Us</h2>
            <p>
              Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
              ante. Aenean finibus velit id urna vehicula, nec maximus est
              sollicitudin.
            </p>
            <div className="address">
              <p>
                <span className="font-weight-bold">Address:</span> 10 Suffolk st
                Soha, London, UK
              </p>
              <p>
                <span className="font-weight-bold">Telephone:</span> +12 34 567
                890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
