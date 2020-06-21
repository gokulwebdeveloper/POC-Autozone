import React, {Fragment} from "react";


const Search = () => {
    return (
        <Fragment>
            <div class="search-area">
                <form action="#" method="post">
                    <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </Fragment>
    )
}

export default Search;  