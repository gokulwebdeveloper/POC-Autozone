import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
import { connect } from "react-redux";
import SlickSlider from "./slickSlider/SlickSlider";

function SimpleSlider(props) { 
    let settings = props.settings;
    let filterProductData = [];
    if(props.productData){
        props.productData.map((topCatagory, i) => {
            if(topCatagory.rating >= 4.5) {
                filterProductData.push(topCatagory);
            }
        })
    }
    return (
        <Fragment>
            <Slider {...settings}>
                {
                    filterProductData ? filterProductData.map((slideData, i) => 
                        <SlickSlider key={i}  currentProduct={slideData}/>
                    ) : ''
                }
            
            </Slider>
        </Fragment>
    );
} 

const mapStateToProps = productData => {
    return {
        productData: productData.productData.data
    };
  }

export default connect(mapStateToProps, null)(SimpleSlider);
