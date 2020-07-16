import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { searchProduct } from '../../Redux/actions';

const Search = (props) => {
  
  const history = useHistory();
  function onSearchProduct(event){
    if(event.key === 'Enter') {
      let keyword = event.target.value;
      props.searchProduct(props.productData, keyword);
      history.push("/shops?search="+keyword);
    }
    
  }

  return (
    <Fragment>
      <div className="search-area">
      <input
            type="search"
            name="search"
            id="headerSearch"
            placeholder="Type for search"
            onKeyDown= {onSearchProduct}
          />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ productData }) => ({
  productData
})

export default connect(mapStateToProps, {searchProduct}) (Search);
