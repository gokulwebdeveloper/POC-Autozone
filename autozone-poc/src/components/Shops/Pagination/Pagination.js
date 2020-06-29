import React from 'react';
import PageItem from './PageItem';

export default function Pagination() {

    var itemDetail = {
        "totalcount": 188
    };

    var pagecount = Math.floor(itemDetail.totalcount / 9);
    var pagearray = Array.from(Array(pagecount), (_, i) => i + 1)

    if (pagearray.length > 5) {
        var lastValue = pagearray.pop();
        pagearray = pagearray.slice(0, 3);
        pagearray.push('...');
        pagearray.push(lastValue);
    }


    return (
        <nav aria-label="navigation">
            <ul className="pagination mt-50 mb-70">
                <li className="page-item"><a className="page-link" href="#">
                    <i className="fa fa-angle-left"></i></a></li>

                <PageItem page={pagearray} />

                <li className="page-item"><a className="page-link" href="#">
                    <i className="fa fa-angle-right"></i></a></li>
            </ul>
        </nav>
    );
}