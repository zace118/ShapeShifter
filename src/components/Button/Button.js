import React from 'react';
import './Button.css';

const Button = (props) => {

    return (
        <button
            id={(props.shapeName).toLowerCase()}
            onClick={props.onClick}>
            {props.shapeName}
        </button>
    )

}

export default Button;