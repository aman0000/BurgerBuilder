import React from 'react';
import './Button.css';

const button = (props) => {
    let btnStyle = "Button " + props.btnType;
    return (
        <button disabled={props.disabled} className={btnStyle} onClick={props.clicked}>
            {props.children}
        </button>
    )

}

export default button;