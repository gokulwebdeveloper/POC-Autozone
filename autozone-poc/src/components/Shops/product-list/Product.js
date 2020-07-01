import React from 'react';

const Product = (props) => {
    const detailsPath = "/single-product-details?id="+props.id;
    let imageId = props.id;
    
    if(imageId > 9){
        imageId = imageId % 9;
        if(imageId == 0){
            imageId = 9;
        }
    }

    let imgpath="../../../../src/utlis/img/product-img/product-"+imageId+".jpg";
    return(
        <div className="col-12 col-sm-6 col-lg-4"> 
            <div className="single-product-wrapper">
                
                <div className="product-img">
                    <img src={(props.product_image)} alt={""} />
                    {console.log('Image Id '+ imgpath)}
                    {/* <img src={imgpath} alt={""} /> */}
                    
                    <img className="hover-img" src={(props.product_image)} alt="" />
                    
                    <div className="product-badge offer-badge">
                        <span>{props.offer_badge}</span>
                    </div>
                    
                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <span>{props.product_brand}</span>
                    <a href={detailsPath} >
                        <h6>{props.product_name}</h6>
                    </a>
                <p className="product-price">
                    <span className="old-price">${props.original_price}</span> ${props.offer_price}
                    {/* <span className="old-price">$125</span> $95.65 */}
                    </p>

                    
                    <div className="hover-content">
                        
                        <div className="add-to-cart-btn">
                            <a href="#" className="btn essence-btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
                            
    );
};

export default Product;