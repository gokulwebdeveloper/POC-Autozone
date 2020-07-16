import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
import SlickSlider from "./slickSlider/SlickSlider";
import { connect } from "react-redux";

function SimpleSlider(props) { 
    let settings = props.settings;
    return (
        <div>
            <Slider {...settings}>
                {
                    props.productData ? props.productData.map((slideData, i) => 
                        <SlickSlider key={i}  slideData={slideData}/>
                    ) : ''
                }
            
            </Slider>
        </div>
    );
}

const mapStateToProps = productData => {
    return {
      productData: productData.productData.data
    };
  }

export default connect(mapStateToProps, null)(SimpleSlider);
