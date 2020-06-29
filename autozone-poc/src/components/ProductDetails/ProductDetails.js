import React from "react";
import '../../requiredLoader'
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import '../ProductDetails/ProductDetails.css';
import Button from '../../utlis/button/Button'

const ProductDetails = () => {
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

    function changeFavStatus() {
        var currentCntrl = document.getElementById("favme");

        if(currentCntrl==null)
            return;

        if(!currentCntrl.className.includes("active"))
            currentCntrl.className = "favme fa fa-heart active";
        else
            currentCntrl.className = "favme fa fa-heart";
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
     responsiveRefreshRate={200}
>

<div><img src="src/utlis/img/product-img/product-big-1.jpg" alt=""/></div>
<div><img src="src/utlis/img/product-img/product-big-2.jpg" alt=""/></div>
<div><img src="src/utlis/img/product-img/product-big-3.jpg" alt=""/></div>
</OwlCarousel>
</div>

        {/* <!-- Single Product Description --> */}
        <div className="single_product_desc clearfix">
            <span>mango</span>
            <a href="cart.html">
                <h2>One Shoulder Glitter Midi Dress</h2>
            </a>
            <p className="product-price"><span className="old-price">$65.00</span> $49.00</p>
            <p className="product-desc">Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>

            {/* <!-- Form --> */}
            <form className="cart-form clearfix" method="post">

                {/* <!-- Select Box --> */}
                <div className="select-box d-flex mt-50 mb-30">
                    <select id="productSize" className="nice-select mr-5">
                        <option >Size: XL</option>
                        <option >Size: X</option>
                        <option >Size: M</option>
                        <option >Size: S</option>
                    </select>
                    <select id="productColor" className="nice-select mr-5">
                        <option >Color: Black</option>
                        <option >Color: White</option>
                        <option >Color: Red</option>
                        <option >Color: Purple</option>
                    </select>
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

export default ProductDetails;