import React, { useState } from "react";
//import {useForm} from 'react-hook-form';
import axios from "axios";
import InputWithLabel from "../../utlis/formComponents/InputWithLabel";
import "./Signup.css";
import Button from "../../utlis/button/Button";

//export default class Signin extends Component{

  export default function Signup () {
  // const {register, handleSubmit, errors, watch}=useForm();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPasswords] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const onSubmit = (evt) => {
    const data = {};
    evt.preventDefault();
    data.firstname = firstname;
    data.lastname = lastname;
    data.emailid = emailid;
    data.password = password;
    axios.post("http://localhost:5000/user/signup", data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-4"></div>
          <div className="col-md-4 align-items-center signupcontainer">
            <div className="page-title text-center">
              <h2 className="signuphead">Sign Up</h2>

              <form onSubmit={onSubmit}>
                    
              <div className="col-md-12 mb-4">    
                  <InputWithLabel
                        labelText="First Name"
                        inputId="first_Name"
                        inputType="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        isRequired={true}/>
                        </div>
              <div className="col-md-12 mb-4">
                  <InputWithLabel
                        labelText="Last Name"
                        inputId="last_Name"
                        inputType="text"
                        onChange={(e) => setLastName(e.target.value)}
                        isRequired={true}/>
                        </div>
                        <div className="col-md-12 mb-4">
                  <InputWithLabel
                        labelText="Email Address"
                        inputId="email_Address"
                        inputType="email"
                        onChange={(e) => setEmailid(e.target.value)}
                        isRequired={true} />
                        </div>
                        <div className="col-md-12 mb-4">
                  <InputWithLabel
                        labelText="Password"
                        inputId="passwords"
                        type="password"
                        onChange={(e) => setPasswords(e.target.value)}
                        isRequired={true}/>
                        </div>
                        <div className="col-md-12 mb-4">
                  <InputWithLabel
                        labelText="Confirm Password"
                        inputId="confirm_password"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        isRequired={true}/>
                        </div>
                <br />
                <br />
                <Button btnText="Signup" type="submit" />
                <br />
              </form>
              <br />

              <br />
              <br />
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

