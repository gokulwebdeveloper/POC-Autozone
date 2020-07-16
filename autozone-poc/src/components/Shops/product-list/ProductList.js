import React, { useState, useEffect, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import './ProductList.css';
import Product from './Product.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortProducts } from '../../../Redux/actions';

const ProductList = (props) => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [postData, setPostData] = useState([]);
    const perPage = 6;
    var data;
    
    const loadAllData = () => {
        if (props.sortedProductData == undefined || props.sortedProductData.data == undefined ||
            props.sortedProductData.data.length <= 1) return;
        const slice = props.sortedProductData.data.slice(offset, offset + perPage);
        data = slice.map(pd =>
            <React.Fragment key={pd.id}>
                <Product productData={pd} />
            </React.Fragment>)
        setPageCount(Math.ceil(props.sortedProductData.data.length / perPage));
        setPostData(data);
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(selectedPage);
        setOffset(offset);
    };

    useEffect(() => {
        if (props.productFilterData == undefined ||
            props.productFilterData.data == undefined ||
            props.productFilterData.data.length == 0) {
            props.sortProducts(props.productData, 'highest-rated');
        } else {
            props.sortProducts(props.productFilterData, props.sortedProductData.sortType);
        }

    }, [props.productFilterData, props.productData]);

     useEffect(() => {
         loadAllData();
     }, [currentPage, props.sortedProductData]);

    return (
        <Fragment>
            {postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </Fragment>

    );
};

ProductList.propTypes = {
    pageCount: PropTypes.number,

}

ProductList.defaultProps = {
    pageCount: 0,

};

const mapStateToProps = ({ productFilterData, productData, sortedProductData }) => ({
    productFilterData: productFilterData,
    productData: productData,
    sortedProductData: sortedProductData
})

export default connect(mapStateToProps, { sortProducts })(ProductList);