import React, { Fragment } from "react";
import PropTypes from 'prop-types';

ListItem.propTypes = {
    items: PropTypes.string,
    items: PropTypes.any.isRequired,
}

// Specifies the default values for props:
ListItem.defaultProps = {
    items: ['All']
};

export default function ListItem(props) {


    if (props != undefined && props.items != undefined) {
        return (
            <Fragment>
                {
                    props.items.map((item, key) => {
                        return <li key={item}><a href="#">{item}</a></li>
                    }
                    )}
            </Fragment>
        );
    } else {
        return <p>no data</p>
    }


}