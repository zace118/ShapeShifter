import React from 'react';
import './ButtonDiv.css';
import ButtonRow from '../ButtonRow/ButtonRow';

const ButtonDiv = () => {

    const shapeOptions = {
        row1: ["Triangle", "Square", "Pentagon"],
        row2: ["Hexagon", "Heptagon", "Octogon"]
    }

    return (
        <div>
            <ButtonRow className="row1" shapeOptions={shapeOptions.row1} />
            <ButtonRow className="row2" shapeOptions={shapeOptions.row2} />
        </div>

    )
}

export default ButtonDiv;