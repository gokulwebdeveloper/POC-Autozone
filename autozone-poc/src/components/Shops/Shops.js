import React, { Fragment, useEffect } from "react";
import Catagory from './Catagory/Catagory'
import ShopsHeader from "./ShopsHeader/ShopsHeader";
import ColorBox from "./ColorBox/ColorBox";
import Brand from "./Brand/Brand";
import Slider from "./Slider/Slider";
import SortBy from "./SortBy/SortBy";
import Pagination from "./Pagination/Pagination"
import ProductList from "./product-list/ProductList";

export default function Shops() {

	var colors = [
		"color1",
		"color2",
		"color3",
		"color4",
		"color5",
		"color6",
		"color7",
		"color8",
		"color9",
		"color10"
	];

	var brandList = [
		"Asos",
		"Mango",
		"River Island",
		"Topshop",
		"Zara"
	];

	var categoryList = [{
		"title": "clothing",
		"items": [
			"All",
			"Bodysuits",
			"Dresses",
			"Hoodies Sweats",
			"Jackets Coats",
			"Jeans",
			"Pants Leggings",
			"Rompers Jumpsuits",
			"Shirts Blouses",
			"Shirts",
			"Sweaters &amp; Knits"
		]
	},
	{
		"title": "shoes",
		"items": [
			"All",
			"Sadals",
			"Heels Slipper",
			"Shoes"
		]
	},
	{
		"title": "accessories",
		"items": [
			"All",
			"Watch",
			"Pen drivers"
		]
	}
	];

	return (
		<Fragment>
			<ShopsHeader heading="dresses" />
			<section className="shop_grid_area section-padding-80">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-3">

							<div className="shop_sidebar_area">

								<div className="widget catagory mb-50">
									<h6 className="widget-title mb-30">Catagories</h6>
									<div className="catagories-menu">
										<ul id="menu-content2" className="menu-content collapse show">
											<Catagory data={categoryList[0]} datatarget="#clothing" id="clothing" />
											<Catagory data={categoryList[1]} datatarget="#shoes" id="shoes" />
											<Catagory data={categoryList[2]} datatarget="#accessories" id="accessories" />
										</ul>
									</div>
								</div>

								<Slider min="49" max="360" />
								<ColorBox colors={colors} />
								<Brand brandList={brandList} />
							</div>
						</div>

						{/* main container*/}
						<div className="col-12 col-md-8 col-lg-9">
							<div className="shop_grid_product_area">

								<div className="row">
									<div className="col-12">
										<div className="product-topbar d-flex align-items-center justify-content-between">
											<div className="total-products">
												<p><span>186</span> products found</p>
											</div>
											<SortBy />
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<ProductList />
							</div>

						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}