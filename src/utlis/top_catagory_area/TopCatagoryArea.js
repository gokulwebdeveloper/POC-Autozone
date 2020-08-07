import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TopCatagoryArea(props) {
    const bgImgCatImg = {
        'backgroundImage': `url(${props.bgStyleImg})`
      }
    return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={bgImgCatImg}>
                    <div className="catagory-content">
                    <Link  to={{
                        pathname:'/shops',
                        filter: {
                        filterType: props.topCatagoryAreaText,
                        filter: 'All'
                        }
                      }}>{props.topCatagoryAreaText}</Link >
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