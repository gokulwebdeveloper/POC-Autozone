import React from 'react';

export default function SortBy() {

    return(
        <div className="product-topbar d-flex align-items-center justify-content-between product-sorting d-flex">
            <p>Sort by:</p>

            <form action="#" method="get">
                <select name="select" id="sortByselect">
                    <option value="value">Highest Rated</option>
                    <option value="value">Newest</option>
                    <option value="value">Price: $$ - $</option>
                    <option value="value">Price: $ - $$</option>
                </select>
                <input type="submit" className="d-none" value=""></input>
            </form> 

        </div>
    );
}