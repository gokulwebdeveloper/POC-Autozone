import React, { Fragment, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import InputWithLabel from "../../utlis/formComponents/InputWithLabel";
import "./Signin.css";
import Button from "../../utlis/button/Button";
//import { data } from "jquery";

export default function Signin() {
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgerror, setmsgerror] = useState(false);

  const onSubmit = (evt) => {
    const data = {};
    evt.preventDefault();
    data.emailid = emailid;
    data.password = password;
    axios
      .post("http://localhost:5000/user/signin", data)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        window.location.assign("/");
      })
      .catch((err) => {
        data.msgerror = true;
        window.scrollTo(0, 0);
        setmsgerror(data.msgerror);
      });
  };
  return (
    <div>
      <div className="container-fluid h-100 bgimage">
      {msgerror ? (
        <div className="row justify-content-md-center">
          <div className="alert alert-danger col-md-4" role="alert">
            invalid Email id or password!
          </div>
        </div>
      ) : null}
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            <h1 className="signinExplanation">
              WELCOME BACK Sign In to save your vehicles, track your orders, and
              earn Rewards when you purchase.
            </h1>
          </div>
          <div className="col-md-4  signincontainer">
            <div className="page-title">
              <h2 className="signinhead">Sign In</h2>

              <form onSubmit={onSubmit}>
                <InputWithLabel
                  labelText="Email Address"
                  inputId="email_address"
                  inputType="email"
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired={true}
                />
                <InputWithLabel
                  labelText="Password"
                  inputId="password"
                  inputType="password"
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired={true}
                />
                <br />
                <br />
                <div className="link">
                <NavLink
                to="/signup"
                to={{
                  pathname: "/signup",
               
                }}
              >Signup

              </NavLink>
                  
                </div>
                <br />
                <div className="btnpostion">
                  <Button btnText="Signin" type="submit" />
                </div>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
