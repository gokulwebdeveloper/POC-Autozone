import React from 'react';
import PropTypes from 'prop-types';

export default function Button({btnText}) {
    return (
        <button className="btn essence-btn">{btnText}</button>
    )
}

Button.propTypes = {
    btnText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number])
}

Button.defaultProps = {
    text: 'button'
}    