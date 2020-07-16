import React, { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <div className="search-area">
        <form action="/shops" >
          <input
            type="search"
            name="search"
            id="headerSearch"
            placeholder="Type for search"
          />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
