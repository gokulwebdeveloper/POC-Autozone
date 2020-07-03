import React, {useEffect} from 'react';
import '../../requiredLoader';
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import '../ProductDetails/ProductDetails.css';
import Button from '../../utlis/button/Button';

const DetailsSection = (props) => {
    const currentProduct = props.currentProduct;

    useEffect( ()=>{
        updateFavoriteIco();
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl)
            currentCntrl.value = 1;

        return ( ()=>{
           console.log('ImageListHooks: componentWillUnmount');
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
        
        if(currentCntrl.value == null)
            currentCntrl.value = 1;
        else if(currentCntrl.value > 5)
        {
            currentCntrl.value = 1;
        }
        else
            return;
    }

    function onIncreaseQty()
    {
        var currentCntrl = document.getElementById("txtcartquantity");

        if(currentCntrl==null)
            return;
        
        if(currentCntrl.value == null)
            currentCntrl.value = 1;
        else
        {
            var val = parseInt(currentCntrl.value);
            
            if(val < 5)
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
        
        if(currentCntrl.value == null)
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

        var val = parseInt(currentCntrl.value);
                var price = parseFloat(currentProduct.offer_price);
                var total = val * price;
                cartCntrl.innerHTML = total;
    }
    
    var styleDisplayNone = {
        display:'none',
     };

     var styleowlstage = {
        transform: 'translate3d(-2295px, 0px, 0px)',
         transition: 'all 1s ease 0s',
         width: 3213
    };

    var styleowlitems = {
       width: 459,
    };

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
     responsiveRefreshRate={200}
>

<div><img src={currentProduct.product_image} alt=""/></div>
</OwlCarousel>
</div>

        {/* <!-- Single Product Description --> */}
        <div className="single_product_desc clearfix">
            <span>{currentProduct.product_brand}</span>
                <h2>{currentProduct.product_name}</h2>
            <p className="product-desc">{currentProduct.product_desc}</p>
           
            <div >
                <p className="product-price"><span className="old-price">${currentProduct.original_price}</span>
                <span className="new-price"> $</span>
                    <span id="cartprice" className="new-price">{currentProduct.offer_price}</span></p>
            
            <div className="d-flex">
            <div className="d-flex">
                <button className="single_product_desc quantitybutton"
                        onClick={onDecreaseQty}>
                    <img src="src/assets/img/core-img/minus.svg" alt="decrease button"/>
                </button>
            </div>
            <div className="d-flex">
                <input id="txtcartquantity" className="form-control quantitybox"
                onChange={onQtyChange} maxLength="1"/>
            </div>
            <div className="d-flex">
                <button className="single_product_desc quantitybutton"
                onClick={onIncreaseQty}>
                    <img src="src/assets/img/core-img/add.svg" alt="increase button"/>
                </button>
            </div>
            </div>
            </div>

            {/* <!-- Form --> */}
            <form className="cart-form clearfix" method="post">
            
                {/* <!-- Select Box --> */}
                <div className="select-box d-flex mt-50 mb-30">
                    
                </div>
                {/* <!-- Cart & Favourite Box --> */}
                <div className="cart-fav-box d-flex align-items-center">
                    <Button btnText="Add to Cart"/>
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