import React, { Fragment } from 'react'

export default function Brand(props) {

    function BrandItem(props) {
        return (
             <li><a href="#" >{props.value}</a></li>
        );
    }

    return (
        <div className="widget brands mb-50">
            <p className="widget-title2 mb-30">Brands</p>
            <div className="widget-desc">
                <ul>
                    {props.brandList.map((item) => {
                       return <BrandItem value={item} key={item.toString()} />
                    }
                    )}
                </ul>
            </div>
        </div>
    );
}