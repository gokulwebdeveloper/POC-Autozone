import React, { useState, useEffect, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import './ProductList.css';
import Product from './Product.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortProducts, filterProducts, setFilterProducts, filterProductsByRange, searchProduct } from '../../../Redux/actions';

const ProductList = (props) => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [postData, setPostData] = useState([]);
    const [noProduct, setNoProduct] = useState(true);
    const perPage = 6;
    var data;

    let search = (new URLSearchParams(window.location.search)).get("search")
    
    const loadAllData = () => {
        if (props.sortedProductData == undefined || props.sortedProductData.data == undefined ||
            props.sortedProductData.data.length == 0) {
            setNoProduct(true)
            return;
        }

        if (props.sortedProductData == undefined || props.sortedProductData.data == undefined ||
            props.sortedProductData.data.length == 1) {
            if (props.sortedProductData.data[0] == null) {
                setNoProduct(true)
                return;
            }
        }
        const slice = props.sortedProductData.data.slice(offset, offset + perPage);
        data = slice.map(pd =>
            <React.Fragment key={pd.id}>
                <Product productData={pd} />
            </React.Fragment>)
        setPageCount(Math.ceil(props.sortedProductData.data.length / perPage));
        setPostData(data);
        setNoProduct(false)
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(selectedPage);
        setOffset(offset);
    };

    useEffect(() => {
        if (props.productData != undefined &&
            props.productData.data != undefined &&
            props.productData.data.length > 0) {
                if(search != undefined && search != null){
                    props.searchProduct(props.productData, search);
                } else {
                    props.setFilterProducts(props.productData.data);
                }
            
        }
    }, [props.productData]);

    useEffect(() => {
        if (props.filter != undefined &&
            props.filterProducts != undefined) {
            props.filterProducts(props.productData, props.filter.filter, props.filter.filterType);
        }
    }, [props.filter])

    useEffect(() => {
        if (props.productFilterData == undefined ||
            props.productFilterData.data == undefined ||
            props.productFilterData.data.length == 0) {
                props.sortProducts(undefined);
        } else {
            if (props.productFilterByRangeData != undefined &&
                props.productFilterByRangeData.min != undefined) {
                props.filterProductsByRange(props.productFilterData, props.productFilterByRangeData.min, 
                    props.productFilterByRangeData.max);
            } else {
                if (props.sortedProductData.sortType == undefined)
                    props.sortProducts(props.productFilterData, 'highest-rated');
                else
                    props.sortProducts(props.productFilterData, props.sortedProductData.sortType);
            }
            setCurrentPage(0);
            setOffset(0);
        }

    }, [props.productFilterData]);


    useEffect(() => {
        if (props.productFilterByRangeData == undefined ||
            props.productFilterByRangeData.data == undefined ||
            props.productFilterByRangeData.data.length == 0) {
            props.sortProducts(undefined);
        } else {
            if (props.sortedProductData.sortType == undefined)
                props.sortProducts(props.productFilterByRangeData, 'highest-rated');
            else
                props.sortProducts(props.productFilterByRangeData, props.sortedProductData.sortType);
            setCurrentPage(0);
            setOffset(0);
        }

    }, [props.productFilterByRangeData]);

    useEffect(() => {
        loadAllData();
    }, [currentPage, props.sortedProductData]);

    useEffect(() => {
        if(props.searchResultsData != undefined &&
            props.searchResultsData.data != undefined &&
            props.searchResultsData.data.length > 0) {
                if (props.sortedProductData.sortType == undefined)
                    props.sortProducts(props.searchResultsData, 'highest-rated');
                else 
                    props.sortProducts(props.searchResultsData, props.sortedProductData.sortType);
                
            }
    }, [props.searchResultsData]);

    if (noProduct) {
        return <p>No Product Found</p>
    } else {
        return (
            <Fragment>
                <div className="row justify-content-center align-self-center">
                    {postData}
                </div>
                <div className="row justify-content-center align-self-center">
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
                </div>

            </Fragment>

        );
    }

};

ProductList.propTypes = {
    pageCount: PropTypes.number,

};

ProductList.defaultProps = {
    pageCount: 0,

};

const mapStateToProps = ({ productFilterData, productData, sortedProductData, productFilterByRangeData, searchResultsData, searchProduct }) => ({
    productFilterData: productFilterData,
    productData: productData,
    sortedProductData: sortedProductData,
    productFilterByRangeData: productFilterByRangeData,
    searchResultsData: searchResultsData,
    searchProduct: searchProduct

});

export default connect(mapStateToProps, { sortProducts, filterProducts, setFilterProducts, filterProductsByRange, searchProduct })(ProductList)