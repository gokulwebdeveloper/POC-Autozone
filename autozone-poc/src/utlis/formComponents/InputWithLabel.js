import React from "react";
import PropTypes from "prop-types";

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
            defaultValue=""
            {...etc}
          />
        </>
      );
      break;

    case "email":
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
            defaultValue=""
            {...etc}
          />
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
