import React, { Fragment } from "react";
import ListItem from "../ListItem/ListItem";
import PropTypes from 'prop-types';


Catagory.propTypes = {
    data: PropTypes.string,
    data: PropTypes.any.isRequired,
}

export default function Catagory(props) {
    function handleClick(e) {
        e.preventDefault();
    }

    if (props != undefined && props.data != undefined) {
        return (
            <Fragment>
                <li onClick={handleClick} >
                    <a href="#" data-target={props.datatarget}
                        data-toggle="collapse" data-target={"#" + props.id }>
                        {props.data.title}
                    </a>
                    <ul id={props.id} className="sub-menu show">
                        <ListItem items={props.data.items} title={props.data.title} />
                    </ul>
                </li>
            </Fragment>
        );
    } else {
        return <p>-</p>
    }

}