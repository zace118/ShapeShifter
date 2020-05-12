import React from 'react';
import Button from '../Button/Button'
import './ButtonRow.css';

const ButtonRow = props => {

    return (
        <div className="buttonRow">
            <Button shapeName={props.shapeOptions[0]} />
            <Button shapeName={props.shapeOptions[1]} />
            <Button shapeName={props.shapeOptions[2]} />
        </div>
    )
}

export default ButtonRow;
