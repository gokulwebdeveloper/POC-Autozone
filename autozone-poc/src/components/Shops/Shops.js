import React, { Fragment, useState } from "react";
import Catagory from './Catagory/Catagory'
import ShopsHeader from "./ShopsHeader/ShopsHeader";
import Brand from "./Brand/Brand";
import Slider from "./Slider/Slider";
import SortBy from "./SortBy/SortBy";
import ProductList from "./product-list/ProductList";
import { connect } from "react-redux";

function Shops(props) {

	var brandList = [
		"Duralast",
		"Brakeware",
		"XtraVision",
		"Sylvania Automotive",
		"STP",
		"K&N",
		"SureBilt radiators",
		"Everco",
		"Pilot",
		"Pro Glide",
		"ProElite"
	];

	var categoryList = [{
		"title": "Brakes and Traction Control",
		"items": [
			"All",
			"Brake Rotor",
			"Brake Power Booster",
			"Hoodies Sweats",
			"Brake Shoes Rear",
			"Wheel Cylinder Rear"
		]
	},
	{
		"title": "Collision Body Parts and Hardware",
		"items": [
			"All",
			"Headlight"
		]
	},
	{
		"title": "Ignition Tune Up and Routine Maintenance",
		"items": [
			"All",
			"Battery",
			"Oil Filter"
		]
	},
	{
		"title": "Cooling, Heating and Climate Control",
		"items": [
			"All",
			"Radiator",
			"AC Compressor",
			"Water Pump"
		]
	},
	{
		"title": "Interior",
		"items": [
			"All",
			"Universal Seat Belt",
			"Seat Cover"
		]
	}
	];
	const [sortBy, setSortBy] = useState('');
	const handleSortBy = (sortByValue) => {
		setSortBy(sortByValue)
	}

	return (
		<Fragment>
			<ShopsHeader heading="Auto Spares" />
			<section className="shop_grid_area section-padding-80">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-3">

							<div className="shop_sidebar_area">

								<div className="widget catagory mb-50">
									<h6 className="widget-title mb-30">Catagories</h6>
									<div className="catagories-menu">
										<ul id="menu-content2" className="menu-content show">
											<Catagory data={categoryList[0]} id="Brakes" />
											<Catagory data={categoryList[1]} id="Collision" />
											<Catagory data={categoryList[2]} id="Ignition" />
											<Catagory data={categoryList[3]} id="Cooling" />
											<Catagory data={categoryList[4]} id="Interior" />
										</ul>
									</div>
								</div>

								<Slider min={(props.productFilterByRangeData != undefined &&
									props.productFilterByRangeData.min != undefined)
									? props.productFilterByRangeData.min : '0'}
									max={(props.productFilterByRangeData != undefined &&
										props.productFilterByRangeData.max != undefined)
										? props.productFilterByRangeData.max : '300'}
								/>
								<Brand brandList={brandList} />
							</div>
						</div>

						{/* main container*/}
						<div className="col-12 col-md-8 col-lg-9">
							<div className="shop_grid_product_area">

								<div className="row">
									<div className="col-md-8 col-sm-12 col-lg-8">

										<div className="product-topbar d-flex align-items-center justify-content-between">
											
											<div className="total-products">
												<p>
													<span>
														{(props.sortedProductData == undefined ||
															props.sortedProductData.data == undefined) ? 0 : props.sortedProductData.data.length}
													</span>
													&nbsp;products found
												</p>
											</div>

										</div>
										
									</div>
									<div className="col-md-4 col-sm-12 col-lg-4 product-topbar">
												<SortBy onSelectedSortBy={handleSortBy} />
											</div>
								</div>
								


							</div>
							<ProductList filter={props.location.filter} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

const mapStateToProps = ({ sortedProductData, productFilterByRangeData }) => ({
	sortedProductData: sortedProductData,
	productFilterByRangeData: productFilterByRangeData
})

export default connect(mapStateToProps, null)(Shops);