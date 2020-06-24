import React, { Fragment } from "react";
import "./RegularPage.css";
import HeaderImage from "../../assets/img/bg-img/bg-8.jpg";

export default function RegularPage() {
  return (
    <div className="container-fluid main-container">
      <div className="row header-row">
        <img className="img-fluid w-100 header-image" src={HeaderImage} />
      </div>
      <div className="container justify-content-center my-5 content-container">
        <div className="row content-row">
          <h2 className="mb-5">
            Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et
            malesuada
          </h2>
          <p className="mb-5">
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
            ante. Aenean finibus velit id urna vehicula, nec maximus est
            sollicitudin. Praesent at tempus lectus, eleifend blandit felis.
            Fusce augue arcu, consequat a nisl aliquet, consectetur elementum
            turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu.
            Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc quis arcu a magna sodales
            venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi.
            In accumsan tellus ut dapibus blandit.
          </p>
          <blockquote className="mb-5 quote-blockquote">
            <h6 className="d-flex quote-header">
              <i
                className="fa fa-quote-left mr-4 quote-icon"
                aria-hidden="true"
              ></i>
              Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui.
              Cras et sagittis erat. Maecenas pulvinar, turpis in dictum
              tincidunt, dolor nibh lacinia lacus.
            </h6>
            <span className="ml-5">Liam Neeson</span>
          </blockquote>
          <p>
            Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla
            lorem augue, mollis non est et, eleifend elementum ante. Nunc id
            pharetra magna. Praesent vel orci ornare, blandit mi sed, aliquet
            nisi. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
}
