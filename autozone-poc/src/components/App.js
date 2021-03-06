import React from "react";
import Header from '../utlis/header/Header';
import Footer from '../utlis/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../utlis/style/css/core-style.css';
import '../utlis/style/style.css';
import Welcome from './Welcome';
import Checkout from './CheckoutPage/CheckoutPage';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


const App = () => {
  return (
      <Router>
      <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
};


export default App;