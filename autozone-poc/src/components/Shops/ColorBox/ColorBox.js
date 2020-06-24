import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


ColorBox.propTypes = {
    colors: PropTypes.array,
    colors: PropTypes.any.isRequired,
}

// Specifies the default values for props:
ColorBox.defaultProps = {
    colors: ['color1', 'color2']
};

export default function ColorBox(props) {

    function ColorBoxItem(props) {

        return (
            <li><a href="#" className={props.value}></a></li>
        );
    }

    if (props != undefined && props.colors != undefined) {
        return (
            <div className="widget color mb-50">
                <p className="widget-title2 mb-30">Color</p>
                <div className="widget-desc">
                    <ul className="d-flex" >
                        {props.colors.map((item) => {
                            return <ColorBoxItem value={item} key={item.toString()} />
                        }
                        )}
                    </ul>
                </div>
            </div>
        );
    } else {
        return <p>no data</p>
    }

}