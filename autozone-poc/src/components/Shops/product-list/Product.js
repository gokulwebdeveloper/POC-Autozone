import React from 'react';
import Button from '../../../utlis/button/Button';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import {addToCart, getProductDetail} from '../../../Redux/actions';
import {Link} from 'react-router-dom';

const Product = (props) => {
    const detailsPath = "/single-product-details/"+props.productData.id;
    const currentProduct = props.productData;

    function addToCart()
    {
        let total = parseFloat(currentProduct.offer_price);
        addKeyValue(currentProduct,"quantity", 1);
        addKeyValue(currentProduct,"price", total);

        props.dispatchAddToCart(currentProduct);
    }

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
    
    return(
        <div className="col-12 col-sm-6 col-lg-4"> 
            <div className="single-product-wrapper">
                
                <div className="product-img">
                    <img src={currentProduct.product_image[0]} alt={""} />
                    
                    <img className="hover-img" src={currentProduct.product_image[1]} alt="" />

                    <div className="product-badge offer-badge">
                        <span>{currentProduct.offer_badge}</span>
                    </div>
                    
                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <span>{currentProduct.product_brand}</span>
                    <Link to={detailsPath} onClick={()=>props.dispatchGetProductDetail(currentProduct.id)}>
                        <h6>{currentProduct.product_name}</h6>
                    </Link>
                    <Rating
                            initialRating={currentProduct.rating}
                            readonly
                            className="rating"
                            emptySymbol="fa fa-star-o fa-2x" 
                            fullSymbol="fa fa-star fa-2x"
                            fractions={2}
                        />
                <p className="product-price">
                    <span className="old-price">${currentProduct.original_price}</span> ${currentProduct.offer_price}
                </p>

                    
                    <div className="hover-content">
                        
                        <div className="add-to-cart-btn">
                        <Button id="btnAddtoCart" btnText="Add to Cart" 
                            onClick={addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
                            
    );
};

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatchAddToCart: product => dispatch(addToCart(product)),
        dispatchGetProductDetail: id => dispatch(getProductDetail(id))
    }
}

export default connect(null, mapDispatchToProps) (Product);
