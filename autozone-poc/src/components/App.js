import React, { Fragment } from "react";
import Header from '../utlis/header/Header';
import Footer from '../utlis/footer/Footer';
import RegularPage from "./RegularPage/RegularPage";
import Contact from "./Contact/Contact";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import '../utlis/style/css/core-style.css';
import '../utlis/style/style.css';


const App = () => {
  return (
    <Fragment>
      <Header />
      {/* <RegularPage /> */}
      <Contact />
      <Footer />
    </Fragment>
  );
};


export default App;