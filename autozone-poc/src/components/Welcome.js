import React from 'react';
import BgImg from '../utlis/img/bg-img/bg-1.jpg';
import BgImgTopCatArea1 from '../utlis/img/bg-img/bg-2.jpg';
import BgImgTopCatArea2 from '../utlis/img/bg-img/bg-3.jpg';
import BgImgTopCatArea3 from '../utlis/img/bg-img/bg-4.jpg';
import BgImgCatArea from '../utlis/img/bg-img/bg-5.jpg';
import PropTypes from 'prop-types';
import Button from '../utlis/button/Button';
import TopCatagoryArea from '../utlis/top_catagory_area/TopCatagoryArea';
import SimpleSlider from '../utlis/slick_slider/SimpleSlider';

const Welcome = props => {
    const bgImgStyle = {
        'backgroundImage': `url(${BgImg})`
    }  
    const bgImgTopCatArea1 = {
      'backgroundImage': `url(${BgImgTopCatArea1})`
  }  
  const bgImgTopCatArea2 = {
    'backgroundImage': `url(${BgImgTopCatArea2})`
}  
const bgImgTopCatArea3 = {
  'backgroundImage': `url(${BgImgTopCatArea3})`
}  
const bgImgCatArea = {
  'backgroundImage': `url(${BgImgCatArea})`
}

    return (
      <div>
        <section className="welcome_area bg-img" style={bgImgStyle}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="hero-content">
                  <h6>asoss</h6>
                  <h2>New Collection</h2>
                  <Button btnText="view collection" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="top_catagory_area section-padding-80 clearfix">
          <div className="container">
            <div className="row justify-content-center">
              <TopCatagoryArea topCatagoryAreaText="Clothing" style={bgImgTopCatArea1} />
              <TopCatagoryArea topCatagoryAreaText="Shoes" style={bgImgTopCatArea2} />
              <TopCatagoryArea topCatagoryAreaText="Accessories" style={bgImgTopCatArea3} />
            </div>
          </div>
        </div>
        <div className="cta-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-content background-overlay bg-img" style={bgImgCatArea}>
                  <div className="h-100 d-flex align-items-center justify-content-end">
                    <div className="cta--text">
                      <h6>-60%</h6>
                      <h2>Global Sale</h2>
                      <Button btnText="Buy Now" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Popular Products</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="popular-products-slides owl-carousel owl-theme owl-loaded">
                  <SimpleSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="brands-area d-flex align-items-center justify-content-between">
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand1.png' alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand2.png' alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand3.png' alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand4.png' alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand5.png' alt=""/>
        </div>
        <div class="single-brands-logo">
            <img src='src/utlis/img/core-img/brand6.png' alt=""/>
        </div>
        </div>
      </div>
    );
};

Welcome.propTypes = {
    
};

export default Welcome;