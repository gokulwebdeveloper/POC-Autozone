import React, { Fragment } from "react";
import "./RegularPage.css";
import HeaderImage from "../../assets/img/bg-img/bg-8.jpg";

export default function RegularPage() {
  return (
    <Fragment>
      {/* <div className="container-fluid">Aman</div> */}
      {/* <div className="container-fluid main-container">
        <div className="row header-row"> */}
          {/* <div className="col-md-12 px-0 header-image"></div> */}
          <img class="img-fluid header-image" src={HeaderImage} />
        {/* </div> */}
        {/* <img src={"../../assets/img/bg-img/bg-8.jpg"} /> */}
        <div className="row mt-5 justify-content-center content-row">
          <div className="container content-container">
            <h1 className="mb-5">
              Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et
              malesuada
            </h1>
            <p className="mt-5 mb-5">
              Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
              ante. Aenean finibus velit id urna vehicula, nec maximus est
              sollicitudin. Praesent at tempus lectus, eleifend blandit felis.
              Fusce augue arcu, consequat a nisl aliquet, consectetur elementum
              turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet
              eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc quis arcu a magna sodales
              venenatis. Integer non diam sit amet magna luctus mollis ac eu
              nisi. In accumsan tellus ut dapibus blandit.
            </p>
            <blockquote className="mt-5 mb-5 quote-blockquote">
              <h6 className="quote-header">
                <i className="fa fa-quote-left mr-4 quote-icon" aria-hidden="true"></i>
                Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui.
                Cras et sagittis erat. Maecenas pulvinar, turpis in dictum
                tincidunt, dolor nibh lacinia lacus.
              </h6>
              <span className="ml-5">Liam Neeson</span>
            </blockquote>
            <p className="mt-5">
              Praesent ac magna sed massa euismod congue vitae vitae risus.
              Nulla lorem augue, mollis non est et, eleifend elementum ante.
              Nunc id pharetra magna. Praesent vel orci ornare, blandit mi sed,
              aliquet nisi. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
}
