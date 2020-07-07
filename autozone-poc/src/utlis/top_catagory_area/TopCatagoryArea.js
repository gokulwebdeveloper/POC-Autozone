import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function TopCatagoryArea(props) {

    const bgImgTopCatArea = {
        'backgroundImage': `url(${props.style})`
    }
    return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={bgImgTopCatArea}>
                    <div className="catagory-content">
                    <NavLink to="/shops">{props.topCatagoryAreaText}</NavLink>
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