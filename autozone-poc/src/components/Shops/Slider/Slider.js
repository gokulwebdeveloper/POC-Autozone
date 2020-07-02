import React, { useEffect} from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui-dist/jquery-ui.css';
window.jQuery = $;
window.$ = $;


export default function Slider(props) {
    var subTitle = "Filter by";

    useEffect(() => {
        console.log("useEffect is called")
         $(function () {
            var minimun = props.min;
            var maximum = props.max;
             $("#slider-range").slider({
                 range: true,
                 min: 49,
                 max: 360,
                 values: [minimun, maximum],
                 slide: function (event, ui) {
                     $("#amount").val("Range: $" + ui.values[0] + " - $" + ui.values[1]);
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