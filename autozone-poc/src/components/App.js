import React from "react";
import Header from "../utlis/header/Header";
import Footer from "../utlis/footer/Footer";
import Contact from "./Contact/Contact";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../utlis/style/css/core-style.css";
import "../utlis/style/style.css";
import Blog from "./Blog/Blog";
import Shops from "./Shops/Shops";
<<<<<<< HEAD
<<<<<<< HEAD
import Welcome from './Welcome';
import Checkout from './CheckoutPage/CheckoutPage';
import RegularPage from "./RegularPage/RegularPage";
import Home from "./HomePage/Home";
import ProductDetails from './ProductDetails/ProductDetails';
=======
>>>>>>> bda80329... Completed Page Screen.
=======
import ProductDetails from './ProductDetails/ProductDetails';
>>>>>>> 6c23abef... completed the page with static data
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";





const App = () => {



  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/regularPage">
          <RegularPage />
        </Route>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/single-product-details">
          <ProductDetails />
        </Route>
=======
>>>>>>> bda80329... Completed Page Screen.
=======
        <Route path="/single-product-details">
          <ProductDetails />
        </Route>
>>>>>>> 6c23abef... completed the page with static data
        <Route path="/shops">
            <Shops />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;