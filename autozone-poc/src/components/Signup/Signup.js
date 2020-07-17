import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import InputWithLabel from "../../utlis/formComponents/InputWithLabel";
import "./Signup.css";
import Button from "../../utlis/button/Button";

//export default class Signin extends Component{

export default function Signup(props) {
  // const {register, handleSubmit, errors, watch}=useForm();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPasswords] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [msgerror, setmsgerror] = useState(false);

  $(document).ready(function () {
    $("#confirm_password").on("blur", function () {
      $("input[required]").each(function (element) {
        let val = $(this).val();
        if (val !== password) {
          $(`.confirm_password_test .formErrorMsg`).text(
            "please provide same password for confirm password"
          );
          $(`.confirm_password_test .formErrorMsg`).show();
        } else {
          $(`.confirm_password_test .formErrorMsg`).hide();
        }
      });
    });
  });

  const onSubmit = (evt) => {
    const data = {};
    evt.preventDefault();
    data.firstname = firstname;
    data.lastname = lastname;
    data.emailid = emailid;
    data.password = password;
    axios
      .post("http://localhost:5000/user/signup", data)
      .then((response) => {
        window.location.assign("/signin");
      })
      .catch((response) => {
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
          <div className="col-md-12 message"></div>
          <div className="alert alert-danger col-md-4" role="alert">
            invalid Email id or password!
          </div>
        </div>
      ) : null}
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            <h1 className="signupExplanation">
              AutoZone has over 5,500 locations across the United States where
              we provide great customer service at every store every day! Become
              a member and get even more great benefits
            </h1>
          </div>
          <div className="col-md-4 signupcontainer">
            <div className="page-title">
              <h2 className="signuphead">Sign Up</h2>

              <form onSubmit={onSubmit}>
                <div className="row namefeild">
                  <div className="col-md-6">
                    <InputWithLabel
                      labelText="First Name"
                      inputId="first_Name"
                      inputType="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      isRequired={true}
                    />
                  </div>

                  <div className="col-md-6">
                    {" "}
                    <InputWithLabel
                      labelText="Last Name"
                      inputId="last_Name"
                      inputType="text"
                      onChange={(e) => setLastName(e.target.value)}
                      isRequired={true}
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <InputWithLabel
                    labelText="Email Address"
                    inputId="email_Address"
                    inputType="email"
                    onChange={(e) => setEmailid(e.target.value)}
                    isRequired={true}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <InputWithLabel
                    labelText="Password"
                    inputId="passwords"
                    inputType="password"
                    onChange={(e) => setPasswords(e.target.value)}
                    isRequired={true}
                  />
                </div>
                <div className="col-md-12 mb-4 confirm_password_test">
                  <InputWithLabel
                    labelText="Confirm Password"
                    inputId="confirm_password"
                    inputType="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isRequired={true}
                  />
                </div>
                <br />
                <div className="btnpostion">
                  {" "}
                  <Button btnText="Signup" type="submit" />
                </div>
                <br />
              </form>
              <br />

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
