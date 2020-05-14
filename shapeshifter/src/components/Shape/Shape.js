import React from 'react';
import './Shape.css';

const Shape = props => {

    let updatedShape = props.shape.shape.toLowerCase();

    console.log(updatedShape);

    switch (updatedShape) {
        case 'triangle':
            console.log("triangle hit")
            return (
                <div className="triangle" ></div>
            )

            break;
        case 'square':
            console.log("square hit")
            return (
                <div className="square" ></div>
            )

            break;
        case 'pentagon':
            console.log("pentagon hit")
            return (
                <div className="pentagon" ></div>
            )

            break;
        case 'hexagon':
            console.log("hexagon hit")
            return (
                <div className="hexagon" ></div>
            )

            break;
        case 'octagon':
            console.log("octagon hit")
            return (
                <div className="octagon" ></div>
            )

            break;
        case 'pacman':
            console.log("pacman hit")
            return (
                <div className="pacman" ></div>
            )

            break;
        default:
            console.log("deafult hit")
            return (
                <div className="circle" ></div >
            )

    }

}

export default Shape;