import React, { Component, Fragment } from 'react';
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './ProductList.css';
import Product from './Product.js';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          data: [],
          perPage: 6,
          currentPage: 0
        };
    this.handlePageClick = this.handlePageClick.bind(this);
    }

    receivedData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
  
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    {/* <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt=""/> */}
                    <Product key={pd.Id} {...pd} />
                </React.Fragment>)
  
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
  
    };
  
    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <Fragment>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </Fragment>
  
        )
    }
}

export default ProductList;

// import React, { Fragment } from 'react';
// import Product from './Product';
// import PropTypes from 'prop-types';
// import Pagination from '../Pagination/Pagination';

// const ProductList = () => {
//     const products = require('../data/products.json');
    
//     return(
//         <Fragment>
//             {console.log("List of products"+JSON.stringify(products))}
//                 {products.map(product => (
//                    <Product id="product" {...product} />
//                 ))}
//                 <Pagination totalCount={products.length} {...products}/>
//         </Fragment>
//     );
// };

// ProductList.propTypes = {
//     products: PropTypes.array,
// }

// export default ProductList;