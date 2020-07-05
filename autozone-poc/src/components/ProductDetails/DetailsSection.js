import React, {useEffect} from 'react';
import '../../requiredLoader';
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import '../ProductDetails/ProductDetails.css';
import Button from '../../utlis/button/Button';

const DetailsSection = (props) => {
    const currentProduct = props.currentProduct;
    
    const maxAllowedQty = 5;
    useEffect( ()=>{
        updateFavoriteIco();
        var txtcartquantity = document.getElementById("txtcartquantity");

        if(txtcartquantity!=null)
        {
            if(currentProduct.product_instock)
                txtcartquantity.value = 1;
            else
                txtcartquantity.value = 0;
        }

        var outOfStock = document.getElementById("outOfStock");
        if(outOfStock!=null)
        {
            if(currentProduct.product_instock)
                outOfStock.style.visibility = "hidden";
            else
                outOfStock.style.visibility = "visible";
        }

        return ( ()=>{
            
        });
     }, [currentProduct]);

     function updateFavoriteIco()
     {
        var currentCntrl = document.getElementById("favme");

        if(currentCntrl!=null)
        {
            if(currentProduct.isFavourite)
                currentCntrl.className = "favme fa fa-heart active";
            else
                currentCntrl.className = "favme fa fa-heart";
        }
     }

     function changeFavStatus() {
        var currentCntrl = document.getElementById("favme");

        if(currentCntrl==null)
            return;

        if(!currentCntrl.className.includes("active"))
            currentCntrl.className = "favme fa fa-heart active";
        else
            currentCntrl.className = "favme fa fa-heart";
    }

    function onQtyChange()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;
        
        var qty = parseInt(currentCntrl.value);

        if(currentCntrl.value == null)
        {
            currentCntrl.value = 1;
            updateEach(qty);
        }
        else if(qty > maxAllowedQty)
        {
            currentCntrl.value = 1;
            updateEach(qty);
        }
        else if(qty > 1 && qty <= maxAllowedQty)
        {
            updateCartPrice();
            updateEach(qty);
        }
        else
            return;
    }

    function onQtyLostFocus()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;

        if(currentCntrl.value == null || currentCntrl.value == "")
        {
            currentCntrl.value = 1;
            updateCartPrice();  
        }
    }

    function onIncreaseQty()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;
        
        if(currentCntrl.value == null || currentCntrl.value == "")
            currentCntrl.value = 1;
        else
        {
            var val = parseInt(currentCntrl.value);
            
            if(val < maxAllowedQty)
            {
                currentCntrl.value = val + 1;
                updateCartPrice();
            }
            else
                return;
        }
    }

    function onDecreaseQty()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;
        
        if(currentCntrl.value == null || currentCntrl.value == "")
            currentCntrl.value = 1;
        else
        {
            var val = currentCntrl.value;
            if(val > 1)
            {
                currentCntrl.value = val - 1;
                updateCartPrice();
            }
            else
                return;
        }
    }

    function updateCartPrice()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;

        var cartCntrl = document.getElementById("cartprice");

        if(cartCntrl==null)
            return;

        var qty = parseInt(currentCntrl.value);
        var price = parseFloat(currentProduct.offer_price);
        var total = qty * price;
        cartCntrl.innerHTML = total;
        updateEach(qty);
    }

    function updateEach(qty)
    {
        var pricePerItem = document.getElementById("pricePerItem");
    
        if(pricePerItem==null)
            return;
                
        if(qty == 1)
            pricePerItem.innerHTML = "";
        else
            pricePerItem.innerHTML = "Each $ "+currentProduct.offer_price;
    }

    return (
        
        <section className="single_product_details_area d-flex align-items-center">
            <div className="single_product_thumb clearfix">
            <OwlCarousel
                className={'owl-carousel'}
                loop={true}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayTimeout={5000}
                autoplaySpeed={1000}
                fluidSpeed={1000}
                items={1}
                responsiveRefreshRate={200}>

                {currentProduct.product_image.map((image, index) => {
                    var imagePath = image.replace("../","../src/utlis/");
                return (
                    <div key={index}><img src={imagePath} alt="" /></div>
                    )
                })
                }
            </OwlCarousel>
            </div>

            {/* <!-- Single Product Description --> */}
            <div className="single_product_desc clearfix">
                <span>{currentProduct.product_brand}</span>
                    <h2>{currentProduct.product_name}</h2>
                    <h6 id="outOfStock" className="outofstock">Out of stock</h6>
                   
                <p className="product-desc">{currentProduct.product_desc}</p>
            
                    <p className="product-price"><span className="old-price">${currentProduct.original_price}</span>
                    <span className="new-price"> $</span>
                        <span id="cartprice" className="new-price">{currentProduct.offer_price}</span></p>
                
                <div id="divQty" className="d-flex">
                <div className="d-flex">
                    
                    <button id="btnDecreaseQty" className="quantitybutton"
                            onClick={onDecreaseQty} 
                            disabled={currentProduct.product_instock === true ? false : true}>
                        <img src="src/assets/img/core-img/minus.svg" alt="decrease button"/>
                    </button>
                </div>
                <div className="d-flex">
                    <input id="txtcartquantity" className="form-control quantitybox"
                    onChange={onQtyChange} onBlur={onQtyLostFocus} maxLength="1"
                    disabled={currentProduct.product_instock === true ? false : true}/>
                </div>
                <div className="d-flex">
                    <button className="quantitybutton"
                    onClick={onIncreaseQty}
                    disabled={currentProduct.product_instock === true ? false : true}>
                        <img src="src/assets/img/core-img/add.svg" alt="increase button"/>
                    </button>
                </div>
                </div>
                <div id="pricePerItem" className="priceperitem" ></div>

                {/* <!-- Form --> */}
                <form className="cart-form mt-30" method="post">
                    {/* <!-- Cart & Favourite Box --> */}
                    <div className="cart-fav-box d-flex align-items-center">
                        <Button id="btnAddtoCart" btnText="Add to Cart" 
                        disabled={currentProduct.product_instock === true ? false : true}/>
                        {/* <!-- Favourite --> */}
                        <div className="product-favourite ml-4" onClick={changeFavStatus}>
                            <a id="favme" className="favme fa fa-heart"></a>
                        </div>
                    </div>
            </form>
            </div>
        </section>
    );
};

export default DetailsSection;