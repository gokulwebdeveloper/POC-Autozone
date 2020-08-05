import React, {useEffect} from 'react';
import '../../matchMedia.mock';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ProductDetails/ProductDetails.css';
import Button from '../../utlis/button/Button';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import {addToCart} from '../../Redux/actions';
import moment from 'moment';
import add from "../../assets/img/core-img/add.svg"
import minus from "../../assets/img/core-img/minus.svg"

const DetailsSection = ({currentProduct, dispatchAddToCart}) => {
    const nextDay = new Date();
    const today = new Date();
    nextDay.setDate(nextDay.getDate() + 1);

    const deliveryMessage = "Order Before 9:00 PM "+moment(today).format('MMM DD')+" for "+moment(nextDay).format('MMM DD')+" delivery";

    useEffect( ()=>{
        
        updateFavoriteIco(currentProduct);
        let txtcartquantity = document.getElementById("txtcartquantity");

        if(txtcartquantity)
        {
            if(currentProduct.product_instock)
                currentProduct.quantity ? txtcartquantity.value = currentProduct.quantity : txtcartquantity.value = 1;
            else
                txtcartquantity.value = 0;
        }

        let outOfStock = document.getElementById("outOfStock");
        if(outOfStock)
        {
            if(currentProduct.product_instock)
                outOfStock.style.visibility = "hidden";
            else
                outOfStock.style.visibility = "visible";
        }
     });

    return (
        <section className="single_product_details_area d-flex align-items-center">
            <div className="single_product_thumb clearfix">
            <Slider 
                    dots={true}
                    infinite={true}
                    speed={1000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    swipeToSlide={true}
                    initialSlide={0}
                    autoplay={true}
                    autoplaySpeed={4000}
                    arrows={true}
                    >

                    {
                    currentProduct.product_image ? 

                    currentProduct.product_image.map((image, index) => {
                    return (
                        <img src={image} alt={currentProduct.product_name} key={index}/>
                        )
                    })
                    
                    : "No Images"
                    }
                </Slider>
            </div>

            {/* <!-- Single Product Description --> */}
            <div className="single_product_desc clearfix">
                <span>{currentProduct.product_brand}</span>
                    <h2>{currentProduct.product_name}</h2>
                    <p className="rating-row">
                         <Rating
                    initialRating={currentProduct.rating}
                    readonly
                    className="rating"
                    emptySymbol="fa fa-star-o fa-2x" 
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                    />
                    <span className="rating-number">({currentProduct.rating})</span>
                    <span className="warranty">{currentProduct.warranty}</span>
                    </p>

                    <h6 id="outOfStock" className="outofstock">Out of stock</h6>
                   
                <p className="product-desc">{currentProduct.product_desc}</p>
            
                    <p className="product-price"><span className="old-price">${currentProduct.original_price}</span>
                    <span className="new-price"> $</span>
                        <span id="cartprice" className="new-price">{currentProduct.offer_price}</span></p>
                
                <div id="divQty" className="d-flex">
                <div className="d-flex">
                    <button id="btnDecreaseQty" className="quantitybutton"
                            onClick={()=>onDecreaseQty(currentProduct)} 
                            disabled={currentProduct.product_instock === true ? false : true}>
                        <img src={minus} alt="decrease button"/>
                    </button>
                </div>
                <div className="d-flex">
                    <input id="txtcartquantity" className="form-control quantitybox"
                    onChange={()=>onQtyChange(currentProduct)} onBlur={()=>onQtyLostFocus(currentProduct)} maxLength="1"
                    disabled={currentProduct.product_instock === true ? false : true}/>
                </div>
                <div className="d-flex">
                    <button className="quantitybutton"
                    onClick={()=>onIncreaseQty(currentProduct)}
                    disabled={currentProduct.product_instock === true ? false : true}>
                        <img src={add} alt="increase button"/>
                    </button>
                </div>
                </div>
                <div id="pricePerItem" className="priceperitem" ></div>
                
            <div className="orderByMessage">{deliveryMessage}</div>
                    {/* <!-- Cart & Favourite Box --> */}
                    <div className="cart-fav-box d-flex align-items-center">
                        <Button id="btnAddtoCart" btnText="Add to Cart" 
                        disabled={currentProduct.product_instock === true ? false : true}
                        onClick={()=>addToCartFn(currentProduct, dispatchAddToCart)}/>
                        {/* <!-- Favourite --> */}
                        <div className="product-favourite ml-4" onClick={changeFavStatus}>
                            <a id="favme" className="favme fa fa-heart"></a>
                        </div>
                    </div>
                    
            </div>
        </section>
    );
};

const maxAllowedQty = 5;

function addToCartFn(currentProduct, dispatchAddToCart)
{
    let txtcartquantity = document.getElementById("txtcartquantity");

    let qty = parseInt(txtcartquantity.value);

    addKeyValue(currentProduct,"quantity", qty);
    addKeyValue(currentProduct,"price", currentProduct.offer_price);

    dispatchAddToCart(currentProduct);
}

function updateFavoriteIco(currentProduct){
let currentCntrl = document.getElementById("favme");

if(currentCntrl!=null)
{
    if(currentProduct.isFavourite)
        currentCntrl.className = "favme fa fa-heart active";
    else
        currentCntrl.className = "favme fa fa-heart";
}
}

function changeFavStatus() {
let currentCntrl = document.getElementById("favme");

if(currentCntrl==null)
    return;

if(!currentCntrl.className.includes("active"))
    currentCntrl.className = "favme fa fa-heart active";
else
    currentCntrl.className = "favme fa fa-heart";
}

function onQtyChange(currentProduct)
{
let currentCntrl = document.getElementById("txtcartquantity");

if(currentCntrl==null)
    return;

let qty = parseInt(currentCntrl.value);

if(currentCntrl.value == null)
{
    currentCntrl.value = 1;
    updateEach(qty, currentProduct);
}
else if(qty > maxAllowedQty)
{
    currentCntrl.value = 1;
    updateEach(qty, currentProduct);
}
else if(qty > 1 && qty <= maxAllowedQty)
{
    updateCartPrice(currentProduct);
    updateEach(qty, currentProduct);
}
else
    return;
}

function onQtyLostFocus(currentProduct)
{
let currentCntrl = document.getElementById("txtcartquantity");

if(currentCntrl==null)
    return;

if(currentCntrl.value == null || currentCntrl.value == "")
{
    currentCntrl.value = 1;
    updateCartPrice(currentProduct);  
}
}

function onIncreaseQty(currentProduct)
{
let currentCntrl = document.getElementById("txtcartquantity");

if(currentCntrl==null)
    return;

if(currentCntrl.value == null || currentCntrl.value == "")
    currentCntrl.value = 1;
else
{
    let val = parseInt(currentCntrl.value);
    
    if(val < maxAllowedQty)
    {
        currentCntrl.value = val + 1;
        updateCartPrice(currentProduct);
    }
    else
        return;
}
}

function onDecreaseQty(currentProduct)
{
let currentCntrl = document.getElementById("txtcartquantity");

if(currentCntrl==null)
    return;

if(currentCntrl.value == null || currentCntrl.value == "")
    currentCntrl.value = 1;
else
{
    let val = currentCntrl.value;
    if(val > 1)
    {
        currentCntrl.value = val - 1;
        updateCartPrice(currentProduct);
    }
    else
        return;
}
}

function updateCartPrice(currentProduct)
{
let currentCntrl = document.getElementById("txtcartquantity");

if(currentCntrl==null)
    return;

let cartCntrl = document.getElementById("cartprice");

if(cartCntrl==null)
    return;

let qty = parseInt(currentCntrl.value);
let price = parseFloat(currentProduct.offer_price);
let total = qty * price;
cartCntrl.innerHTML = total;
updateEach(qty, currentProduct);
}

function updateEach(qty, currentProduct)
{
let pricePerItem = document.getElementById("pricePerItem");

if(pricePerItem==null)
    return;
        
if(qty == 1)
    pricePerItem.innerHTML = "";
else
    pricePerItem.innerHTML = "Each $ "+currentProduct.offer_price;
}

function addKeyValue(obj, key, data){
obj[key] = data;
}

DetailsSection.propTypes = {
    currentProduct: PropTypes.object,
    dispatchAddToCart: PropTypes.func
}

const mapStateToProps = productDetail =>{
    return productDetail;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatchAddToCart: product => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsSection);