import React from 'react';
import PropTypes from 'prop-types';

export default function TopCatagoryArea(props) {
    return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={props.style}>

                    <div className="catagory-content">
                        <a href="#">{props.topCatagoryAreaText}</a>
                    </div>
                </div>
            </div>
    )
}

TopCatagoryArea.propTypes = {
    topCatagoryAreaText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number])
}

TopCatagoryArea.defaultProps = {
    topCatagoryAreaText: 'topCatagoryAreaText'
}