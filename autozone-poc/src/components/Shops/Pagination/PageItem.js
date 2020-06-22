import React, {Fragment} from 'react';

export default function PageItem(props) {

    return(
        <Fragment>
          {  props.page.map((item) => {
                return <li key={item.toString()} className="page-item"><a className="page-link" href="#">{item}</a></li>
                }
            )}
        </Fragment>
    );
}