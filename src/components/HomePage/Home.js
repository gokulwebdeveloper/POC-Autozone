import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../utlis/button/Button';
import TopCatagoryArea from '../../utlis/top_catagory_area/TopCatagoryArea';
import SimpleSlider from '../../utlis/slick_slider/SimpleSlider';
import ScrollUpArrowBtn from '../../utlis/button/ScrollUpArrowBtn';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, getProductDetail } from '../../Redux/actions';
import {Helmet} from 'react-helmet';


const Home = props => { 
  let topCatagoryData = [];
  let currentProduct;
  if(props.catagoryData){ 
    props.catagoryData.map((topCatagory, i) => {
      currentProduct = topCatagory;
      if(topCatagory.offer_badge == "New") {
        topCatagoryData.push(topCatagory);
      }
    })
  }
  
  let customeSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  function addToCart()
    {
        let qty = 1;
        let price = parseFloat(currentProduct.offer_price);
        let total = parseFloat(qty * price);
        addKeyValue(currentProduct,"quantity", qty);
        addKeyValue(currentProduct,"price", total);
        props.dispatchAddToCart(currentProduct);
        openNav();
    }

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
    function openNav() {
        let  cartOverlayContent = document.getElementById("cartOverlayContent");
        if(cartOverlayContent==null) 
          return;
        cartOverlayContent.className = cartOverlayContent.className+" cart-on";
      
        let  cartOverlay = document.getElementById("cartOverlay");
        if(cartOverlay==null) 
          return;
        cartOverlay.className = cartOverlay.className+" cart-bg-overlay-on";
      }
    return (
      <Fragment>
        <Helmet>
          <meta charset="utf-8"/>
          <title>Autozone Home</title>
          <meta name="description" content="This is Autozone Home page information with products"/>
        </Helmet>
        <ScrollUpArrowBtn/>
        <section className="welcome_area bg-img" style={{backgroundImage: `url('img/azo-product-img/homePageImages/autozone-banner2.jpg')`}}>
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
                <div className="cta-content background-overlay bg-img" style={{backgroundImage: `url('img/azo-product-img/homePageImages/step-brake.jpg')`}}>
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
        </section>
      </Fragment>
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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);