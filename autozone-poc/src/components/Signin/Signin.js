import React, { Fragment, useState } from "react";
import axios from "axios";

import InputWithLabel from "../../utlis/formComponents/InputWithLabel";
import "./Signin.css";
import Button from "../../utlis/button/Button";
import { data } from "jquery";

export default function Signin() {
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (evt) => {
    const data = {};
    evt.preventDefault();
    data.emailid = emailid;
    data.password = password;
    axios.post("http://localhost:5000/user/signin", data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-4"></div>
          <div className="col-4 align-items-center signincontainer">
            <div className="page-title text-center">
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
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired={true}
                />
                <br />
                <br />
                <div className="link">
                  <a href="/signup">Signup</a>
                </div>
                <br />
                <Button btnText="Signin" type="submit" />
                <br />
                <br />
              </form>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
