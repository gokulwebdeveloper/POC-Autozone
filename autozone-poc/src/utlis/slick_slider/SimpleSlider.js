import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'

function SimpleSlider(props) { 
    let settings = props.settings;
    let filterProductData = [];
    props.productData ? props.productData.map((topCatagory, i) => {
        if(topCatagory.rating >= 4.5) {
            filterProductData.push(topCatagory);
        }
      }) : ''
    return (
        <div>
            <Slider {...settings}>
                {
                    filterProductData ? filterProductData.map((slideData, i) => 
                        <SlickSlider key={i}  currentProduct={slideData}/>
                    ) : ''
                }
            
            </Slider>
        </div>
    );
} 

export default connect(mapStateToProps, null)(SimpleSlider);
