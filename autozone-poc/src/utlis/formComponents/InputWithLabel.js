import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';
import './InputWithLabel.css';

export default function TextInput({
  labelText,
  inputId,
  inputType,
  isRequired,
  ...etc
}) {
  let inputLabel;
  switch (inputType) {
    case "text":
      function textValidationHandler(){
        let inputData = $(`#${inputId}`).val();
        if(isRequired && inputData === ''){
          $(`#${inputId} + .formErrorMsg`).text("Please provide some Input");
          $(`#${inputId} + .formErrorMsg`).show();
        }else{
          $(`#${inputId} + .formErrorMsg`).hide();
        }
      }
      inputLabel = (
        <>
          <label htmlFor={inputId}>
            {labelText} {isRequired ? <span>*</span> : null}
          </label>
          <input
            type="text"
            className="form-control"
            id={inputId}
            required={isRequired}
            onBlur = {textValidationHandler}
            defaultValue=""
            {...etc}
          />
          <p className="formErrorMsg"></p>
        </>
      );
      break;

      case "password":
      function passwordValidationHandler(){
        let inputData = $(`#${inputId}`).val();
        if(isRequired && (inputData === '' || inputData.length <= 8)){
          $(`#${inputId} + .formErrorMsg`).text("Please provide 8 characte password");
          $(`#${inputId} + .formErrorMsg`).show();
        }
        else {
          $(`#${inputId} + .formErrorMsg`).hide();
        }
      }
      inputLabel = (
        <>
          <label htmlFor={inputId}>
            {labelText} {isRequired ? <span>*</span> : null}
          </label>
          <input
            type="password"
            className="form-control"
            id={inputId}
            required={isRequired}
            onBlur = {passwordValidationHandler}
            defaultValue=""
            {...etc}
          />
          <p className="formErrorMsg"></p>
        </>
      );
      break;

      case "inputWithoutLabel":
      function inputValidationHandler(){
        let inputData = $(`#${inputId}`).val();
        if(isRequired && inputData === ''){
          $(`#${inputId} + .formErrorMsg`).text("Please provide some Input");
          $(`#${inputId} + .formErrorMsg`).show();
        }else{
          $(`#${inputId} + .formErrorMsg`).hide();
        }
      }
      inputLabel = (
        <>
          <input
            type="text"
            className="form-control"
            id={inputId}
            required={isRequired}
            onBlur = {inputValidationHandler}
            defaultValue=""
            {...etc}
          />
          <p className="formErrorMsg"></p>
        </>
      );
      break;

    case "email":
      function emailValidationHandler(){
        let inputData = $(`#${inputId}`).val();
        if(isRequired && (inputData === '' || inputData.indexOf('@') === -1 || inputData.indexOf('.') === -1)){
          $(`#${inputId} + .formErrorMsg`).text("Please provide proper email address");
          $(`#${inputId} + .formErrorMsg`).show();
        }else{
          $(`#${inputId} + .formErrorMsg`).hide();
        }
      }
      inputLabel = (
        <>
          <label htmlFor={inputId}>
            {labelText} {isRequired ? <span>*</span> : null}
          </label>
          <input
            type="email"
            className="form-control"
            id={inputId}
            required={isRequired}
            onBlur = {emailValidationHandler}
            defaultValue=""
            {...etc}
          />
          <p className="formErrorMsg"></p>
        </>
      );
      break;

    case "checkbox":
      inputLabel = (
        <div className="custom-control custom-checkbox d-block mb-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id={inputId}
            required={isRequired}
            {...etc}
          />
          <label className="custom-control-label" htmlFor={inputId}>
            {labelText} {isRequired ? <span>*</span> : null}
          </label>
        </div>
      );
      break;

    case "radio":
      inputLabel = (
        <div className="custom-control custom-radio d-block mb-2">
          <input
            type="radio"
            className="custom-control-input"
            id={inputId}
            required={isRequired}
            {...etc}
          />
          <label className="custom-control-label" htmlFor={inputId}>
            {labelText} {isRequired ? <span>*</span> : null}
          </label>
        </div>
      );
      break;
  }
  return inputLabel;
}

TextInput.propTypes = {
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

TextInput.defaultProps = {
  labelText: "label",
  inputType: "text",
  isRequired: true,
};
