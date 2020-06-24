import React from 'react';
import backgroundImage from '../../../utlis/img/bg-img/breadcumb.jpg'

export default function ShopsHeader(props) {

    return(
        <div className="breadcumb_area bg-img" 
      
        style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="page-title text-center">
                            <h2>{props.heading}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}