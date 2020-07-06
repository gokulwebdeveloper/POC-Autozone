import React, {useEffect} from "react";
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
import ProductDetails from './ProductDetails/ProductDetails';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Singleblog from "./single-blog/single-blog";
import Home from "./HomePage/Home";
import {connect} from 'react-redux';
import {getProducts} from '../Redux/actions';

const App = ({getProducts}) => {
  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route  path="/blog">
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
        <Route path="/single-product-details/:id" component={ProductDetails} />
        <Route path="/single-product-details">
          <ProductDetails />
        </Route>
        <Route path="/shops">
            <Shops />
        </Route>
         <Route exact path="/singleblog" component={Singleblog} >
         </Route>
         <Route path="/">
          <Home />
        </Route>
    </Switch>
      <Footer />
    </Router>
  );
};

export default connect(null,{getProducts})(App);
