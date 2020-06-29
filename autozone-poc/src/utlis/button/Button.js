import React from "react";
import PropTypes from "prop-types";

export default function Button({ btnText, ...etc }) {
  return <button className="btn essence-btn" {...etc} >{btnText}</button>;
}

Button.propTypes = {
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  btnText: "button",
};
