import React, { Fragment } from "react";
import ListItem from "../ListItem/ListItem";
import PropTypes from 'prop-types';


Catagory.propTypes = {
    data: PropTypes.string,
    data: PropTypes.any.isRequired,
}

export default function Catagory(props) {
    if (props != undefined && props.data != undefined) {
        return (
            <Fragment>
                <li data-toggle="collapse" data-target={props.datatarget}>
                    <a href="#">{props.data.title}</a>
                    <ul className="sub-menu collapse hide" id={props.id}>
                        <ListItem items={props.data.items} />
                    </ul>
                </li>
            </Fragment>
        );
    } else {
        return <p>-</p>
    }

}