import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { filterProducts } from '../../../Redux/actions';

function Brand(props) {
    function handleClick(e) {
        e.preventDefault();
        props.filterProducts(props.productData, e.currentTarget.dataset.id, e.currentTarget.dataset.title);
    }
    function BrandItem(childProps) {
        return (
            <li onClick={handleClick} data-id={childProps.value} data-title='Brands'>
                <a href="#" >{childProps.value} </a>
            </li>
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

const mapStateToProps = ({ productData }) => ({ 
    productData 
})
export default connect(mapStateToProps, { filterProducts })(Brand);

