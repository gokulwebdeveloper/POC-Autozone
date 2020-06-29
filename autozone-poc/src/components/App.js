import React from "react";
import Header from "../utlis/header/Header";
import Footer from "../utlis/footer/Footer";
import RegularPage from "./RegularPage/RegularPage";
import Contact from "./Contact/Contact";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../utlis/style/css/core-style.css";
import "../utlis/style/style.css";
import Checkout from "./CheckoutPage/CheckoutPage";
import Blog from "./Blog/Blog";
import Shops from "./Shops/Shops";
<<<<<<< HEAD
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup"
=======
>>>>>>> d7f6c4fd... completed the page with static data
import ProductDetails from './ProductDetails/ProductDetails';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Singleblog from "./single-blog/single-blog";
import Home from "./HomePage/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/signup">
          <Signup />
        </Route>
      <Route path="/signin">
          <Signin />
        </Route>
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
        <Route path="/single-product-details">
          <ProductDetails />
        </Route>
        <Route path="/shops">
            <Shops />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="/singleblog" component={Singleblog} >
         </Route>
    </Switch>
      <Footer />
    </Router>
  );
};

export default App;
