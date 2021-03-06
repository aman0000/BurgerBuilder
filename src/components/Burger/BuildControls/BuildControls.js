import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Aloo Tikki', type: 'alooTikki' }
];
const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: ${props.price}</p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls;