import React from 'react';
import bgImgBrands1 from '../../../utlis/img/core-img/brand1.png';
import bgImgBrands2 from '../../../utlis/img/core-img/brand2.png';
import bgImgBrands3 from '../../../utlis/img/core-img/brand3.png';
import bgImgBrands4 from '../../../utlis/img/core-img/brand4.png';
import bgImgBrands5 from '../../../utlis/img/core-img/brand5.png';
import bgImgBrands6 from '../../../utlis/img/core-img/brand6.png';
import PropTypes from 'prop-types';

const BrandArea = props => {
    
    return (
        <div>
            <div className="brands-area d-flex align-items-center justify-content-between">
                <div className="single-brands-logo">
                    <img src={bgImgBrands1} alt="topshop" />
                </div>
                <div className="single-brands-logo">
                    <img src={bgImgBrands2} alt="mango" />
                </div>
                <div className="single-brands-logo">
                    <img src={bgImgBrands3} alt="zara" />
                </div>
                <div className="single-brands-logo">
                    <img src={bgImgBrands4} alt="bershka" />
                </div>
                <div className="single-brands-logo">
                    <img src={bgImgBrands5} alt="asos" />
                </div>
                <div className="single-brands-logo">
                    <img src={bgImgBrands6} alt="river island" />
                </div>
            </div>
        </div>
    );
};
export default BrandArea;