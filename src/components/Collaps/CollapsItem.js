import './Collaps.scss'
import React from 'react';

const CollapsItem = (props) => {
    return ( 
        <div className="CollapsItem" style={{display:props.value == 0?'none':'block'}}>
            <div className="flex">
                <h5>{props.description}</h5>
                <h5>{props.value}€</h5>
            </div>

        </div>
     );
}
 
export default CollapsItem;