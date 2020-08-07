import React from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../../Redux/actions';


function SortBy(props) {
    const handleChange = (e) => {
        if(props.sortedProductData != undefined)
            props.sortProducts(props.sortedProductData, e.target.value);
    }

    return (
        <div className="product-sorting d-flex">
            <p>Sort by:</p>

            <form action="#" method="get">
                <select name="select" id="sortByselect" onChange={handleChange}>
                    <option value="highest-rated">Highest Rated</option>
                    <option value="hightolow">Price: high to low</option>
                    <option value="lowtohigh">Price: low to high</option>
                </select>
                <input type="submit" className="d-none" value=""></input>
            </form>

        </div>
    );
}

const mapStateToProps = ({ productData, sortedProductData }) => ({
    productData,
    sortedProductData
})
export default connect(mapStateToProps, { sortProducts })(SortBy);