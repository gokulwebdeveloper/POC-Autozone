import React from 'react';
import BgImg from '../../utlis/img/bg-img/breadcumb.jpg';
import PropTypes from 'prop-types';

export default function BreadcrumbArea({title}) {
    const bgImgStyle = {
        'backgroundImage': `url(${BgImg})`
    }    
    return (
    <div className="breadcumb_area bg-img" style={bgImgStyle}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="page-title text-center">
                    <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

BreadcrumbArea.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number])
}

BreadcrumbArea.defaultProps = {
    title: 'title'
}  
