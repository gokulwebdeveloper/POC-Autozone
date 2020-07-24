import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeStyle } from '../ShopHelper.js'
import { filterProducts } from '../../../Redux/actions';

ListItem.propTypes = {
    items: PropTypes.string,
    items: PropTypes.any.isRequired,
}

// Specifies the default values for props:
ListItem.defaultProps = {
    items: ['All']
};

function ListItem(props) {
    function handleClick(e) {
        e.preventDefault();
        changeStyle(e);
        props.filterProducts(props.productData, e.currentTarget.dataset.id, e.currentTarget.dataset.title);

    }

    if (props != undefined && props.items != undefined) {
        return (
            <Fragment>
                {

                    props.items.map((item, key) => {
                        return <li key={item} data-id={item}
                            data-title={props.title} onClick={handleClick}>
                            {item}
                        </li>
                    })
                }
            </Fragment>
        );
    } else {
        return <p>no data</p>
    }
}

const mapStateToProps = ({ productData }) => ({ productData })
export default connect(mapStateToProps, { filterProducts })(ListItem);