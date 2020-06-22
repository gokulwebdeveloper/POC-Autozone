import React from 'react';


const Product = (props) => {
    console.log("Props"+JSON.stringify(props));
    
    let imageId = props.id;
    
    if(imageId > 9){
        imageId = imageId % 9;
        if(imageId == 0){
            imageId = 9;
        }
    }

    console.log("Props>>"+imageId);
    let imgpath="../../../../src/utlis/img/product-img/product-"+imageId+".jpg";
    return(
        <div className="col-12 col-sm-6 col-lg-4"> 
            <div className="single-product-wrapper">
                
                <div className="product-img">
                    {/* <img src={(props.product_image)} alt={""} /> */}
                    {console.log('Image Id '+ imgpath)}
                    <img src={imgpath} alt={""} />
                    
                    <img className="hover-img" src={imgpath} alt="" />

                    
                    <div className="product-badge offer-badge">
                        <span>-30%</span>
                    </div>
                    
                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>

                
                <div className="product-description">
                    <span>Topshop</span>
                    <a href="single-product-details.html">
                        {/* <h6>{props.product_name}</h6> */}
                        <h6>{props.title}</h6>
                    </a>
                <p className="product-price">
                    {/* <span className="old-price">${props.original_price}</span> ${props.offer_price} */}
                    <span className="old-price">$125</span> $95.65
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