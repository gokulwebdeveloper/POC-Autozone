import React, { useEffect } from 'react';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui-dist/jquery-ui.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import { connect } from 'react-redux';
import { filterProductsByRange } from '../../../Redux/actions';


function Slider(props) {
    var subTitle = "Filter by";
    var initialMinValue = 0;
    var initialMaxValue = 460;
    var selectedMinValue = 0;
    var selectedMaxValue = 0;

    useEffect(() => {
        $(function () {
            var minimun = props.min;
            var maximum = props.max;
            $("#slider-range").slider({
                range: true,
                min: initialMinValue,
                max: initialMaxValue,
                values: [minimun, maximum],
                slide: function (event, ui) {
                    $("#amount").val("Range: $" + ui.values[0] + " - $" + ui.values[1]);
                    selectedMinValue = ui.values[0];
                    selectedMaxValue = ui.values[1];
                    props.filterProductsByRange(props.productData, selectedMinValue, selectedMaxValue);
                }
            });
            $("#amount").val("Range: $" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
            
        });
    })

    return (
        <div className="widget price mb-50">

            <h6 className="widget-title mb-30">{subTitle}</h6>
            <p className="widget-title2 mb-30">Price</p>

            <div className="widget-desc">

                <div className="slider-range">
                    <div id="slider-range"></div>

                    <input style={{
                        border: '0', color: 'f6931f', textTransform: 'uppercase', marginTop: '15px',
                        fontWeight: '600', fontSize: '12px'
                    }}
                        type="text" id="amount" readOnly
                    >
                    </input>

                </div>
            </div>
        </div>
    );

}

const mapStateToProps = ({ productData }) => ({ productData })
export default connect(mapStateToProps, { filterProductsByRange })(Slider);