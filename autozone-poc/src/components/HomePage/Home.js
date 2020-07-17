import React from 'react';
import BgImg from '../../utlis/img/azo-product-img/homePageImages/autozone-banner2.jpg';
import BgImgCatArea from '../../utlis/img/azo-product-img/homePageImages/step-brake.jpg';
import PropTypes from 'prop-types';
import Button from '../../utlis/button/Button';
import TopCatagoryArea from '../../utlis/top_catagory_area/TopCatagoryArea';
import SimpleSlider from '../../utlis/slick_slider/SimpleSlider';
import ScrollUpArrowBtn from '../../utlis/button/ScrollUpArrowBtn';
import BrandArea from './Brands/BrandArea';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, getProductDetail } from '../../Redux/actions';


const Home = props => { 
  let topCatagoryData = [];
  let currentProduct;
  props.catagoryData ? props.catagoryData.map((topCatagory, i) => {
    currentProduct = topCatagory;
    if(topCatagory.offer_badge == "New") {
      topCatagoryData.push(topCatagory);
    }
  }) : ''
  const bgImgStyle = {
    'backgroundImage': `url(${BgImg})`
  }
  
  const bgImgCatArea = {
    'backgroundImage': `url(${BgImgCatArea})`
  }

  let customeSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  function addToCart()
    {
        let qty = 1;
        let price = parseFloat(currentProduct.offer_price);
        let total = parseFloat(qty * price);
        addKeyValue(currentProduct,"quantity", qty);
        addKeyValue(currentProduct,"price", total);
        props.dispatchAddToCart(currentProduct);
    }

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }

    return (
      <div>
        <ScrollUpArrowBtn/>
        <section className="welcome_area bg-img" style={bgImgStyle}>
          <div className="container h-140">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="hero-content">
                <Link  to={{
                        pathname:'/shops',
                        filter: {
                        filterType: "Accessories",
                        filter: 'All'
                        }
                      }}><Button btnText="view collection" /></Link >
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="top_catagory_area section-padding-80 clearfix">
          <div className="container">
            <div className="row justify-content-center">{
               topCatagoryData ? topCatagoryData.map((catagoryValues, i) => {
                return (
                  <TopCatagoryArea
                    key={i}
                    topCatagoryAreaText={catagoryValues.category}
                    bgStyleImg={catagoryValues.product_image[0]}
                  />
                )
              }) : ''
            }
            </div>
          </div>
        </div>
        <div className="cta-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-content background-overlay bg-img" style={bgImgCatArea}>
                  <div className="h-140 d-flex align-items-center justify-content-end">
                    <div className="cta--text">
                    <Button btnText="Buy Now" onClick={()=>props.getProductDetail(currentProduct.id), addToCart}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="new_arrivals_area section-padding-80 clearfix">
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
                  <SimpleSlider settings={customeSettings}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BrandArea />
        </section>
      </div>
    );
};
const mapStateToProps = productData => {
  return {
    catagoryData: productData.productData.data
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
      dispatchAddToCart: product => dispatch(addToCart(product)),
      getProductDetail: id => dispatch(getProductDetail(id))
  }
} 

Home.propTypes = {
  topCatagoryAreaText: PropTypes.string
};

Home.defaultProps = {
  topCatagoryAreaText: '',
  customeSettings: {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);