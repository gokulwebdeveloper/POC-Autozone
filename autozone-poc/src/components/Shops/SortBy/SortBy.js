import React from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../../Redux/actions';


function SortBy(props) {
    const handleChange = (e) => {
        console.log('Selected Value: ' + e.target.value);
        if (props.productFilterData == undefined ||
            props.productFilterData.data == undefined ||
            props.productFilterData.data.length == 0)
            props.sortProducts(props.productData, e.target.value);
        else
            props.sortProducts(props.productFilterData, e.target.value);
    }

    return (
        <div className="product-topbar d-flex align-items-center justify-content-between product-sorting d-flex">
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

const mapStateToProps = ({ productData, productFilterData }) => ({
    productData,
    productFilterData
})
export default connect(mapStateToProps, { sortProducts })(SortBy);