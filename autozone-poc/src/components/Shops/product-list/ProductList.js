import React, { useState, useEffect, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import './ProductList.css';
import Product from './Product.js';
import PropTypes from 'prop-types';

const ProductList = () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [postData, setPostData] = useState([]);
    const perPage = 6;

    const fetchData = () => {
        const data = require('../data/products.json');
        const slice = data.slice(offset, offset + perPage);
        const postData = slice.map(pd => <Product key={pd.id} {...pd} />)
        setPageCount(Math.ceil(data.length / perPage));
        setPostData(postData);
        
        
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        setCurrentPage(selectedPage);
        setOffset(offset);

    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

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
                activeClassName={"active"}/>
        </Fragment>

    );
};

ProductList.propTypes = {
    pageCount: PropTypes.number,
    postData: PropTypes.array,
    
}

ProductList.defaultProps = {
    pageCount: 0,
    postData: [],
    
};

export default ProductList;